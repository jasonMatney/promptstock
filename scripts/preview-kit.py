"""Local review server: python3 scripts/preview-kit.py. Saves only PNG review captures."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import re, sys
ROOT=Path(__file__).resolve().parents[1]
class Handler(SimpleHTTPRequestHandler):
 def __init__(self,*a,**kw):super().__init__(*a,directory=str(ROOT),**kw)
 def do_POST(self):
  m=re.fullmatch(r'/__kit_capture/((?:overview|tents|hero|crowd|aid|records|dog|robot|stage|picnic|grove)_(?:blockout|dressed)|play_(?:kick|records|aid|maker|finale|entrance))',self.path)
  n=int(self.headers.get('Content-Length',0))
  if not m or not 8<n<15000000:self.send_error(400);return
  b=self.rfile.read(n)
  if not b.startswith(b'\x89PNG\r\n\x1a\n'):self.send_error(400);return
  (ROOT/'art/skills-jam/renders'/f'{m[1]}.png').write_bytes(b);self.send_response(200);self.end_headers();self.wfile.write(b'Saved')
port=int(sys.argv[1]) if len(sys.argv)>1 else 8874
print(f'Kit review: http://127.0.0.1:{port}/skills-jam-3d.html',flush=True)
ThreadingHTTPServer(('127.0.0.1',port),Handler).serve_forever()
