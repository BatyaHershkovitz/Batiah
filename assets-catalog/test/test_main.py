from typer.testing import CliRunner

from src.main import app

runner = CliRunner()

def test_upload_success():
    result = runner.invoke(app, ["{'filename':'GoodNight.txt','content':'Good Night!!'}"])
    assert result.exit_code == 0
    assert "Upload file is success!" in result.stdout
    
def test_file_exist():
    result = runner.invoke(app, ["{'filename':'Hello.txt','content':'Hello!!'}"])
    assert result.exit_code == 0
    assert "Error: The file is exists!" in result.stdout
    
def test_no_filename():
    result = runner.invoke(app, ["{'content':'Hello!!'}"])
    assert result.exit_code == 1
    assert '' in result.stdout
    
def test_no_content():
    result = runner.invoke(app, ["{'filename':'Hello.txt'}"])
    assert result.exit_code == 0
    assert '' in result.stdout
    
def test_no_good_json():
    result = runner.invoke(app, ["'filename':'Hello.txt','content':'Hello!!'}"])
    assert result.exit_code == 1
    assert '' in result.stdout
    