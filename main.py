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
        f'<li><a href="{bucket.blob(file).generate_signed_url(expiration=300)}">{file}</a></li>'
        for file in files
    ]
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Uploaded Files</title>
    </head>
    <body>
        <h1>Uploaded Files</h1>
        <ul>
            {''.join(file_links)}
        </ul>
    </body>
    </html>
    """
    return HTMLResponse(content=html_content)
