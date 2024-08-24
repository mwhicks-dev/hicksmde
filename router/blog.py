import requests

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse

BlogRouter = APIRouter()

@BlogRouter.get("/blog")
async def serve_blog():
    with open("static/hicksmde-wip/v1/wip.html", "r") as fp:
        content = ''.join(fp.readlines())
    return HTMLResponse(content, 200)