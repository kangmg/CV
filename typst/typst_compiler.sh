#!/bin/bash
# Converts cv-data.yml and project-gallery.yml to JSON and compiles to PDF using typst

set -euo pipefail

# Absolute path to the script directory
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$SCRIPT_DIR/.."

# Paths
CV_YAML="$PROJECT_ROOT/cv-data.yml"
PROJECT_GALLERY_YAML="$PROJECT_ROOT/project-gallery.yml"
DATA_DIR="$PROJECT_ROOT/data"
CV_JSON="$DATA_DIR/cv-data.json"
PROJECT_GALLERY_JSON="$DATA_DIR/project-gallery.json"
TYPST_BIN="$SCRIPT_DIR/typst"
TYPST_TEMPLATE="$SCRIPT_DIR/cv_format.typ"
PDF_OUT="$PROJECT_ROOT/public/data/CV.pdf"
YML2JSON="$SCRIPT_DIR/yml2json.py"

# Convert YAML to JSON
python3 "$YML2JSON" "$CV_YAML" "$CV_JSON"
python3 "$YML2JSON" "$PROJECT_GALLERY_YAML" "$PROJECT_GALLERY_JSON"

# Compile to PDF with typst
"$TYPST_BIN" compile --root "$PROJECT_ROOT" "$TYPST_TEMPLATE" "$PDF_OUT"
