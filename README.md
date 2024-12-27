# IPFS File Uploader

This project is a file uploading tool using IPFS (InterPlanetary File System) for decentralized storage. It includes a React-based frontend and an Express.js backend, which interact with a local or global IPFS node.

---

## Features
- Upload files to IPFS and retrieve their unique CID.
- Display uploaded CID for file sharing.
- Decentralized storage using IPFS.
- Easy integration with local or global IPFS nodes.

---

## Technologies Used

### Frontend:
- React
- Axios

### Backend:
- Node.js
- Express.js
- ipfs-http-client

### Others:
- IPFS Daemon

---

## Setup and Installation

### Step 1: Clone the Repository
1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git

2.	Navigate to the project directory:

    ```bash
    cd your-repository-name

### Step 2: Backend Setup
1.	Navigate to the backend folder:
    ```bash
    cd backend


2.	Install the backend dependencies:
    ```bash
    npm install


3.	Start the backend server:
    ```bash
    node index.js

	•	The backend runs on http://localhost:5001.

### Step 3: IPFS Daemon
1.	Install and configure IPFS if not already installed:
	•	Follow the official IPFS installation guide.
2.	Start the IPFS daemon on your machine:

ipfs daemon

	•	Ensure the daemon is running before proceeding.

### Step 4: Frontend Setup
1.	Navigate to the frontend folder:

cd ../frontend


2.	Install the frontend dependencies:

npm install


3.	Start the frontend application:

npm start

	•	The frontend runs on http://localhost:3000.

## How to Use
1.	Open the frontend in your browser:
    •	Navigate to http://localhost:3000.
2.	Select a file using the “Choose File” button.
3.	Click the “Upload” button to upload the file to IPFS.
4.	After a successful upload, copy the displayed CID to share or access the file.

### Postman API Testing

To test the backend API directly:
1.	Open Postman or any HTTP client.
2.	Create a new POST request with the following details:
	•	URL: http://localhost:5001/upload
	•	Method: POST
3.	In the Body tab, select form-data and add the following key-value pair:
	•	Key: file
	•	Value: (Select the file to upload)
4.	Send the request. The response will include the CID of the uploaded file.

## Packages Used

### Frontend:
	•	react
	•	axios

### Backend:
	•	express
	•	ipfs-http-client
	•	multer (for handling file uploads)

## Future Enhancements
1.	Add CSS for a polished UI.
2.	Use global IPFS pinning services for permanent storage.
3.	Add user authentication for secure file uploads.
4.	Support additional file management features like deletion and metadata.

## Troubleshooting
	•	IPFS Daemon Not Running:
Make sure the IPFS daemon is started using ipfs daemon before running the backend.
	•	API Error in Postman:
Double-check the endpoint URL (http://localhost:5001/upload) and ensure the backend server is running.
	•	Frontend Not Loading:
Ensure dependencies are installed with npm install and the app is started using npm start.

## Detailed Explanation of the Project

### Backend Overview:
	•	Built with Node.js and Express.js.
	•	IPFS Connection:
The ipfs-http-client package is used to connect to the local IPFS daemon. This allows us to upload files to IPFS and retrieve their CID.
	•	File Uploading:
The multer middleware is used to handle file uploads from the frontend. Once a file is received, it is sent to the IPFS network.

### Frontend Overview:
	•	Built with React.
	•	File Selection and Upload:
Users can select files using an HTML <input> element. The selected file is sent to the backend via an HTTP POST request using axios.
	•	CID Display:
After the file is successfully uploaded to IPFS, the CID returned by the backend is displayed on the frontend.

## How the Project Works:
1.	Daemon Connection:
The backend connects to the IPFS daemon running locally. The daemon ensures that files are uploaded to the IPFS network and a CID is generated.
2.	Frontend and Backend Communication:
The frontend sends files to the backend API (/upload endpoint). The backend processes the file, uploads it to IPFS, and returns the CID to the frontend.
3.	CID Usage:
The CID can be used to retrieve the uploaded file from any IPFS gateway, such as:
	•	https://ipfs.io/ipfs/<CID>
	•	https://cloudflare-ipfs.com/ipfs/<CID>

## Why Use IPFS?
	•	Decentralized Storage:
Files are stored across a distributed network, making them resistant to censorship and server failures.
	•	Content Addressing:
Files are accessed using their CID, ensuring integrity and immutability.