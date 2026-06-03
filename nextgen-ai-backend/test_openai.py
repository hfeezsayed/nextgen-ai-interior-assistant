import os
from dotenv import load_dotenv
from openai import OpenAI

# Load .env file
load_dotenv()

# Get API key
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Send test prompt
response = client.chat.completions.create(
    model="gpt-4o-mini", messages=[{"role": "user", "content": "Hello"}]
)

print(response.choices[0].message.content)
