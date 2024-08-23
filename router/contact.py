import requests

from fastapi import APIRouter, HTTPException

ContactRouter = APIRouter()

@APIRouter.get("/contact")
async def read_contact():
    response = requests.get("https://hicksm.dev/static/v1/wip/wip.html")
    if response.ok:
        return response.content
    raise HTTPException(404)