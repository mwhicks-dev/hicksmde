import requests

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse

ProjectsRouter = APIRouter()

@ProjectsRouter.get("/projects")
async def serve_projects():
    with open("static/hicksmde-wip/v1/wip.html", "r") as fp:
        content = ''.join(fp.readlines())
    return HTMLResponse(content, 200)