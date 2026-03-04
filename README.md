# Holy Texts

A modern, open-source Android application built with Jetpack Compose for reading, studying, and reflecting on sacred scriptures from various world religions.

## 🌟 Features

### 📖 Extensive Library
- The Holy Bible: Multiple versions including King James Version (KJV), American Standard Version (ASV), and Authorized King James Version (AKJV)
- The Holy Quran: Uthmani script with English translations (Yusuf Ali) togglable directly in the reader
- Coming Soon: Integration for Bhagavad Gita, Torah, Guru Granth Sahib, and Dhammapada

### 🏠 Dynamic Home Screen
- Bento Grid UI: A clean, modern dashboard inspired by modern design trends
- Continue Reading: Instantly jump back to your last read chapter or suryah
- Quick Access: Direct links to Search, Bookmarks, and the Daily Verse

### ⚙️ Spiritual & Study Tools
- Daily Verse: Automated randomized verse or ayah delivered via notification at 12:00 PM daily (source and focus customizable)
- Qibla Compass: Real-time orientation sensor and GPS-based direction to the Kaaba
- Unified Search: Search through all scriptures and translations simultaneously with high-performance filtering
- Cloud Study: Highlight meaningful passages and save bookmarks to the cloud

### 🛠 Personalized Reader
- Themes: Support for Light, Dark, and an eye-friendly Sepia mode
- Typography: Custom font sizes, line spacing, and font families (Serif, SansSerif, Monospace)
- Dual Text: Quran translations displayed as italicized subtitles under the original Arabic text

## 🚀 Tech Stack
- Language: Kotlin
- UI Framework: Jetpack Compose
- Architecture: MVVM (Model-View-ViewModel)
- Local Persistence: DataStore Preferences
- Background Processing: WorkManager
- Cloud Backend: Firebase (Auth, Firestore, Analytics, Crashlytics)
- Data Parsing: XMLPullParser & Optimized Buffered Readers

## 🛠 Setup & Installation
1. Clone the repository.
2. Add your `google-services.json` to the `/app` directory.
3. Ensure the asset files (`bible_kjv.txt`, `quran-uthmani.xml`, `en.yusufali.xml`, etc.) are in `/app/src/main/assets`.
4. Build and run using Android Studio Ladybug or newer.

## 📈 Analytics & Stability

Integrated with Firebase Analytics for usage insights and Firebase Crashlytics for real-time stability monitoring and bug fixing.

## 📄 License

Copyright © 2025 Rahul.
Licensed under the MIT License.
