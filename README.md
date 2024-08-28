# hicksmde-mapping: Mapping controller for hicksmde-*

Sits on port 8000 and maps all of my website src from nice URLs.

## Installation

This is developed in Python 3.12. Run

```bash
pip install -r requirements.txt
```

to obtain all packages needed.

Docker deployment options available in Usage.

## Quick start

Once dependencies installed and configured (see Dependencies), run

```bash
uvicorn main:app --host 0.0.0.0 --port 80
```

and mapping ctl wil run on port 80 of caller.

## Usage

### Dependencies

**PyAcct**

This webpage depends on a v1.x instance of [PyAcct](https://github.com/mwhicks-dev/pyacct). Ensure it is running, and that you have its URI (in the form of `pyacct_address:pyacct_port`) stored as an environment variable `URI_PYACCT`.

### Run Webpage

For simple local runtime, see the Quick Start section. This section will focus on Docker.

Build script:

```bash
docker build --no-cache -t hicksmde .
```

This docker image pulls the web source directly, so `--no-cache` is recommended.

In order to specify a certain directory, use `--build-arg TARGET={tree_name}` (for instance, `--build-arg TARGET=dev`). This will use `main` by default.

Run script:

```bash
docker run --rm -e URI_PYACCT={pyacct-address}:{pyacct-port} -p 80:80 hicksmde
```

You can detach this using `-d` if you would like, but testing first without is recommended. A successful run will result in being able to access the website directly via `localhost` on a local browser, or by referencing the host's public IP address on a local web browser.
