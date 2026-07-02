import json

file_path = "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com/src/data/blog/can-rent-exotic-cars-dubai-2026-fleet.json"

with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

print("RU Block 3 Text:")
print(data["ru"]["content"][3]["text"])
print("\nRU Block 13 Text:")
print(data["ru"]["content"][13]["text"])
