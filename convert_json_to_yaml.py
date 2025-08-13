#!/usr/bin/env python3
"""
Convert JSON CV data to YAML format
"""

import json
import yaml
import os

def convert_json_to_yaml():
    """Convert cv-data.json to cv-data.yml"""
    
    # Read JSON file
    with open('data/cv-data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Write YAML file
    with open('cv-data.yml', 'w', encoding='utf-8') as f:
        yaml.dump(data, f, default_flow_style=False, allow_unicode=True, sort_keys=False)
    
    print("Successfully converted JSON to YAML and saved as cv-data.yml")

if __name__ == "__main__":
    convert_json_to_yaml()
