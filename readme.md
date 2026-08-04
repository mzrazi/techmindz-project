# Product Inventory Manager

A full-stack Product Inventory Management application built using the MERN stack.

## Features

- View all products
- Add new products
- Edit existing products
- Delete products
- Search products by name or category
- Sort products by name, price, and quantity
- Low stock indicator
- Responsive UI

---

## Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Structure

```
product-inventory-manager/

├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/mzrazi/techmindz-project.git
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file.

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Run frontend

```bash
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

---

## Author

**Muhammed Zaeem Razi**

GitHub: https://github.com/mzrazi

LinkedIn: https://linkedin.com/in/mzrazi