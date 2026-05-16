# 📚 Online Book Borrowing Platform

---

## 🌐 Live Website

- 🔗 **Platform Live:** https://online-book-borrowing-platform.vercel.app/

---

## 📖 About The Project

The Online Book Borrowing Platform is a modern full-stack web application that
digitizes the traditional library system. Users can explore books, search by
title, filter by categories, and borrow books online.

The platform includes secure authentication, protected routes, and a responsive
design to ensure a smooth user experience across all devices. It is built using
modern technologies to ensure performance, scalability, and security.

---

## ✨ Key Features

- User Authentication (Login & Register)
- Google Social Login
- Browse All Books
- Search Books by Title
- Filter Books by Category (Story, Tech, Science)
- View Book Details
- Borrow Books (Private Route)
- User Profile Management
- Update User Information
- Responsive Design (Mobile, Tablet, Desktop)

---

## ⚙️ Functionality

- Users can create an account and log in securely
- Users can browse and search books
- Only logged-in users can access private routes
- Users can borrow books with confirmation
- Profile data can be updated (name & image)
- Category-based filtering system implemented
- Toast notifications for success/error feedback

---

## 🛠️ Technologies Used

- Next.js
- Tailwind CSS
- DaisyUI / HeroUI
- BetterAuth
- MongoDB
- swiper js

---

## 📦 Installation & Setup

```bash
# Clone repository
git clone https://github.com/nillworks/Online-Book-Borrowing-Platform

# Go to project folder
cd Online-Book-Borrowing-Platform

# Install dependencies
npm install

# Run the project
npm run dev

```

## 📁 Project Structure

```
Project Root
├── src
│   ├── app
│   │   ├── all-books
│   │   │   └── page.jsx
│   │   │
│   │   ├── api
│   │   │   └── auth
│   │   │       └── [...all]
│   │   │           └── route.js
│   │   │
│   │   ├── auth
│   │   │   ├── signin
│   │   │   │   └── page.jsx
│   │   │   └── signup
│   │   │       └── page.jsx
│   │   │
│   │   ├── books
│   │   │   └── [id]
│   │   │       └── page.jsx
│   │   │
│   │   ├── profile
│   │   │   └── page.jsx
│   │   │
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── not-found.jsx
│   │   └── page.js
│
│   ├── Components
│   │   ├── AllPages
│   │   │   ├── AllBooksPage
│   │   │   │   ├── AllBooksPage.jsx
│   │   │   │   ├── FilterBooks.jsx
│   │   │   │   └── SearchTram.jsx
│   │   │   │
│   │   │   ├── BooksDetailsPage
│   │   │   │   ├── BookButton.jsx
│   │   │   │   └── BookDetails.jsx
│   │   │   │
│   │   │   ├── HomePage
│   │   │   │   ├── BrowseByGenre.jsx
│   │   │   │   ├── FeaturedBooks.jsx
│   │   │   │   ├── FeaturedBooksCard.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── HomePage.jsx
│   │   │   │   ├── MarqueePage.jsx
│   │   │   │   └── TheLuminaExperience.jsx
│   │   │   │
│   │   │   └── UserProfile
│   │   │       ├── UpdateProfile.jsx
│   │   │       └── UserProfile.jsx
│   │   │
│   │   └── shared
│   │       ├── Footer.jsx
│   │       └── NavigationMenu.jsx
│
│   ├── lib
│   │   ├── auth-client.js
│   │   ├── auth.js
│   │   └── getBooksData.jsx
│
│   └── proxy.js

```
