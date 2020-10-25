import json

def read_from_file(path_to_file: str):
    file = open(path_to_file, "r")
    info = file.read()
    return info

def read_from_json_file(path_to_file: str):
    with open(path_to_file) as f:
        data = json.load(f)
        return data

def read_from_image_file(path_to_file: str):
    file = open(path_to_file, "rb")
    image = file.read()
    return image