import unittest
from src.CLI_tool import upload_file

class TestUploadFile(unittest.TestCase):
    def test_fileNotExist(self):
        self.assertEqual(upload_file("dasi", "glick"), "The file is added to the cache")

    def test_sameName(self):
        self.assertEqual(upload_file("new", "hi!", "The file is not added to the cache" ))
