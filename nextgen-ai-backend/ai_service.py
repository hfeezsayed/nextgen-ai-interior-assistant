import re
from tools import save_lead

# In-memory session
user_sessions = {}

FIELDS = [
    ("name", "May I know your name?"),
    ("intent_confirm", ""),
    ("property_type", "Is it 1BHK, 2BHK, 3BHK or 4BHK?"),
    ("budget", "Nice! 👍 What’s your budget for this project?"),
    ("area", "Got it 😊 What’s the area in sqft?"),
    ("location", "Great! Which city is the project in?"),
    ("sub_location", "Perfect 👍 Which area in the city? (e.g., Andheri, Kurla)"),
    ("timeline", "Great 👍 When would you like to get started?"),
    ("phone", "Lastly 😊 please share your 10-digit phone number"),
]

IGNORE_WORDS = [
    "hi",
    "hey",
    "hello",
    "yes",
    "no",
    "this",
    "side",
    "here",
    "myself",
    "i",
    "am",
    "is",
    "name",
    "want",
    "interior",
    "design",
    "home",
    "project",
    "work",
    "need",
    "looking",
]

YES_WORDS = ["yes", "ha", "haa", "han", "y", "ok", "sure", "yeah"]
NO_WORDS = ["no", "nahi", "na", "not now", "later"]


# NAME VALIDATION
def is_valid_name(word):
    word = word.strip().lower()

    if word in IGNORE_WORDS:
        return False

    if not word.isalpha():
        return False

    if len(word) < 2 or len(word) > 15:
        return False

    if not any(v in word for v in "aeiou"):
        return False

    return True


# FIELD EXTRACTION
def extract_field(user_input, field):
    text = user_input.lower()

    # NAME
    if field == "name":
        text_clean = (
            text.replace("my name is", "")
            .replace("i am", "")
            .replace("i'm", "")
            .replace("this is", "")
            .replace("myself", "")
        )

        words = text_clean.split()

        for word in words:
            if is_valid_name(word):
                return word.title()

        return None

    # INTENT CHECK
    elif field == "intent_confirm":
        if any(word in text for word in YES_WORDS):
            return "yes"
        if any(word in text for word in NO_WORDS):
            return "no"
        return None

    # PROPERTY TYPE
    elif field == "property_type":
        match = re.search(r"(1|2|3|4)\s*bhk", text)
        if match:
            return match.group(1) + "BHK"

    # BUDGET
    elif field == "budget":
        match = re.search(r"\d+", text)
        if match:
            num = match.group()
            if any(x in text for x in ["lakh", "lac", "lpa"]):
                return num + " lakh"
            return num

    # AREA
    elif field == "area":
        match = re.search(r"\b\d{2,5}\b", text)
        if match:
            return match.group()

    # LOCATION
    elif field == "location":
        return user_input.title()

    # SUB LOCATION
    elif field == "sub_location":
        return user_input.title()

    # TIMELINE (POLISHED)
    elif field == "timeline":
        text = text.lower()

        if any(word in text for word in ["month", "week", "day"]):
            return user_input

        if any(word in text for word in ["now", "immediately", "asap"]):
            return "Immediately"

        if any(word in text for word in ["soon", "within", "next"]):
            return user_input

        if any(word in text for word in ["thinking", "plan", "planning", "idea"]):
            return "Planning stage"

        if len(user_input.split()) <= 6:
            return user_input

    # PHONE
    elif field == "phone":
        digits = re.findall(r"\d", user_input)
        if len(digits) == 10:
            return "".join(digits)
        return "INVALID_PHONE"

    return None


# MAIN FUNCTION
def get_ai_response(user_input: str, user_id: str = "default"):

    # INIT SESSION (SMART START)
    if user_id not in user_sessions:
        user_sessions[user_id] = {
            "name": "",
            "intent_confirm": "",
            "property_type": "",
            "budget": "",
            "area": "",
            "location": "",
            "sub_location": "",
            "timeline": "",
            "phone": "",
        }

        name = extract_field(user_input, "name")

        if name:
            user_sessions[user_id]["name"] = name
            return f"Nice to meet you, {name} 😊 Do you want interior design for your home?"

        return "May I know your name?"

    memory = user_sessions[user_id]

    # FIND CURRENT FIELD
    current_field = None
    for field, _ in FIELDS:
        if not memory.get(field):
            current_field = field
            break

    # INTENT HANDLING
    if current_field == "intent_confirm":
        intent = extract_field(user_input, "intent_confirm")

        if intent == "yes":
            memory["intent_confirm"] = "yes"
            return "Great 👍 Is it 1BHK, 2BHK, 3BHK or 4BHK?"

        elif intent == "no":
            user_sessions[user_id] = {}
            return "No worries 😊 Feel free to reach out anytime for your interior design queries!"

        else:
            return (
                "Just to confirm 😊 Are you looking for interior design for your home?"
            )

    # NORMAL EXTRACTION
    extracted = None

    if current_field:
        extracted = extract_field(user_input, current_field)

        if extracted == "INVALID_PHONE":
            return "Please enter a valid 10-digit phone number 📞"

        if extracted:
            memory[current_field] = extracted

    print("MEMORY:", memory)

    # ASK NEXT QUESTION
    for field, question in FIELDS:
        if not memory.get(field):

            if field == "intent_confirm":
                return f"Nice to meet you, {memory['name']} 😊 Do you want interior design for your home?"

            if field == "property_type":
                return "Great 👍 Is it 1BHK, 2BHK, 3BHK or 4BHK?"

            return question

    # SAVE LEAD
    save_lead.invoke(memory)

    # RESET SESSION
    user_sessions[user_id] = {}

    return f"Thanks {memory['name']}! 😊 Our team will contact you shortly."
