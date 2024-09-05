import requests

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse

LoginRouter = APIRouter()

@LoginRouter.get("/login")
async def serve_login():
    with open("static/hicksmde-login/v1/login.html", "r") as fp:
        content = ''.join(fp.readlines())
    return HTMLResponse(content, 200)

@LoginRouter.get("/signup")
async def serve_signup():
    with open("static/hicksmde-login/v1/signup.html", "r") as fp:
        content = ''.join(fp.readlines())
    return HTMLResponse(content, 200)

@LoginRouter.get("/logout")
async def serve_logout():
    with open("static/hicksmde-login/v1/logout.html", "r") as fp:
        content = ''.join(fp.readlines())
    return HTMLResponse(content, 200)
