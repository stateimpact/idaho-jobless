import os
import jinja2
import json
from fabric.api import *
from django.utils import encoding

here = os.path.abspath(os.path.dirname(__file__))
_f = lambda fn: os.path.join(here, fn)

env.unemployment = _f('data/unemployment-2012-04-09.json')
env.counties = _f('data/counties.json')
env.template = _f('config/index.jinja.html')

def build():
    render()
    local('jammit')

def render(debug=False):
    with open(env.template) as f:
        template = jinja2.Template(encoding.smart_unicode(f.read()))
    
    with open(env.unemployment) as f:
        unemployment = json.load(f)
    
    with open(env.counties) as f:
        counties = json.load(f)
    
    context = {
        'counties': json.dumps(counties),
        'unemployment': json.dumps(unemployment),
        'debug': debug
    }
    rendered = template.render(context)
    
    with open(_f('index.html'), 'wb') as index:
        index.write(encoding.smart_unicode(rendered).encode('utf8'))