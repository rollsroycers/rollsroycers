import json
import os
import re

ids = [
    '26a7fdb2-820d-45fc-9460-ce3c9e77ebda', # Article 126
    '8a065893-78dd-4e78-bb79-f4aa8ef24dd7', # Article 128
    'a9a7704a-5f4f-4822-9ac9-6c662259a778', # Article 129
    '9861c5f5-829a-4bed-9b66-cfe69336dd86', # Article 130
    '4c788128-01b3-4727-a1e1-4035d8783094', # Article 131
    '48ab274a-b493-4374-8a98-669b597ba6a4', # Article 133
    'adf94c50-a294-4588-b692-5e66b8c899f2', # Article 134
    'b46c4075-b205-4d1f-bd91-7e4f5100b7f3', # Article 135
    '049963e7-0eff-4e60-ba6e-3a854dad5f09', # Article 138
    '12148970-c28d-4e22-beaa-71312a7ea893', # Article 142
    '0b8836e4-28af-4c11-aa2c-9c71442642df', # Article 143
    '0b293dae-65a1-40d9-bd9a-c626bffc55f4'  # Article 145
]

for subagent_id in ids:
    transcript_path = f'/Users/ahmedsalem/.gemini/antigravity/brain/{subagent_id}/.system_generated/logs/transcript_full.jsonl'
    if not os.path.exists(transcript_path):
        print(f'Transcript for {subagent_id} does not exist!')
        continue
    
    print(f'Processing {subagent_id}...')
    written_files = []
    
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line in f:
            try:
                data = json.loads(line)
            except Exception as e:
                continue
            
            tool_calls = data.get('tool_calls', [])
            for call in tool_calls:
                name = call.get('name')
                args = call.get('args', {})
                # Sometimes args are a string or contain quotes
                if isinstance(args, str):
                    try:
                        args = json.loads(args)
                    except:
                        pass
                
                if name == 'write_to_file' or name == 'write_file':
                    target = args.get('TargetFile') or args.get('AbsolutePath')
                    content = args.get('CodeContent') or args.get('Code')
                    if target and content:
                        # Clean quotes if any
                        target = target.strip('"\'')
                        print(f'  Found write_to_file for {target}')
                        os.makedirs(os.path.dirname(target), exist_ok=True)
                        with open(target, 'w', encoding='utf-8') as out_f:
                            out_f.write(content)
                        written_files.append(target)
                elif name == 'multi_replace_file_content' or name == 'replace_file_content':
                    target = args.get('TargetFile')
                    print(f'  Warning: Found file content replacement for {target}. This is not a full write.')
    
    print(f'  Wrote files: {written_files}')
