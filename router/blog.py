import requests

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse

BlogRouter = APIRouter()

@BlogRouter.get("/blog")
async def serve_blog():
    with open("static/hicksmde-blog/v1/blog.html", "r") as fp:
        content = ''.join(fp.readlines())
    return HTMLResponse(content, 200)

@BlogRouter.get("/blog/post/{post_id}")
async def serve_blog_post(post_id: str):
    with open("static/hicksmde-blog/v1/blog_post.html", "r") as fp:
        content = ''.join(fp.readlines())
    return HTMLResponse(content, 200)
