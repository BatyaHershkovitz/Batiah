import typer
import json
import os
import threading
from dotenv import load_dotenv

app = typer.Typer()
lock = threading.Lock()
load_dotenv()
server_path = os.getenv("SERVER_PATH")
cache_path = os.getenv("CACHE_PATH")
name = os.getenv("NAME")
content = os.getenv("CONTENT")

print('HELLO')
def upload_to_server(name: str, content: str):
    try:
        filename = os.path.basename(name)
        file_in_server = os.path.join(server_path, filename)

        if os.path.isdir(server_path) is False:
            raise Exception("server not found")

        with open(file_in_server, 'w') as server_directory:
            server_directory.write(content)  
    except Exception as e: 
        raise ValueError(f"Upload to server failed - {str(e)}.")

def upload_to_cache(name:str, content: str):
    newFile = {
        "name": name,
    }

    try:
        with open(cache_path, 'r+') as cache:
            data = json.load(cache)
            isFind = find(data, name)
            
            if isFind is False:
                data.append(newFile)
                json.dump(data, cache, indent=4, separators=(',', ': '))
                upload_to_server(name, content)
                return True
            return False
    except Exception as e:
        raise ValueError(f"Something went wrong when opening the file - {str(e)}.")

def find(data: object, name: str):
    result = list(filter(lambda item: item['name'] == name, data))
    return len(result) > 0

@app.command()
def upload_file(name: str = typer.Argument(name), content: str = typer.Argument(content)): 
    if os.path.isfile(cache_path) is False:
        raise Exception("File not found")
    
    try:
        lock.acquire()
        fileAdded = upload_to_cache(name, content) 
        lock.release()
    except Exception as e:
        raise ValueError (f"File not added, try again later - {str(e)}.")

    if fileAdded is True:
        return "The file is added to the cache"
    else:
        return "The file is not added to the cache" 

if __name__ == "__main__":
    app()
