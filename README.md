# IgniisTech Fitness Web

A modern, responsive fitness and business solutions website built with React, Tailwind CSS, and Framer Motion.

🛠️ Tech Stack
Vite (React + Fast Refresh)
React19
Tailwind CSS: ``` To create intractive design ```
Framer Motion: ``` To give user to attractive and smooth effects ```
React Icons
React Router: ``` Yes, your project is using React Router v6's createBrowserRouter and RouterProvider for client-side routing.```
Toastify: ``` Tostify give us a toast notification in top-right of screen after the form submit. ```  


## Features

- Responsive hero section with animated images and call-to-action
- About section with animated stats and team info
- Services grid with animated cards
- Contact form with validation
- Google Maps integration for location
- Clean, modular React components
- Modern UI with Tailwind CSS

## Tech Stack

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## BrouserRouters
    We use in project is using React Router v6's createBrowserRouter and RouterProvider for client-side routing.
## How it works in your code: 
    You define routes using createBrowserRouter, mapping each path (like /, /AboutUs, /Services, etc.) to a React component.
    RouterProvider is used in your App component to enable routing throughout the app.
    This setup allows navigation between pages (Home, AboutUs, Services, OurProjects, Contact) without reloading the page.



## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```
### 3. To start and run 
``` base
npm run dev
```
follow the link after it display on your terminal


## Folder Structure

```
Public/  # Static assets (images, bg-images, etc.)

src/
  components/   # Reusable React components in this folder we create our home page ( Hero, HeroContent, HeroImages, About, Footer, Header, Hero, Projects, Service,   Teams, Testimonials )
        ``` In Home.jsx import all the components ```

  pages/        # Page-level components (Contact, AboutUs, OurProjects, Services etc.) And the details of the pages have been created in a folder named pages which                   contains the information of the pages 
  assets/       # In there logo of igniis 
  App.js
  index.js
```
⚠️ ## Avoid: avoid this components it is not for use in web.
        ----  HeroSection.jsx ----- 

## Deployment

You can deploy this app to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any static hosting that supports React.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by the IgniisTech team**
