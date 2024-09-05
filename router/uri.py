import json
from fastapi import APIRouter, HTTPException

UriRouter = APIRouter()

@UriRouter.get("/uri/pyacct")
async def serve_pyacct_uri():
    with open("config/config.json", "r") as fp:
        config = json.load(fp)
    try:
        return config['pyacct_uri']
    except KeyError:
        return HTTPException(status_code=404, 
                             detail="No URI set for PyAcct")
    
@UriRouter.get("/uri/authmail")
async def serve_authmail_uri():
    with open("config/config.json", "r") as fp:
        config = json.load(fp)
    try:
        return config['authmail_uri']
    except KeyError:
        return HTTPException(status_code=404, 
                             detail="No URI set for AuthMail")
