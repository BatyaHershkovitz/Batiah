FROM python:3.9

WORKDIR /asset-catalog/

COPY . /asset-catalog/

RUN pip install -r requirements.txt

CMD [ "python", "src/CLI_tool.py" ]
