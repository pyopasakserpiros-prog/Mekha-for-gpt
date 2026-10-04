"""Run independent deterministic worlds and combine their checked results."""
from pathlib import Path
import concurrent.futures,subprocess,json
root=Path(__file__).resolve().parents[1]
seeds=[7,17,91,233,555,2026]
def run(seed):
 result=subprocess.run(['node','tests/living-longrun.js',str(seed)],cwd=root,capture_output=True,text=True)
 print(result.stdout,flush=True)
 if result.returncode:raise RuntimeError(result.stderr)
 p=root/'tests'/f'results-v140-longrun-{seed}.json'
 rows=json.loads(p.read_text());p.unlink();return rows
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
 rows=[row for group in pool.map(run,seeds) for row in group]
(root/'tests/results-v140-longrun.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
print('LONGRUN TOTAL',sum(row['days'] for row in rows),'days',flush=True)
