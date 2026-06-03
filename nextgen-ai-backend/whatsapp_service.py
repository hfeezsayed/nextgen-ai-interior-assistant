import requests
import os
from dotenv import load_dotenv

load_dotenv()

WHATSAPP_TOKEN = os.getenv("WHATSAPP_TOKEN")
PHONE_ID = os.getenv("WHATSAPP_PHONE_ID")
TO_NUMBER = os.getenv("917400291937")


def send_whatsapp_message(data):
    url = f"https://graph.facebook.com/v18.0/{PHONE_ID}/messages"

    message = f"""
    New Lead

Name: {data['name']}
Property: {data['property_type']}
Budget: {data['budget']}
Area: {data['area']} sqft
Location: {data['location']} - {data['sub_location']}
Timeline: {data['timeline']}
Phone: {data['phone']}
Source: Website
"""

    payload = {
        "messaging_product": "whatsapp",
        "to": TO_NUMBER,
        "type": "text",
        "text": {"body": message},
    }

    headers = {
        "Authorization": f"Bearer {WHATSAPP_TOKEN}",
        "Content-Type": "application/json",
    }

    try:
        res = requests.post(url, json=payload, headers=headers)
        print("WhatsApp Response:", res.json())
    except Exception as e:
        print("WhatsApp Error:", e)
