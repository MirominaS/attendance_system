Attendance Management System (React + Spring Boot)

This project is a full-stack student attendance system integrating a React frontend with a Spring Boot backend, featuring JWT authentication and role-based access control.

📂 Project Structure
- **Frontend (`client/`):** React with React Router, Axios, and react-hot-toast.
- **Backend (`server/`):** Spring Boot with JWT security and REST APIs.
- `.env`: Stores environment variables (e.g., backend URL)

## 🛠️ Prerequisites
- Node.js (v18 or higher) and npm (v9 or higher)
- Java 17 (for backend)
- Spring Boot (for backend)

## 🚀 Setup Instructions
### 1. **Clone the Repository:**
```bash
git clone https://github.com/MirominaS/attendance_system.git
cd attendance_system
```
### 2. **Backend Setup:**
```bash
cd server
mvn clean install
mvn spring-boot:run
```
The server will run at `http://localhost:8080`

### 3. **Frontend Setup:**
```bash
cd ../client
cp .env.example .env
# Update .env with backend URL:
REACT_APP_API_SERVER_ENDPOINT=http://localhost:8080/api/
npm install
npm start
```
The frontend will be available at `http://localhost:3000`
### 4. **Configure Database:**
spring.datasource.url = jdbc:mysql://localhost:3306/attendance_system
spring.datasource.username = root
spring.datasource.password = ####

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto = update
spring.jpa.show-sql = true
```
## 🧪 Testing Credentials
- **User:**   `user1` / `password123`

## 📝 Usage Guide
- `/register`: Create a new account with Admin or User role.
- `/`: Log in with credentials.
- `/home`: Access the dashboard.
- `Logout`: Ends session and clears token.

## 💡 Key Features
- JWT token stored in `localStorage`.
- Real-time notifications with `react-hot-toast`.
- API communication with `serverConnector.js`.



