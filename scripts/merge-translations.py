#!/usr/bin/env python3
"""Utility to deep-merge translation data into existing JSON files."""
import json, os, sys

BASE = "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com/public/locales"

def deep_merge(base, override):
    result = base.copy()
    for k, v in override.items():
        if k in result and isinstance(result[k], dict) and isinstance(v, dict):
            result[k] = deep_merge(result[k], v)
        else:
            result[k] = v
    return result

def merge_into(lang, namespace, new_data):
    fp = os.path.join(BASE, lang, f"{namespace}.json")
    with open(fp, 'r', encoding='utf-8') as f:
        existing = json.load(f)
    merged = deep_merge(existing, new_data)
    with open(fp, 'w', encoding='utf-8') as f:
        json.dump(merged, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python merge-translations.py <data_module>")
        sys.exit(1)
    mod = __import__(sys.argv[1])
    for lang, ns_data in mod.DATA.items():
        for ns, content in ns_data.items():
            merge_into(lang, ns, content)
            print(f"  {lang}/{ns}.json merged")
    print("Done!")
