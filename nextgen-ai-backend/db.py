from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

# KEEP CONNECTION GLOBAL (NO RECONNECT EVERY TIME)
client = MongoClient(
    os.getenv("MONGO_URI"),
    serverSelectionTimeoutMS=3000,  # it prevent long wait
)

db = client["nextgen_ai"]


# SAVE LEAD
def save_to_db(data):
    try:
        db.leads.insert_one(data)
    except Exception as e:
        print("DB Save Error:", e)


# GET MEMORY
def get_user_memory(user_id):
    try:
        return db.memory.find_one({"user_id": user_id})
    except Exception as e:
        print("DB Fetch Error:", e)
        return None


# UPDATE MEMORY
def update_user_memory(user_id, memory):
    try:
        db.memory.update_one({"user_id": user_id}, {"$set": memory}, upsert=True)
    except Exception as e:
        print("DB Update Error:", e)
