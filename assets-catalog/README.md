# Asset Catalog

>This assignment will simulate the various tasks around storing *assets* in a distributed system.
For all intents and purposes, the *assets* mentioned above could be of any type: audio, images, videos, text-data, binary-data, etc.
The goal of the assignment is to upload *assets* from any number of *remote clients* to a *centralized server* for persistent storage. The server is responsible for the storage of the actual data that represents the *asset*, as well as the metadata that describes the data.

- The client is the CLI that can upload files to a remote server.
- The client cannot upload a file with the same name twice.
- Since many clients can run simultaneously, a lock is needed on the critical code section - on the file upload code.
- The client is only allowed to upload files, but not to modify or move files from the watched folder.

## Run

```cmd
docker build -t <IMAGE> --rm .
```

```cmd
docker run -it --name <APP_NAME> --rm <IMAGE>
```

The bash will open and you navigate to app directory:

```bash
root@788500cfd896:/asset-catalog:~$ cd app
```

Now you can run the app:

```bash
root@788500cfd896:/asset-catalog/app:~$ python main.py "{'filename':'Hello.txt','content':'Hello world!!'}"
```

## Run the tests

```bash
root@788500cfd896:/asset-catalog/app:~$ python -m pytest
```
