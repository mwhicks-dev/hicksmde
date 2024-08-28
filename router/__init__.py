from fastapi import APIRouter

from .blog import BlogRouter
from .contact import ContactRouter
from .home import HomeRouter
from .login import LoginRouter
from .projects import ProjectsRouter
from .resume import ResumeRouter
from .uri import UriRouter

routers: list[APIRouter] = [BlogRouter, ContactRouter, HomeRouter, LoginRouter, ProjectsRouter, ResumeRouter, UriRouter]