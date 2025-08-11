# BlogMania - Full-Stack Blog Platform

A modern, feature-rich blog platform built with React, Node.js, and MongoDB. BlogMania allows developers, designers, and marketers to share their stories, ideas, and knowledge with a beautiful and intuitive interface.

## 🚀 Features

### Core Features

- **User Authentication** - Secure authentication powered by Clerk
- **Blog Post Management** - Create, edit, and delete blog posts
- **Rich Text Editor** - Advanced content creation with React Quill
- **Image Upload** - Seamless image uploads with ImageKit integration
- **Categories & Tags** - Organize content with categories
- **Featured Posts** - Highlight important content
- **Comments System** - Interactive discussions on posts
- **Search Functionality** - Find content easily
- **Responsive Design** - Beautiful UI that works on all devices

### Advanced Features

- **Infinite Scroll** - Smooth pagination for better UX
- **Visit Tracking** - Monitor post popularity
- **Real-time Updates** - Dynamic content updates
- **SEO Optimized** - Clean URLs with slugs
- **Modern UI/UX** - Tailwind CSS powered design

## 🛠️ Tech Stack

### Frontend

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Query** - Data fetching and caching
- **React Quill** - Rich text editor
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **Clerk** - Authentication and user management

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Clerk Express** - Backend authentication
- **CORS** - Cross-origin resource sharing
- **ImageKit** - Image optimization and CDN

## 📁 Project Structure

```
full-stack-blog/
├── backend/                 # Node.js/Express API
│   ├── controllers/        # Route controllers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── middlewares/       # Custom middleware
│   └── lib/              # Database connection
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── routes/        # Page components
│   │   ├── layouts/       # Layout components
│   │   └── main.jsx       # App entry point
│   └── public/           # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Clerk account for authentication
- ImageKit account for image uploads

## 📖 Usage

### For Bloggers

1. **Sign Up/Login** - Create an account using Clerk authentication
2. **Create Posts** - Use the rich text editor to write engaging content
3. **Upload Images** - Add visual content with ImageKit integration
4. **Categorize** - Organize posts with relevant categories
5. **Publish** - Share your knowledge with the community

### For Readers

1. **Browse Posts** - Explore featured and recent posts
2. **Search Content** - Find specific topics or authors
3. **Read & Engage** - Read posts and leave comments
4. **Follow Categories** - Discover content in your areas of interest

## 🔧 API Endpoints

### Authentication

- `GET /auth-state` - Get current authentication state
- `GET /protect` - Protected route example

### Posts

- `GET /posts` - Get all posts (with pagination)
- `GET /posts/:id` - Get single post
- `POST /posts` - Create new post
- `PUT /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post

### Users

- `GET /users/:id` - Get user profile
- `PUT /users/:id` - Update user profile

### Comments

- `GET /comments/:postId` - Get comments for a post
- `POST /comments` - Create new comment
- `DELETE /comments/:id` - Delete comment

## 🎨 Key Components

### Frontend Components

- **Navbar** - Navigation and user menu
- **PostList** - Display posts with infinite scroll
- **FeaturedPosts** - Highlighted content section
- **Comments** - Interactive comment system
- **Write** - Rich text editor for post creation
- **Search** - Content discovery functionality

### Backend Features

- **Authentication Middleware** - Secure route protection
- **Image Upload** - Optimized image handling
- **Visit Tracking** - Post popularity metrics
- **Webhook Handling** - Real-time updates

## 🚀 Deployment

### Backend Deployment

1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables
3. Deploy to platforms like:
   - Heroku
   - Railway
   - Render
   - Vercel

### Frontend Deployment

1. Build the project: `npm run build`
2. Deploy to platforms like:
   - Vercel
   - Netlify
   - GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- **Clerk** for authentication
- **ImageKit** for image optimization
- **React Query** for data management
- **Tailwind CSS** for styling
- **MongoDB** for database

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

**Built with ❤️ using modern web technologies**

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
