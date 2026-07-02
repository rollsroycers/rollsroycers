import json

file_path = "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com/src/data/blog/can-rent-exotic-cars-dubai-2026-fleet.json"

with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

for idx, block in enumerate(data["ar"]["content"]):
    text = block.get("text", "")
    if "تعتمد فلسفة" in text or "الخدمة الراقية" in text:
        print(f"AR Block {idx}: {text}")

for idx, block in enumerate(data["ru"]["content"]):
    text = block.get("text", "")
    if "Мы рады пригласить" in text:
        print(f"RU Block {idx}: {text}")
