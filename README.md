# Multilingual Voice Chatbot

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/python-3.11%2B-brightgreen.svg)](https://www.python.org/)
[![Build Status](https://img.shields.io/badge/build-passing-success.svg)]

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

---

## Overview
The **Multilingual Voice Chatbot** is a Flask‑based web application that enables users to upload an audio file (or record speech) and receive a context‑aware answer in the same language. It combines:
- **OpenAI Whisper** for language detection and transcription (English/French/German).
- **Wav2Vec2** for high‑quality transcription of non‑English languages.
- **TF‑IDF** similarity matching against a CSV‑based Q&A dataset.
- **gTTS** for text‑to‑speech synthesis of the bot response.

The system is designed for rapid prototyping of multilingual voice assistants and can be extended with custom models or datasets.

---

## Features
- **Multilingual support** (English, French, German, Arabic fallback).
- **Automatic language detection** using Whisper.
- **Hybrid transcription**: Whisper for supported languages, Wav2Vec2 for others.
- **Contextual answer retrieval** via TF‑IDF similarity.
- **Text‑to‑speech** output in the detected language.
- **Web UI** with clean HTML templates and responsive design.
- **Ngrok integration** for easy external access.

---

## Architecture
![Architecture Diagram](file:///C:/Users/mthek/.gemini/antigravity/brain/1a75c9b1-e89b-482d-aec8-ba0451d5727f/architecture_diagram_1763937766584.png)

The diagram illustrates the data flow:
1. User uploads audio via the Flask `/predict` endpoint.
2. The audio is saved and processed by Whisper for language detection.
3. Depending on the language, transcription is performed by Whisper or Wav2Vec2.
4. The transcribed text is matched against the CSV Q&A dataset using TF‑IDF.
5. The best‑matching answer is synthesized with gTTS.
6. The generated audio file is returned to the user.

---

## Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/multilingual-voice-chatbot.git
cd multilingual-voice-chatbot

# Create a virtual environment (recommended)
python -m venv venv
source venv/bin/activate   # on Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Install ngrok (optional, for external exposure)
# Follow instructions at https://ngrok.com/download
```

> **Note**: The `requirements.txt` includes `torch`, `transformers`, `whisper`, `gtts`, `flask`, `flask-ngrok`, `scikit-learn`, `pandas`, `numpy`, `scipy`, and other utilities.

---

## Usage
```bash
# Start the Flask app (ngrok will expose a public URL automatically)
python Main/FINAL_PROJECT.py
```
Open the displayed URL (e.g., `http://127.0.0.1:5000` or the ngrok link) in a browser.

### Interacting with the bot
1. Click **Upload** and select an audio file (WAV/MP3).
2. The system will process the audio, detect the language, retrieve an answer, and play the spoken response.

---

## API Reference
### `POST /predict`
- **Description**: Accepts an audio file and returns the bot’s spoken answer.
- **Request**: `multipart/form-data` with field `audio` (binary audio file).
- **Response**: Audio file (`output.wav`) streamed back to the client.

### `POST /success`
- **Description**: Handles generic file uploads (used by the UI for non‑audio files).
- **Request**: `multipart/form-data` with field `file`.
- **Response**: Renders the main page.

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Ensure code style with `flake8` and run tests (`pytest`).
4. Submit a pull request with a clear description of changes.

### Development Guidelines
- Keep functions small and single‑purpose (SOLID principles).
- Add docstrings to all public functions.
- Update the `README.md` when adding new features.

---

## License
This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
