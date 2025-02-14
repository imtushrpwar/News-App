# 📰 NewsApp

## Overview

**NewsApp** is a lightweight, responsive web application built with React that allows users to browse the latest news headlines across various categories. The app fetches live data from the **[NewsAPI](https://newsapi.org/)**, ensuring users stay informed with up-to-date news in real-time.

---

## ✨ Features

- 🔹 **Dynamic News Categories**: Easily switch between categories like Technology, Business, Health, Science, Sports, and Entertainment.
- 🔹 **Responsive Design**: Optimized for all devices—desktops, tablets, and mobile phones.
- 🔹 **Live Updates**: Fetch the latest headlines in real-time using NewsAPI.
- 🔹 **Fallback Images**: Articles without images display a default placeholder.
- 🔹 **Intuitive Interface**: Clean and easy-to-use design.

---

## 🛠️ Technologies Used

- **React**: For building the user interface.
- **Bootstrap**: For responsive styling and layout.
- **NewsAPI**: To fetch live news data.
- **Vite**: For a faster development and build process.

---

## 🚀 Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/newsapp.git
   cd newsapp
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the environment variable**:

   - Create a `.env` file in the root directory.
   - Add your [NewsAPI key](https://newsapi.org/register) as follows:
     ```env
     VITE_API_KEY=your_newsapi_key_here
     ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Access the app**:
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 📂 Folder Structure

```
src/
├── components/
│   ├── NavBar.jsx       // Navigation bar for category selection
│   ├── NewsBoard.jsx    // Fetches and displays news articles
│   └── NewsItem.jsx     // Individual news card component
├── assets/
│   └── news.jpg         // Default image for articles
├── App.jsx              // Main application component
├── main.jsx             // Entry point for the React app
├── index.css            // Global styles
```

---

## 🌐 Deployment

To deploy the app:

1. **Build the production-ready app**:

   ```bash
   npm run build
   ```

2. **Host the app** using services like:
   - [Vercel](https://vercel.com/)
   - [Netlify](https://www.netlify.com/)
   - [GitHub Pages](https://pages.github.com/)

---

## 🤝 Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add feature description"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature-name
   ```
5. **Open a pull request**.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[NewsAPI](https://newsapi.org/)** for providing the live news data.
- **[Bootstrap](https://getbootstrap.com/)** for styling and responsive design.

---

Feel free to explore, use, and contribute to **NewsApp**! 🌟
