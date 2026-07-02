import json

file_path = "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com/src/data/blog/can-rent-exotic-cars-dubai-2026-fleet.json"

with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

print("--- EN BLOCK 3 ---")
print(data["en"]["content"][3]["text"])
print("\n--- RU BLOCK 0 ---")
print(data["ru"]["content"][0]["text"])
print("\n--- RU BLOCK 3 ---")
print(data["ru"]["content"][3]["text"])
print("\n--- RU BLOCK 7 ---")
print(data["ru"]["content"][7]["text"])
print("\n--- RU BLOCK 13 ---")
print(data["ru"]["content"][13]["text"])
print("\n--- AR BLOCK 17 ---")
print(data["ar"]["content"][17]["text"])
