# ChatGPT Clone - React.js

A feature-rich, responsive ChatGPT clone built with React.js and the OpenAI API, providing a seamless chat interface similar to the official ChatGPT application.

![ChatGPT Clone Preview](https://img.shields.io/badge/Status-Active-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react) ![OpenAI](https://img.shields.io/badge/OpenAI-API-412991?logo=openai)

## 🚀 Features

- **Modern UI/UX**: Clean, responsive interface that mimics the official ChatGPT experience
- **Real-time Chat**: Interactive chat interface with message history
- **Quick Prompts**: Pre-defined queries for quick testing
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **OpenAI Integration**: Powered by OpenAI's GPT-3.5-turbo model
- **Message History**: View conversation history in real-time
- **New Chat**: Start fresh conversations with a single click

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Styling**: CSS Modules
- **Build Tool**: Vite
- **AI Integration**: OpenAI API
- **Package Manager**: npm

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16.14.0 or higher)
- npm (v8.5.0 or higher)
- OpenAI API key

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YashrajKamble/ChatGPT-Clone-By-React-JS.git
cd ChatGPT-Clone-By-React-JS
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add your OpenAI API key:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🏗️ Project Structure

```
src/
├── assets/              # Static assets (images, icons, etc.)
├── App.jsx             # Main application component
├── App.css             # Global styles
├── main.jsx            # Application entry point
├── openai.js           # OpenAI API integration
└── index.css           # Base styles
```

## 🔧 Configuration

The application can be configured through the following environment variables:

| Variable              | Description                          | Default Value |
|-----------------------|--------------------------------------|---------------|
| VITE_OPENAI_API_KEY   | Your OpenAI API key                  | -             |

## 🤖 OpenAI API Integration

The application uses the OpenAI API for generating responses. The following models and parameters are configured by default:

- **Model**: `text-davinci-003`
- **Temperature**: 0.7
- **Max Tokens**: 256
- **Top P**: 1
- **Frequency Penalty**: 0
- **Presence Penalty**: 0

## 🧪 Testing

To run the linter:

```bash
npm run lint
```

## 🚀 Deployment

### Building for Production

```bash
npm run build
```

This will create a `dist` directory containing the production build of your application.

### Deploying to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Run the following command and follow the prompts:
   ```bash
   vercel
   ```


## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) for the powerful API
- [React](https://reactjs.org/) for the amazing UI library
- [Vite](https://vitejs.dev/) for the fast development experience

## 📬 Contact

For any questions or feedback, please reach out to the project maintainer.
