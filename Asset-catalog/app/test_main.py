from typer.testing import CliRunner

from main import app

runner = CliRunner()

def test_upload_success():
    result = runner.invoke(app, ["{'filename':'GoodNight.txt','content':'Good Night!!'}"])
    assert result.exit_code == 0
    assert 'Upload file is success!' in result.stdout
    
def test_file_exist():
    result = runner.invoke(app, ["{'filename':'Hello.txt','content':'Hello!!'}"])
    assert result.exit_code == 0
    assert 'Error: The file is exists!' in result.stdout
    