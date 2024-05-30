FROM python:3.9

RUN useradd --create-home --shell /bin/bash app_user

WORKDIR /app

COPY ./requirements.txt ./

RUN pip install -r ./requirements.txt

USER app_user

COPY ./app ./app

CMD ["bash"]