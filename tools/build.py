"""Build a portable offline entry point using only the Python standard library."""
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
html = (root / 'index.dev.html').read_text(encoding='utf-8')
css = (root / 'css/style.css').read_text(encoding='utf-8')
if '</style' in css.lower():
    raise ValueError('CSS contains an HTML closing tag')
html = html.replace('<link rel="stylesheet" href="css/style.css">', '<style>\n' + css + '\n</style>')

def inline(match):
    source = (root / match[1]).read_text(encoding='utf-8')
    if '</script' in source.lower():
        raise ValueError('JavaScript contains an HTML closing tag')
    return '<script>\n' + source + '\n</script>'

html = re.sub(r'<script src="([^"]+)"></script>', inline, html)
(root / 'index.html').write_text(html, encoding='utf-8')
print('Built standalone index.html')
