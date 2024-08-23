import requests

from fastapi import APIRouter, HTTPException

BlogRouter = APIRouter()

@BlogRouter.get("/blog")
async def read_blog():
    response = requests.get("https://hicksm.dev/static/v1/wip/wip.html")
    if response.ok:
        return response.content
    raise HTTPException(404)