# Image Scraper
<!-- [![Build Status](https://travis-ci.org/Yog9/SnapShot.svg?branch=master)](https://travis-ci.org/Yog9/SnapShot) -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- [Demo of Snap Shot](https://yog9.github.io/SnapShot/) -->

### Summary

Image scraper is a SAAS tool for scraping images off any webpage. The tool was built using React, React Hooks, and React Router Context API. The image scraping logic was created using a python web service built with [Flask](https://flask.palletsprojects.com/en/2.0.x/) for scraping web page contents and [DOMParser]([https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) to extract images from web page content. Styling of the search bar and error messaging were created with [Semantic UI-React](https://react.semantic-ui.com/).

### Motivation

The purpose of this project was to get familiar with React Hooks and Context API.

### Getting Started

Click the demo link or clone/download the repository on your local machine.

##### Install dependencies

`./scripts/setup.sh`

##### Run Snap Shot from the root directory.

`./scripts/dev.sh`

##### Run Tests.

`yarn tests`

### Built With

- React js
- React Router
- React Hooks
- Context API
- Flask
- Functions Framework

### Features

**1. Responsive Design.**

**2. Scrape lazy loaded Images.**

**3. Scrape Images with relative urls.**

### Contributing

Everyone is welcomed to contribute to this project. You can contribute either by submitting bugs or suggesting improvements by opening an issue on GitHub. Please see the [CONTRIBUTING](CONTRIBUTING.md) guidelines for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
