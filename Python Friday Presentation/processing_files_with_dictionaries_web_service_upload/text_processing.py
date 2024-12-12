import json
import os
import requests
from datetime import datetime

def load_config():
    with open('config.json', 'r') as config_file:
        return json.load(config_file)

def process_text_file(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
    
    timestamp = datetime.now().isoformat()
    metadata = {
        "timestamp": timestamp,
        "file_name": os.path.basename(file_path),
        "content_length": len(content)
    }
    
    return {"metadata": metadata, "content": content}

def create_data_entry(data):
    return {
        "id": data["metadata"]["timestamp"],
        "file_name": data["metadata"]["file_name"],
        "content_length": data["metadata"]["content_length"],
        "content": data["content"]
    }

def upload_to_web_service(data):
    config = load_config()
    url = config["web_service_url"]
    
    try:
        response = requests.post(url, json=data)
        response.raise_for_status()  # Raise an exception for bad status codes
        return f"Data uploaded successfully. Status: {response.status_code}"
    except requests.exceptions.RequestException as e:
        return f"Error uploading data: {str(e)}"

def main():
    input_directory = 'data'
    files = os.listdir(input_directory)

    for file in files:
        if file.endswith('.txt'):
            file_path = os.path.join(input_directory, file)
            processed_data = process_text_file(file_path)
            formatted_data = create_data_entry(processed_data)
            
            result = upload_to_web_service(formatted_data)
            print(result)

if __name__ == "__main__":
    main()
