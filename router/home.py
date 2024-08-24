import requests

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse

HomeRouter = APIRouter()

@HomeRouter.get("/")
@HomeRouter.get("/home")
async def serve_home():
    with open("static/hicksmde-home/v1/home.html", "r") as fp:
        content = ''.join(fp.readlines())
    return HTMLResponse(content, 200)