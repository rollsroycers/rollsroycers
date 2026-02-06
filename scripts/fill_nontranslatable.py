#!/usr/bin/env python3
"""Copy all non-translatable missing values (numbers, bools, paths, IDs, promo codes)
from EN common.json to all other languages."""
import json, os, copy

BASE = "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com/public/locales"

def flatten(d, prefix=''):
    items = {}
    for k, v in d.items():
        key = f'{prefix}.{k}' if prefix else k
        if isinstance(v, dict):
            items.update(flatten(v, key))
        else:
            items[key] = v
    return items

def set_nested(d, key_path, value):
    keys = key_path.split('.')
    current = d
    for k in keys[:-1]:
        if k not in current:
            current[k] = {}
        current = current[k]
    current[keys[-1]] = value

def deep_merge(base, override):
    result = copy.deepcopy(base)
    for k, v in override.items():
        if k in result and isinstance(result[k], dict) and isinstance(v, dict):
            result[k] = deep_merge(result[k], v)
        else:
            result[k] = copy.deepcopy(v)
    return result

def is_nontranslatable(key, value):
    """Check if a value doesn't need translation (copy from EN as-is)."""
    if isinstance(value, (int, float, bool)):
        return True
    if isinstance(value, str):
        # Promo codes
        if key.endswith('.code'):
            return True
        # IDs, images
        if key.endswith('.id') or key.endswith('.image'):
            return True
        if value.startswith('/images/') or value.startswith('http'):
            return True
        # Phone numbers, emails, coordinates, prices in AED, technical values
        if value.startswith('+971') or '@' in value and '.' in value:
            return True
        if value.startswith('AED ') or value.startswith('From AED'):
            return True
        if 'GPS:' in value or '°N' in value or '°E' in value:
            return True
        # Technical specs that are just measurements
        if value.endswith(' mm') or value.endswith(' km/h') or value.endswith(' seconds'):
            return True
        if value.endswith(' rpm') or value.endswith(' hp') or value.endswith(' Nm'):
            return True
        # Values that are just numbers with units
        if value.replace(',', '').replace('.', '').replace(' ', '').isdigit():
            return True
    if isinstance(value, list):
        # Arrays of objects (features with name/available) - copy structure
        if value and isinstance(value[0], dict):
            return True
    return False

with open(f'{BASE}/en/common.json', 'r') as f:
    en = json.load(f)
en_flat = flatten(en)

for lang in ['ar', 'hi', 'ru', 'zh', 'fr']:
    fp = f'{BASE}/{lang}/common.json'
    with open(fp, 'r', encoding='utf-8') as f:
        lang_data = json.load(f)
    lang_flat = flatten(lang_data)
    missing = set(en_flat.keys()) - set(lang_flat.keys())
    
    new_data = {}
    copied = 0
    for key in missing:
        val = en_flat[key]
        if is_nontranslatable(key, val):
            set_nested(new_data, key, val)
            copied += 1
    
    if new_data:
        merged = deep_merge(lang_data, new_data)
        with open(fp, 'w', encoding='utf-8') as f:
            json.dump(merged, f, ensure_ascii=False, indent=2)
    
    remaining = len(missing) - copied
    print(f"{lang.upper()}: copied {copied} non-translatable keys, {remaining} still need translation")
