import json
import typer
import threading
import os
import ast

app = typer.Typer()
# watch_directory = './watch.json'
dir_path = os.path.dirname(os.path.realpath(__file__))
watch_directory = os.path.join(dir_path, 'watch.json')


class Upload_asset:
    def __init__(self, initial__response=''):
        self._response = initial__response
        self._key_lock = threading.Lock()

    def upload(self, asset):
        if os.path.exists(watch_directory):
            self._key_lock.acquire()
            if is_exist(asset):
                self._response = 'Error: The file is exists!'
            else:
                self._response = upload_file(asset)
            self._key_lock.release()
        else:
            self._response = 'Error: The watch directory not found!'


def upload_file(asset):
    try:
        if write_to_cash(asset) & upload_to_server(asset):
            return 'Upload file is success!'
    except:
        return 'Upload file is failed!'


def write_to_cash(asset):
    try:
        with open(watch_directory) as data_file:
            asset_data = json.load(data_file)
        asset_data.append({"filename": asset["filename"]})
        with open(watch_directory, 'w') as json_file:
            json.dump(asset_data, json_file,
                      indent=4,
                      separators=(',', ': '))
        return True
    except:
        return False


def upload_to_server(asset):
    try:
        if asset['filename']:
            fn = os.path.basename(asset['filename'])
            open(fn, 'w').write(asset['content'])
        return True
    except:
        return False


def is_exist(asset):
    with open(watch_directory, 'r') as data_cache:
        asset_data = json.load(data_cache)
        for file in asset_data:
            if file['filename'] == asset['filename']:
                return True
        return False


@app.command()
def upload_asset(asset: str = typer.Argument(..., callback=ast.literal_eval)):
    service_upload = Upload_asset()
    service_upload.upload(asset)
    print(service_upload._response)


if __name__ == "__main__":
    app()
    
