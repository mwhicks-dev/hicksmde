import os

from fastapi import APIRouter, HTTPException

UriRouter = APIRouter()

@UriRouter.get("/uri/pyacct")
async def serve_pyacct_uri():
    try:
        return os.environ["PYACCT_URI"]
    except KeyError:
        return HTTPException(status_code=404, 
                             detail="No environment variable PYACCT_URI found")
    
@UriRouter.get("/uri/authmail")
async def serve_authmail_uri():
    try:
        return os.environ["AUTHMAIL_URI"]
    except KeyError:
        return HTTPException(status_code=404, 
                             detail="No environment variable AUTHMAIL_URI found")
