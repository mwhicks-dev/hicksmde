import requests

from fastapi import APIRouter, HTTPException

ProjectsRouter = APIRouter()

@ProjectsRouter.get("/projects")
async def read_projects():
    response = requests.get("https://hicksm.dev/static/v1/wip/wip.html")
    if response.ok:
        return response.content
    raise HTTPException(404)