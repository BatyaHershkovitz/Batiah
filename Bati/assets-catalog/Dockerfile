FROM python:3.9

WORKDIR /asset-catalog

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["bash"]