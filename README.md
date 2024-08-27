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

Once dependencies installed, run

```bash
python main.py
```

and mapping ctl wil run on port 8000 of caller.

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
docker run --rm -p 80:80 hicksmde
```

You can detach this using `-d` if you would like, but testing first without is recommended. A successful run will result in being able to access the website directly via `localhost` on a local browser, or by referencing the host's public IP address on a local web browser.
