# Asset Catalog

This assignment will simulate the various tasks around storing *assets* in a distributed system.
For all intents and purposes, the *assets* mentioned above could be of any type: audio, images, videos, text-data, binary-data, etc.
The goal of the assignment is to upload *assets* from any number of *remote clients* to a *centralized server* for persistent storage. The server is responsible for the storage of the actual data that represents the *asset*, as well as the metadata that describes the data.

## Run

```cmd
docker build -t <my_image> --rm .
```

```cmd
docker run -it --name <my_app> --rm <my_image>
```

The bash will open:

```bash
app_user@d9b446073cdc:/app:~$ python main.py "{'filename':'Hello.txt','file':'Hello world!!'}"
```

## Run the tests

```bash
app_user@d9b446073cdc:/app:~$ python -m pytest
```
