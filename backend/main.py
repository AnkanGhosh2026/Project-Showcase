from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from pydantic import BaseModel
import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Project Showcase API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Groq
api_key = os.getenv("GROQ_API_KEY")
if api_key and api_key != "your_api_key_here":
    client = Groq(api_key=api_key)
else:
    client = None


class Project(BaseModel):
    id: int
    name: str
    description: str
    category: str
    url: str
    emoji: str
    color: str
    image: str


PROJECTS: List[Project] = [
    Project(
        id=1,
        name="Lead Gen Automation Agent",
        description="AI-driven lead generation engine that automatically identifies, qualifies, and scores prospects — cutting outreach time by hours every day.",
        category="AI Agent",
        url="https://lead-gen-v01-frontend.onrender.com/",
        emoji="🎯",
        color="#6366f1",
        image="/images/lead-gen.png"
    ),
    Project(
        id=2,
        name="AI Crop Disease Detection",
        description="Upload a crop photo and get instant disease diagnosis powered by deep learning — helping farmers protect yields before it's too late.",
        category="Computer Vision",
        url="https://agriculture-1-bhqx.onrender.com/",
        emoji="🌿",
        color="#22c55e",
        image="/images/crop.png"
    ),
    Project(
        id=3,
        name="Pre Sales AI Agent",
        description="An intelligent pre-sales assistant that handles inbound queries, qualifies leads, and books demos — fully on autopilot.",
        category="AI Agent",
        url="https://presalesaiagent.vestaging.in/",
        emoji="🤝",
        color="#f59e0b",
        image="/images/presales.png"
    ),
    Project(
        id=4,
        name="Travel Content Automation",
        description="Auto-generates SEO-optimised travel blogs, captions, and social posts from a single destination prompt — in seconds.",
        category="Automation",
        url="https://travel-content-automation-agent-1.onrender.com/",
        emoji="✈️",
        color="#0ea5e9",
        image="/images/travel.png"
    ),
    Project(
        id=5,
        name="EduBridge",
        description="AI-powered education platform that bridges learning gaps with personalised study paths, quizzes, and real-time feedback.",
        category="EdTech",
        url="https://edubridge-1-ntxj.onrender.com/",
        emoji="📚",
        color="#a855f7",
        image="/images/edubridge.png"
    ),
    Project(
        id=6,
        name="Kosher Stay",
        description="Discover and book kosher-certified accommodations worldwide — a curated platform built for travellers who never compromise on standards.",
        category="Web App",
        url="https://kosherstay2.vercel.app/",
        emoji="🏨",
        color="#ec4899",
        image="/images/kosherstay.png"
    ),
]


class ChatRequest(BaseModel):
    message: str
    history: List[dict] = []

class ChatResponse(BaseModel):
    response: str
    error: Optional[str] = None

SYSTEM_PROMPT = """You are Ankan Ghosh's AI assistant, embedded in his portfolio website.
Your job is to answer questions about Ankan, his skills, and his projects based ONLY on the following context.
Be concise, friendly, and professional. If someone asks something unrelated to Ankan's professional work or portfolio, politely steer the conversation back.

Context about Ankan Ghosh:
- I'm Ankan Ghosh — an AI engineer and full-stack developer.
- I focus on building automation agents, computer-vision pipelines, and intelligent web applications.
- My work uses modern LLMs, FastAPI backends, and React frontends.
- I have 6+ Live Projects deployed across Render, Vercel & custom domains.
- I have built 3+ AI Agents (Lead generation, pre-sales, content automation).
- Domains covered: AgriTech, EdTech, SaaS, Hospitality.

Key Projects:
1. Stubline - Event Management System: Browse published events from organizers. Pick tickets and log in to book.
2. Lead Gen Automation Agent: AI-driven lead generation engine that automatically identifies, qualifies, and scores prospects.
3. AI Crop Disease Detection: Upload a crop photo and get instant disease diagnosis powered by deep learning.
4. Pre Sales AI Agent: An intelligent pre-sales assistant that handles inbound queries, qualifies leads, and books demos.
5. Travel Content Automation: Auto-generates SEO-optimised travel blogs, captions, and social posts from a single destination prompt.
6. EduBridge: AI-powered education platform bridging learning gaps with personalised study paths and real-time feedback.
7. Kosher Stay: Discover and book kosher-certified accommodations worldwide.
"""

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(req: ChatRequest):
    if not client:
        return ChatResponse(response="", error="Chatbot is currently offline (Groq API key not configured in backend).")
    
    try:
        messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        
        for msg in req.history:
            messages.append({"role": msg["role"], "content": msg["content"]})
            
        messages.append({"role": "user", "content": req.message})
        
        chat_completion = client.chat.completions.create(
            messages=messages,
            model="openai/gpt-oss-20b",
            temperature=0.3,
        )
        return ChatResponse(response=chat_completion.choices[0].message.content)
    except Exception as e:
        return ChatResponse(response="", error=str(e))


@app.get("/api/projects", response_model=List[Project])
def get_projects():
    return PROJECTS


@app.get("/")
def root():
    return {"message": "Project Showcase API is running"}
