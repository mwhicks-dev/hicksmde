import requests

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse

HomeRouter = APIRouter()

@HomeRouter.get("/")
@HomeRouter.get("/home")
async def serve_home():
    response = requests.get("https://hicksm.dev/static/v1/home/home.html")
    if response.ok:
        return HTMLResponse(response.content, 200)
    raise HTTPException(404)