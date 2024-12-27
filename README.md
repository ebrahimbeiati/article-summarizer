# React + Vite - Article Summariser App

Welcome to the **Article Summariser App** built with **React** and **Vite**! This app allows users to input a URL or article text, and the app generates a concise summary of the content. It uses the **Vite** build tool for a fast development environment, **React** for the frontend, and integrates with an article summarisation API to generate summaries.

## Table of Contents

1. [Getting Started 🚀](#getting-started)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Plugins Setup](#plugins-setup)
7. [Licence](#licence)
8. [Contact](#contact)

## Getting Started 🚀

Follow these steps to set up and run the **Article Summiser App** on your local machine.

### Prerequisites

Before starting, ensure you have:

- **Node.js** and **npm** installed on your machine.
- **A Summarisation API key** (you can use APIs like [OpenAI GPT](https://platform.openai.com/docs/guides/gpt) or any other summarisation service).
- **Vite** set up to run React projects.

### Setting Up the Project

1. **Clone the Repository**:

   Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-repo/article-summariser-app.git
   cd article-summariser-app
   ```

2. **Install Dependencies**:

   Install the required dependencies using npm:
   ```bash
   npm install
   ```

3. **Configure API Key**:

   - If you're using a summarisation API like OpenAI, add your API key to the `.env` file:
     ```
     REACT_APP_API_KEY=your_api_key_here
     ```

4. **Start Development Server**:

   To start the development server, run:
   ```bash
   npm run dev
   ```

   The app will be live at `http://localhost:3000`.

## Features

The **Article Summariser App** offers the following features:

- **Summarise Articles**: Users can input article URLs or text, and the app will generate a concise summary.
- **Simple UI**: An easy-to-use interface where users can input article content or link and see a summary in real-time.
- **Fast Updates**: Leveraging Vite's Hot Module Replacement (HMR), changes are reflected instantly during development.
- **ESLint Integration**: Ensures clean and consistent code with built-in ESLint rules.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: A next-generation build tool that provides fast builds and live reloading during development.
- **Article Summarisation API**: An API used to generate summaries for long articles or content.
- **Tailwind CSS** (optional): Utility-first CSS framework for styling the app's UI.
- **ESLint**: Linter for maintaining code quality and consistency.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/article-summariser-app.git
   cd article-summariser-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your API key in the `.env` file:
   ```
   REACT_APP_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   Visit the app at `http://localhost:3000` in your browser.

## Plugins Setup

This app uses the following official Vite plugins for optimal development:

1. **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**:
   - Uses **Babel** for Fast Refresh during development.

2. **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**:
   - Uses **SWC** for faster builds and Fast Refresh.

You can choose the plugin that best suits your needs based on performance preferences.

## Licence

This project is licensed under the **MIT Licence**. See the [LICENSE](./LICENSE) file for more details.

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: (https://github.com/ebrahimbeiati/article-summarizer)

---

Enjoy using and building the **Article Summariser App**!