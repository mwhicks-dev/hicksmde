import requests

from fastapi import APIRouter, HTTPException

HomeRouter = APIRouter()

@HomeRouter.get("/")
@HomeRouter.get("/home")
async def read_home():
    response = requests.get("https://hicksm.dev/static/v1/home/home.html")
    if response.ok:
        return response.content
    raise HTTPException(404)