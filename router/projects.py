import requests

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse

ProjectsRouter = APIRouter()

@ProjectsRouter.get("/projects")
async def serve_projects():
    with open("static/hicksmde-projects/v1/projects.html", "r") as fp:
        content = ''.join(fp.readlines())
    return HTMLResponse(content, 200)

@ProjectsRouter.get("/project/{project_id}")
async def serve_project(project_id: str):
    with open("static/hicksmde-projects/v1/project.html", "r") as fp:
        content = ''.join(fp.readlines())
    return HTMLResponse(content, 200)