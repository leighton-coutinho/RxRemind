# RxRemind
https://github.com/leighton-coutinho/RxRemind/assets/96268506/7fdfd70a-406b-4f88-906e-13d230227dae
## Overview
RxRemind is a web application designed to help doctors add their patients to a prescription reminder service. This platform ensures that patients receive timely reminders for their medication, improving adherence to prescribed treatments. The application leverages the MERN stack, with React.js for the frontend, Node.js for backend processing, MongoDB for data storage, and Twilio API for sending SMS reminders. The application is deployed on an AWS EC2 instance.

## Features

### Patient Registration and Management
- **Doctor's Dashboard**: Allows doctors to register new patients and manage existing patient information.
- **Patient Data Entry**: Utilizes React.js for a responsive and user-friendly interface to enter patient details into a MongoDB database.

### Reminder Service
- **Automated SMS Reminders**: Integrates with the Twilio API to send automated prescription reminders to patients via SMS.
- **Schedule Management**: Allows doctors to set reminder schedules tailored to each patient's prescription needs.

### Backend Processing
- **Node.js Server**: Handles backend logic, including processing patient data and scheduling reminders.
- **MongoDB Integration**: Stores patient data securely and efficiently, ensuring quick access and scalability.

### Deployment
- **AWS EC2**: Deployed on an AWS EC2 instance, ensuring high availability and scalability. The application is accessible at [http://3.88.142.186/](http://3.88.142.186/).
- **Nginx**: Utilized as a reverse proxy server to manage and direct incoming traffic to the application server.

## Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js
- **Database**: MongoDB
- **APIs**: Twilio API for SMS notifications
- **Deployment**: AWS EC2, Nginx

## Benefits
- **Improved Medication Adherence**: Helps reduce missed doses and improve overall treatment outcomes for patients.
- **Enhanced Patient Management**: Provides doctors with an efficient tool to manage patient prescription reminders.

