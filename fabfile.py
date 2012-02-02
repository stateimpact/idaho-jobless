import os
import jinja2
import json
from fabric.api import *
from django.utils import encoding

here = os.path.abspath(os.path.dirname(__file__))
_f = lambda fn: os.path.join(here, fn)

def render():
    with open(_f('config/index.jinja.html')) as f:
        template = jinja2.Template(encoding.smart_unicode(f.read()))
    
    with open(_f('data/unemployment.json')) as f:
        unemployment = json.load(f)
    
    with open(_f('data/counties.json')) as f:
        counties = json.load(f)
    
    context = {
        'counties': json.dumps(counties),
        'unemployment': json.dumps(unemployment)
    }
    rendered = template.render(context)
    
    with open(_f('index.html'), 'wb') as index:
        index.write(encoding.smart_unicode(rendered).encode('utf8'))