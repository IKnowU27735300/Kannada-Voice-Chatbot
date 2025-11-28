# Kannada Voice Chatbot 🗣️

A real-time, voice-to-voice conversational AI application that speaks exclusively in **Kannada**. Powered by **Google's Gemini Multimodal Live API**, this project demonstrates low-latency, emotionally intelligent voice interactions in a modern web interface.

## 🌟 Features

- **Kannada-Exclusive Persona**: The AI is prompted to act as a warm, engaging friend who speaks only in Kannada, understanding cultural nuances and common loan words.
- **Real-Time Voice Interaction**: Seamless, full-duplex voice conversations using Gemini's Live API (WebSocket-based).
- **Emotional Intelligence**: The AI detects user mood from voice/text and adapts its tone (empathetic, excited, etc.).
- **Dynamic Visualizer**: Real-time audio visualization for both user input and AI response.
- **Modern UI**: Built with **React 19** and **Tailwind CSS**, featuring glassmorphism, gradients, and smooth animations.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Model**: Google Gemini 2.0 Flash (Native Audio Preview)
- **SDK**: `@google/genai`
- **Audio Processing**: Web Audio API

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A Google Cloud Project with the **Gemini API** enabled.
- An API Key for Gemini.

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd kannada-voice-chatbot
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your Gemini API key:
    ```env
    GEMINI_API_KEY=your_actual_api_key_here
    ```

4.  **Run the Development Server**
    ```bash
    npm run dev
    ```

5.  **Open in Browser**
    Navigate to `http://localhost:3000` to start the application.

## 🎮 Usage

1.  Ensure your microphone permissions are granted.
2.  Click the **Connect** button to initialize the session.
3.  Start speaking in **Kannada**! The AI will listen and respond in real-time.
4.  Watch the visualizer react to your voice and the AI's voice.
5.  Click **Disconnect** to end the session.

## 📂 Project Structure

- `src/App.tsx`: Main application layout and UI.
- `src/hooks/useGeminiLive.ts`: Core logic for Gemini Live API connection and audio streaming.
- `src/components/Visualizer.tsx`: Canvas-based audio visualizer.
- `src/components/Controls.tsx`: UI controls for connection management.
- `src/utils/audio-utils.ts`: Helpers for PCM audio conversion and processing.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[MIT](LICENSE)
