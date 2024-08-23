import uvicorn

from fastapi import FastAPI

from router import routers

app = FastAPI()
for router in routers:
    app.include_router(router)

if __name__ == '__main__':
    uvicorn.run("main:app", port=8000, reload=True)
    
