import os
from fastapi import APIRouter, HTTPException

UriRouter = APIRouter()

@UriRouter.get("/uri/pyacct")
async def serve_pyacct_uri():
    try:
        return os.environ['URI_PYACCT']
    except KeyError:
        return HTTPException(status_code=404, 
                             detail="No URI set for PyAcct")