import requests

from fastapi import APIRouter, HTTPException

ResumeRouter = APIRouter()

@ResumeRouter.get("/resume")
async def read_resume():
    response = requests.get("https://hicksm.dev/static/v1/wip/wip.html")
    if response.ok:
        return response.content
    raise HTTPException(404)