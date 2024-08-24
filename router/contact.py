import requests

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse

ContactRouter = APIRouter()

@ContactRouter.get("/contact")
async def serve_contact():
    with open("static/hicksmde-wip/v1/wip.html", "r") as fp:
        content = ''.join(fp.readlines())
    return HTMLResponse(content, 200)