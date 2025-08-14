# <img src="./assets/images/brand.png" alt="App Icon" width="40" height="40"> BrandPeek


BrandPeek is a modern brand discovery app built using **React Native** with **Expo**. It allows users to browse through a list of brands and view detailed information about each brand.

## 📱 Features

* **Home Screen**: Displays a list of brands fetched from an API.
* **Brand Detail Screen**: Shows detailed info about a selected brand.
* **Modern UI**: Clean design with gradients inspired by Nurdd aesthetics.
* **Navigation**: Dynamic routing with `/brands/[id].jsx`.
* **Responsive**: Works seamlessly on both Android and iOS.

## 📁 Project Structure

```
/
├── app
│ ├── index.jsx # Home screen
│ ├── /brands
│ │ └── [id].jsx # Brand detail screen
├── components # Reusable UI components
├── constants # App constants (colors, API URLs, etc.)
├── services # API service functions
├── assets # Images, icons, app icon, etc.
```

---

## 📡 Backend - MockAPI

This project uses [MockAPI](https://mockapi.io/) for backend data.

### **Schema: Brand**
| Field            | Type      | Example Value                                                     |
|------------------|-----------|-------------------------------------------------------------------|
| `id`             | String    | `"1"`                                                             |
| `name`           | String    | `"Oriental Rubber Chair"`                                         |
| `logo`           | URL       | `"https://picsum.photos/seed/nWg3LPG/1419/1132"`                  |
| `description`    | String    | `"Iure cognomen celo argumentum arx cogito recusandae."`          |
| `fullDescription`| String    | `"Vix acsi maxime enim combibo aegre. Adsuesco animus..."`        |
| `website`        | URL       | `"https://unkempt-pick.info/"`                                    |

---

### **API Endpoints**
- **Get All Brands** → `https://<your-mockapi-url>/brands`
- **Get Brand by ID** → `https://<your-mockapi-url>/brands/:id`

---

## 🚀 Installation & Running

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/brandpeek.git
   cd brandpeek
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the app:

   ```bash
   npx expo start
   ```
4. Open in **Expo Go** app (scan QR code from terminal or browser).
## 📤 Live Demo

* **Expo Go Link**: [Expo Project Link](https://expo.dev/accounts/vivek45/projects/brandPeek/builds/6a011577-f79b-4de0-b5ee-48e468d4bdee)
* **QR Code**: Scan in Expo Go  
  ![QR Code](./assets/images/qr.png)
## 🛠 Tech Stack

* **React Native**
* **Expo**
* **Expo Router**
* **JavaScript (ES6)**
* **REST API**

## 📌 Notes

* Backend used: Public REST API for brand data
* Folder structure is modular for scalability

---

**Author:** Vivek Rakesh Patil
