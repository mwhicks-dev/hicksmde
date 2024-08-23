import requests

from fastapi import APIRouter, HTTPException

LoginRouter = APIRouter()

@LoginRouter.get("/login")
async def read_login():
    response = requests.get("https://hicksm.dev/static/v1/wip/wip.html")
    if response.ok:
        return response.content
    raise HTTPException(404)

@LoginRouter.get("/signup")
async def read_signup():
    response = requests.get("https://hicksm.dev/static/v1/wip/wip.html")
    if response.ok:
        return response.content
    raise HTTPException(404)

@LoginRouter.get("/logout")
async def read_logout():
    response = requests.get("https://hicksm.dev/static/v1/wip/wip.html")
    if response.ok:
        return response.content
    raise HTTPException(404)