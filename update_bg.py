import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_images = [
    "WhatsApp Image 2026-04-18 at 23.35.14.jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.15 (1).jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.15 (2).jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.15.jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.16 (1).jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.16 (2).jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.16.jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.17 (1).jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.17 (2).jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.17.jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.18 (1).jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.18 (2).jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.18.jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.19 (1).jpeg",
    "WhatsApp Image 2026-04-18 at 23.35.19.jpeg"
]

added_str = ", " + ", ".join([f'"{img}"' for img in new_images])

# We'll replace `"tanisha 6.jpeg"\n    ];` with `"tanisha 6.jpeg"` + added_str + `\n    ];`
new_content = content.replace('"tanisha 6.jpeg"\n    ];', '"tanisha 6.jpeg"' + added_str + '\n    ];')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Updated index.html safely with Python')
