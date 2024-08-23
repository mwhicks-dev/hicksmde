import requests

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse

ProjectsRouter = APIRouter()

@ProjectsRouter.get("/projects")
async def serve_projects():
    response = requests.get("https://hicksm.dev/static/v1/wip/wip.html")
    if response.ok:
        return HTMLResponse(response.content, 200)
    raise HTTPException(404)