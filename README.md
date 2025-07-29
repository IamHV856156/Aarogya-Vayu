# Aarogya Vayu: Real-time Air Quality Index (AQI) Forecasting Web App

**Aarogya Vayu** (meaning "Health Air" in Sanskrit) is a modern web application designed to provide real-time Air Quality Index (AQI) data and forecasts based on your current location or a searched city. Stay informed about the air you breathe with an intuitive interface, interactive maps, and essential air pollutant information.

---

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [API Key Setup](#api-key-setup)
    * [Running the Application](#running-the-application)
* [Project Structure](#project-structure)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgements](#acknowledgements)

---

## Features

* **Real-time AQI Display:** Get current AQI values and classifications for your location.
* **Location Detection:** Automatically detects your current location (requires browser permission).
* **City Search:** Manually search for AQI data in any city worldwide.
* **Interactive Map View:** Visualize your location or searched city on an interactive map using Leaflet.
* **Detailed Pollutant Data:** View concentrations of key pollutants like PM2.5, PM10, NO2, SO2, O3, and CO.
* **Dynamic Theme:** Seamlessly switch between Light and Dark modes.
* **Responsive Design:** Optimized for a smooth experience across various devices (mobile, tablet, desktop).
* **Engaging UI/UX:**
    * Smoothly expanding search bar in the header.
    * Subtle and interactive animations on logos and other elements using Framer Motion.
* **User Feedback Form:** A dedicated section to connect with us.

---

## Technologies Used

* **React.js:** A JavaScript library for building user interfaces.
* **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
* **Framer Motion:** A production-ready animation library for React.
* **Leaflet.js:** An open-source JavaScript library for mobile-friendly interactive maps.
* **OpenCage Geocoding API:** For robust forward and reverse geocoding (converting coordinates to human-readable addresses and vice-versa).
* **Custom React Hooks:** For managing live geolocation.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js:** (LTS version recommended)
    * [Download Node.js](https://nodejs.org/en/download/)
* **npm** (Node Package Manager) or **Yarn** (comes with Node.js installation)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/IamHV856156/Aarogya-Vayu.git](https://github.com/IamHV856156/Aarogya-Vayu.git)
    cd Aarogya-Vayu
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### API Key Setup

This application uses the [OpenCage Geocoding API](https://opencagedata.com/api) for location services. You need to obtain an API key and set it up:

1.  **Sign up for a free API key** at [OpenCage Data](https://opencagedata.com/users/sign_up).
2.  **Create a `.env` file** in the root directory of your project (same level as `package.json`).
3.  **Add your API key** to the `.env` file in the following format:
    ```
    REACT_APP_OPENCAGE_API_KEY=YOUR_OPEN_CAGE_API_KEY_HERE
    ```
    (Replace `YOUR_OPEN_CAGE_API_KEY_HERE` with your actual key).

    * **Important:** Environment variables starting with `REACT_APP_` are automatically exposed to your React app by Create React App. **Never commit your `.env` file to version control (Git)!** It should be ignored by `.gitignore`.

### Running the Application

After setting up the API key and installing dependencies:

```bash
npm start
# or
yarn start
```
This will start the Development server and your application should open in your browser at 
```https://localhost:3000```
### Contributing
Contributions are welcome! If you have suggestions for improvements or find any bugs, please feel free to:

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/AmazingFeature).
3. Commit your changes (git commit -m 'Add some AmazingFeature').
4. Push to the branch (git push origin feature/AmazingFeature).
5. Open a Pull Request.

### License
This project is licensed under the MIT License - see the LICENSE file

### Acknowledgements
* Air quality data insights and principles inspired by:
* ISRO VEDAS
* SENTINEL-5P
* Central Pollution Control Board (CPCB)
* Open-source community for the amazing tools and libraries used in this project.
