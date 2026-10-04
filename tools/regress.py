"""Verify gameplay, migration and the actual self-contained entry point."""
from pathlib import Path
import subprocess,sys
root=Path(__file__).resolve().parents[1]
subprocess.run([sys.executable,'tools/build.py'],cwd=root,check=True)
names=['suite','patch','parity','living','living-deep','living-management','apprenticeship','migration-v140','ui_test','patch-ui','parity-ui','living-ui','apprenticeship-ui','portable','world-v200','world-integration','world-ui','world-storage','migration-v200','civil-v210','civil-ui-test','civil-action-audit']
report=[]
for name in names:
 result=subprocess.run(['node','tests/'+name+'.js'],cwd=root,capture_output=True,text=True)
 report.append('TEST '+name+' — exit '+str(result.returncode)+'\n'+result.stdout+result.stderr)
 print(name,'PASS' if result.returncode==0 else 'FAIL',flush=True)
 (root/'tests/results-v210-core.txt').write_text('\n'.join(report),encoding='utf-8')
 if result.returncode:print(result.stdout+result.stderr);sys.exit(result.returncode)
if '--long' in sys.argv:subprocess.run([sys.executable,'tools/longrun.py'],cwd=root,check=True)
print('ALL OFFICIAL REGRESSIONS PASS',len(names))
