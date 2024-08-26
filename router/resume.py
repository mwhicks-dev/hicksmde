import requests

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse

ResumeRouter = APIRouter()

@ResumeRouter.get("/resume")
async def serve_resume():
    with open("static/hicksmde-resume/v1/resume.html", "r") as fp:
        content = ''.join(fp.readlines())
    return HTMLResponse(content, 200)