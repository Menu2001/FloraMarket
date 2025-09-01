# Flower Shop - MERN Stack Application

A beautiful and modern flower shop website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- **User Authentication**: Register and login functionality with JWT tokens
- **Flower Catalog**: Browse and search through a collection of beautiful flowers
- **Responsive Design**: Modern UI built with Material-UI that works on all devices
- **Filtering & Sorting**: Filter flowers by category and sort by price, name, or category
- **Detailed Product Pages**: Comprehensive flower details with images and specifications
- **Contact Form**: Get in touch with the flower shop team
- **About Page**: Learn about the company and team

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React.js** - JavaScript library for building user interfaces
- **Material-UI** - React component library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

## Project Structure

```
Flower_site/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Flower.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── flowers.js
│   ├── server.js
│   ├── config.env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── FlowerList.js
│   │   │   ├── FlowerDetail.js
│   │   │   ├── About.js
│   │   │   └── Contact.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/flower_site
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Flowers
- `GET /api/flowers` - Get all flowers (with optional query parameters)
- `GET /api/flowers/:id` - Get a specific flower
- `POST /api/flowers` - Create a new flower (Admin only)
- `PUT /api/flowers/:id` - Update a flower (Admin only)
- `DELETE /api/flowers/:id` - Delete a flower (Admin only)
- `GET /api/flowers/category/:category` - Get flowers by category

## Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Environment (development/production)

## Usage

1. Start both backend and frontend servers
2. Open your browser and navigate to `http://localhost:3000`
3. Register a new account or login with existing credentials
4. Browse the flower catalog and explore the features

## Features in Detail

### User Authentication
- Secure registration and login with password hashing
- JWT token-based authentication
- Protected routes and user sessions

### Flower Management
- Complete CRUD operations for flowers
- Image support for flower products
- Category-based organization
- Stock management and availability tracking

### User Interface
- Responsive design that works on desktop, tablet, and mobile
- Modern Material-UI components
- Smooth animations and transitions
- Intuitive navigation and user experience

### Search and Filter
- Real-time search functionality
- Category-based filtering
- Multiple sorting options (name, price, category)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email info@flowershop.com or create an issue in the repository.

## Acknowledgments

- Material-UI for the beautiful component library
- Unsplash for the flower images
- The React and Node.js communities for excellent documentation
