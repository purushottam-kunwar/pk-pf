import datetime

import firebase_admin
from firebase_admin import credentials, storage
from fastapi import FastAPI, File, UploadFile
from starlette.responses import HTMLResponse

app = FastAPI()

# Set up Firebase credentials
firebase_credentials = credentials.Certificate('./pk-pf-d0df7-firebase-adminsdk-4sof4-d7978db981.json')
firebase_app = firebase_admin.initialize_app(firebase_credentials, {
    'storageBucket': 'pk-pf-d0df7.appspot.com'
})
bucket = storage.bucket()

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    filename = file.filename
    blob = bucket.blob(filename)
    blob.upload_from_file(file.file)
    return {"message": "File uploaded successfully!"}

@app.get("/files/")
async def display_files():
    blobs = bucket.list_blobs()
    files = [blob.name for blob in blobs]
    file_links = [
        {bucket.blob(file).generate_signed_url(expiration=datetime.timedelta(days=10))}
        for file in files
    ]
    link = file_links[0].pop()
    print('link', link)
    html_content = f"""
        <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Preview PDF</title>
            
            </head>
            <body>
            <header id="header" style="background-color: #333; color: #fff; padding: 10px; text-align: center;">
                <h1>PURUSHOTTAM KUNWAR</h1>
            </header>
            <div style="display:flex; align-items:center; justify-content:center">
            
                <div id="pdf-preview" style="width:50%; height: 800px; margin: 20px auto; border: 1px solid #ccc;">
                    <!-- Insert your PDF preview here -->
                      <iframe src=f"{link}" width="100%" height="600px"></iframe>
                </div>
                <div id="pdf-preview" style="width:50%; height: 800px; margin: 20px auto; border: 1px solid #ccc;">
                    <!-- Insert your PDF preview here -->
                    <embed src="path/to/your/pdf/file.pdf" type="application/pdf" width="100%" height="100%"/>
                </div>
            </div>
            <a id="download-button" href="path/to/your/pdf/file.pdf" download
               style="display: block; width: 200px; margin: 0 auto; text-align: center; padding: 10px; background-color: #4CAF50; color: #fff; text-decoration: none; border-radius: 4px;">Download
                PDF</a>

    """
    return HTMLResponse(content=html_content)
