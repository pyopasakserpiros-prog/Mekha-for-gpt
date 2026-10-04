"""Parallel isolated world processes, not parallel agent work."""
from pathlib import Path
import concurrent.futures,subprocess,json
root=Path(__file__).resolve().parents[1]
seeds=[7,17,91,233,555,2026]
def run(seed):
 result=subprocess.run(['node','tests/world-stress.js',str(seed),'3600'],cwd=root,capture_output=True,text=True)
 print(result.stdout,flush=True)
 if result.returncode:raise RuntimeError(result.stderr)
 return json.loads((root/'tests'/f'results-v200-stress-{seed}.json').read_text())
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
 rows=list(pool.map(run,seeds))
(root/'tests/results-v200-stress.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
print('ALL STRESS PASS',sum(r['days'] for r in rows),'days')
