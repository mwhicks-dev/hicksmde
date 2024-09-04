# hicksmde-mapping: Mapping controller for hicksmde-*

FastAPI web server for my portfolio website. The latest version of my website is (usually) at [hicksm.dev](https://hicksm.dev), but if not, you can also find the latest development version at [this AWS node](http://34.226.123.156/).

## Installation

This is developed in Python 3.12. Run

```bash
pip install -r requirements.txt
```

to obtain all packages needed and `git submodule update --init --recursive` to install the submodules (HTML/CSS/JS source).

Docker deployment options available in Usage.

### Dependencies

This website will call on an instance of [PyAcct](https://github.com/mwhicks-dev/pyacct) v2 and [AuthMail](https://github.com/mwhicks-dev/authmail) v1 services for account management and email servicing respectively, so make sure that you have an appropriate version of those two services running. Any subversion is fine as this repository and its submodules only really care about the REST API, which does not (or at least shouldn't) change between subversions.

In the `config/config.json` file, which you should create a copy of from the `.template` version, you should specify the addresses where you need to access that API from. The IP should also be accessible via CORS configuration in those two services.

## Quick start

Once dependencies installed and configured (see Dependencies), run

```bash
uvicorn main:app --host 0.0.0.0 --port 80
```

and mapping ctl wil run on port 80 of caller.

## Usage

For simple local runtime, see the Quick Start section. This section will focus on Docker.

Build script:

```bash
docker build --no-cache -t hicksmde .
```

This docker image pulls the web source directly, so `--no-cache` is recommended.

In order to specify a certain directory, use `--build-arg TARGET={tree_name}` (for instance, `--build-arg TARGET=dev`). This will use `main` by default.

Run script:

```bash
docker run --rm -v /$(pwd)/config/:/hicksmde-mapping/config/ -p 80:80 hicksmde
```

You can detach this using `-d` if you would like, but testing first without is recommended. A successful run will result in being able to access the website directly via `localhost` on a local browser, or by accessing the host public IP by your web browser if it is remote.
