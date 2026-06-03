from fastapi import FastAPI
from ai_service import get_ai_response
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "AI Backend running"}


@app.get("/chat")
def chat(message: str, user_id: str = "user1"):
    response = get_ai_response(message, user_id)
    return {"response": response}
