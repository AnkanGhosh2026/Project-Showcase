from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from pydantic import BaseModel

app = FastAPI(title="Project Showcase API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


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


@app.get("/api/projects", response_model=List[Project])
def get_projects():
    return PROJECTS


@app.get("/")
def root():
    return {"message": "Project Showcase API is running"}
