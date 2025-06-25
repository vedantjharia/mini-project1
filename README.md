# mini-project1
# 🛒 Mystore Backend

This is a robust Node.js backend for an e-commerce platform, built with **Express**, **MongoDB (Mongoose)**, and **EJS**.  
It provides a solid foundation for online stores, supporting user authentication, product management, cart functionality, admin/owner features, and more.

---

## ✨ Features

- **User Authentication & Authorization**
  - Secure registration, login, and logout using JWT-based sessions.
  - Passwords are hashed with bcrypt for security.
  - Middleware to protect routes and ensure only logged-in users or admins can access certain pages.

- **Admin/Owner Panel**
  - Owners can create and manage products.
  - Owner creation is restricted to development mode for security.

- **Product Management**
  - Add, view, and manage products.
  - Product images are uploaded using Multer and stored as buffers in MongoDB.
  - All product details (name, price, discount, colors, etc.) are managed via Mongoose models.

- **Shopping Cart**
  - Users can add products to their cart.
  - Cart is populated with full product details using Mongoose's populate feature.
  - Cart page displays product images, names, prices, and allows for quantity adjustments.
  - Price breakdown includes total MRP, discounts, platform fee, and net total.

- **Flash Messages**
  - User feedback for actions (success/error) using connect-flash.
  - Flash messages are displayed on relevant pages after redirects.

- **Session Management**
  - Secure sessions with express-session.
  - Session secrets and other sensitive data are managed via environment variables.

- **EJS Templating**
  - Dynamic server-side rendering for all views.
  - Clean, responsive UI using Tailwind CSS (or your preferred CSS framework).

- **Environment Variables**
  - Secure configuration using `.env` for secrets, database URIs, and other sensitive settings.

---

## 🗂️ Project Structure

```
/config         # Configuration files (Mongoose, Multer, etc.)
/controllers    # Route controllers (auth, products, etc.)
/middlewares    # Custom middleware (auth checks, etc.)
/models         # Mongoose models (User, Product, Owner)
/routes         # Express routers (users, owners, products, index)
/views          # EJS templates for all pages
/public         # Static assets (CSS, fonts, images)
.env            # Environment variables (not committed)
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/mystore-backend.git
cd mystore-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your `.env` file

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_uri_here
EXPRESS_SESSION_SECRET=your_session_secret_here
JWT_SECRET=your_jwt_secret_here
```

### 4. Run the server

```bash
node app.js
```
or, for development with auto-reload:
```bash
nodemon app.js
```

---

## 🛠️ Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — Web framework
- **MongoDB & Mongoose** — Database and ODM
- **EJS** — Templating engine
- **Multer** — File/image uploads
- **connect-flash** — Flash messages
- **express-session** — Session management
- **dotenv** — Environment variable management
- **bcrypt** — Password hashing
- **jsonwebtoken** — JWT authentication

---

## 📦 API & Routing Overview

- `/users` — User registration, login, logout
- `/owners` — Owner/admin actions (restricted)
- `/products` — Product creation and management
- `/cart` — User cart operations
- `/shop` — Product listing for users
- `/admin` — Admin dashboard

---

## 📝 Customization & Contribution

- **Add new features:** Fork the repo and submit a pull request!
- **Change the UI:** Edit EJS templates and static assets in `/views` and `/public`.
- **Switch database:** Update the Mongoose connection string in your `.env`.
- **Improve security:** Use strong secrets and consider HTTPS in production.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

**Feel free to fork, contribute, or use this as a starter for your own e-commerce projects! If you have questions or suggestions, open an issue or pull
