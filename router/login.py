import requests

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse

LoginRouter = APIRouter()

@LoginRouter.get("/login")
async def serve_login():
    response = requests.get("https://hicksm.dev/static/v1/wip/wip.html")
    if response.ok:
        return HTMLResponse(response.content, 200)
    raise HTTPException(404)

@LoginRouter.get("/signup")
async def serve_signup():
    response = requests.get("https://hicksm.dev/static/v1/wip/wip.html")
    if response.ok:
        return HTMLResponse(response.content, 200)
    raise HTTPException(404)

@LoginRouter.get("/logout")
async def serve_logout():
    response = requests.get("https://hicksm.dev/static/v1/wip/wip.html")
    if response.ok:
        return HTMLResponse(response.content, 200)
    raise HTTPException(404)