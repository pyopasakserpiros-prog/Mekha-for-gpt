"""Rebuild and verify the offline archive. Python standard library only."""
from pathlib import Path
import hashlib,json,re,subprocess,sys,zipfile
root=Path(__file__).resolve().parents[1]
subprocess.run([sys.executable,str(root/'tools/build.py')],check=True)
html=(root/'index.html').read_text(encoding='utf-8')
assert not re.search(r'<script\b[^>]*\bsrc=',html,re.I)
assert not re.search(r'<link\b[^>]*\brel="stylesheet"',html,re.I)
assert not re.search(r'\bfetch\s*\(',html)
assert 'js/patch-ui.js' not in html
files=sorted(p for p in root.rglob('*') if p.is_file() and p.name!='MANIFEST.json' and '__pycache__' not in p.parts)
manifest={'version':'2.1.0','schema':8,'entry':'index.html','files':{str(p.relative_to(root)):{'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in files}}
(root/'MANIFEST.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
output=root.parent/(root.name+'.zip')
with zipfile.ZipFile(output,'w',zipfile.ZIP_DEFLATED,compresslevel=9) as archive:
 for p in [*files,root/'MANIFEST.json']:archive.write(p,str(Path(root.name)/p.relative_to(root)))
with zipfile.ZipFile(output) as archive:
 assert archive.testzip() is None
 for name,info in manifest['files'].items():
  b=archive.read(str(Path(root.name)/name));assert len(b)==info['bytes'];assert hashlib.sha256(b).hexdigest()==info['sha256']
 assert archive.read(root.name+'/index.html')==(root/'index.html').read_bytes()
print('Verified archive:',output,'bytes:',output.stat().st_size,'files:',len(files)+1)
