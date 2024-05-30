from typer.testing import CliRunner

from main import app

runner = CliRunner()

def test_upload_success():
    result = runner.invoke(app, ["{'filename':'GoodNight.txt','file':'Good Night!!'}"])
    assert result.exit_code == 1
    assert "Upload file is success!" in result.stdout
    
def test_file_exist():
    result = runner.invoke(app, ["{'filename':'Hello.txt','file':'Hello!!'}"])
    assert result.exit_code == 0
    assert "Error: The file is exists!" in result.stdout

def test_upload_failed():
    result = runner.invoke(app, ["{'filename':'Hello2.txt'}"])
    assert result.exit_code == 0
    assert "Upload file is failed!" in result.stdout
    