"""Generate the website."""

import os
import json
import logging

from jinja2 import Template

TEMPLATE_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), "templates")

def generate_website():
    """Generate the website from jinja templates."""
    with open(os.path.join(TEMPLATE_FOLDER, "index.html"), "r") as file:
        html_code = file.read()
    with open(os.path.join(TEMPLATE_FOLDER, "data.json"), "r") as file:
        data = json.load(file)
    
    template = Template(html_code)
    with open('index.html', "w") as file:
        file.write(template.render(data=data))

if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)
    generate_website()