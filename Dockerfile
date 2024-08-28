FROM python:3.12-bookworm
ARG TARGET=main

RUN apt install git -y

RUN git clone https://github.com/mwhicks-dev/hicksmde-mapping

WORKDIR /hicksmde-mapping
RUN git checkout ${TARGET} && git pull
RUN git submodule update --init --recursive
RUN pip install -r requirements.txt

ENTRYPOINT ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80", "--workers", "4"]
