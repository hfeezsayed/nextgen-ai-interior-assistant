from langchain_core.tools import tool
from db import save_to_db
from whatsapp_service import send_whatsapp_message
import threading


@tool
def save_lead(
    name: str,
    property_type: str,
    budget: str,
    area: str,
    location: str,
    sub_location: str,
    timeline: str,
    phone: str,
) -> str:
    """
    Save lead data to MongoDB and send to WhatsApp
    """

    # Prepare data
    data = {
        "name": name,
        "property_type": property_type,
        "budget": budget,
        "area": area,
        "location": location,
        "sub_location": sub_location,
        "timeline": timeline,
        "phone": phone,
        "source": "Website",  # Added source tracking
    }

    # Save to DB
    try:
        save_to_db(data)
    except Exception as e:
        print("DB Save Error:", e)

    # Send WhatsApp (NON-BLOCKING)
    try:
        threading.Thread(
            target=send_whatsapp_message,
            args=(data,),
        ).start()
    except Exception as e:
        print("WhatsApp Thread Error:", e)

    return f"Lead saved for {name}"
