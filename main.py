import uvicorn

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from router import routers

app = FastAPI()
for router in routers:
    app.include_router(router)

app.mount("/static", StaticFiles(directory="static"))
