import sys
import os
import json
import re

# Add current directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

import build_much_2025_post

blog_data = build_much_2025_post.blog_data

# 1. Update slug-based image paths in content
for locale in ['en', 'ar', 'ru']:
    for block in blog_data[locale]['content']:
        if block.get('type') == 'image' and 'much-2025-rolls-royce-rent-newest-models-dubai-inline.webp' in block.get('src', ''):
            block['src'] = '/images/blog/much-2025-rolls-royce-rent-dubai-inline.webp'

# 2. Update cover image paths
for locale in ['en', 'ar', 'ru']:
    blog_data[locale]['image'] = '/images/blog/much-2025-rolls-royce-rent-dubai-cover.jpg'

# 3. Update titles
blog_data['en']['title'] = "How Much Is a 2025 Rolls-Royce? Pricing & Dubai Rental Guide"
blog_data['ar']['title'] = "كم سعر سيارة رولز رويس لعام 2025؟ دليل الأسعار وتأجير دبي"
blog_data['ru']['title'] = "Сколько стоит Rolls-Royce 2025 года? Цены и гид по аренде в Дубае"

# 4. Update date & publishAt
for locale in ['en', 'ar', 'ru']:
    blog_data[locale]['date'] = "2026-11-02"

blog_data['publishAt'] = "2026-11-02T12:00:00+04:00"

# 5. Update descriptions to fit 150-160 characters
blog_data['en']['description'] = "Rent a 2025 Rolls-Royce in Dubai from AED 3,800/day. Compare purchasing vs renting, depreciation, and luxury hire rates for Ghost, Cullinan, and Phantom."
blog_data['ar']['description'] = "استأجر رولز رويس 2025 في دبي بدءاً من 3,800 درهم يومياً. قارن بين الشراء والاستئجار واهتلاك القيمة ونسب تأجير أسطولنا الفاخر لدى شركة نقرة بدبي."
blog_data['ru']['description'] = "Аренда Rolls-Royce 2025 в Дубае от 3 800 AED/день. Сравните стоимость покупки, амортизацию и тарифы проката Ghost, Cullinan и Phantom в нашей компании."

# 6. Insert exact primary keyword in Block 0 of EN
en_block_0 = blog_data['en']['content'][0]
target_str = "To understand how much 2025 rolls royce latest prices dubai hire options cost, we must look at the standard market pricing and compare the showroom cost with the daily rental rates."
replacement_str = "To evaluate much 2025 rolls royce pricing dubai rental options, we must look at the standard market pricing and compare the showroom cost with the daily rental rates."
if target_str in en_block_0['text']:
    en_block_0['text'] = en_block_0['text'].replace(target_str, replacement_str)
    print("EN Block 0 updated with primary keyword.")
else:
    print("Warning: EN Block 0 target string not found!")

# 7. Write output file
target_path = "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com/src/data/blog/much-2025-rolls-royce-rent-dubai.json"
with open(target_path, 'w', encoding='utf-8') as f:
    json.dump(blog_data, f, ensure_ascii=False, indent=2)

print("Successfully wrote fixed JSON file to:", target_path)
