import json

file_path = "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com/src/data/blog/can-rent-exotic-cars-dubai-2026-fleet.json"

with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

blocks_to_show = [0, 1, 3, 7, 10, 13]

for locale in ["en", "ar", "ru"]:
    print(f"=== LOCALE: {locale} ===")
    for b_idx in blocks_to_show:
        block = data[locale]["content"][b_idx]
        print(f"Block {b_idx} ({block['type']}):\n{block.get('text', block.get('items', ''))}\n")
    print("-" * 50)
