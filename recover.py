import json
import os

path = r'C:\Users\Amina Ashraf\.gemini\antigravity-ide\brain\67501bee-6476-49ab-bfae-22399c5ef103\.system_generated\logs\transcript_full.jsonl'
latest_content = None
step_found = 0

with open(path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'PLANNER_RESPONSE':
                for tool in data.get('tool_calls', []):
                    args = tool.get('args', {})
                    if tool['name'] == 'write_to_file' and 'IndustriesPage.jsx' in str(args.get('TargetFile', '')):
                        latest_content = args.get('CodeContent', '')
                        step_found = data.get('step_index', 0)
        except Exception:
            pass

print(f"Latest full write found at step {step_found}")
if latest_content:
    with open('IndustriesPage_recovered.jsx', 'w', encoding='utf-8') as out:
        out.write(latest_content)
    print("Recovered to IndustriesPage_recovered.jsx")
