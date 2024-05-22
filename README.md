# Custom Kiosk Browser

## Table of Contents

- [Introduction](#introduction)
- [Project Description](#project-description)
- [Features](#features)
- [Languages and Technologies](#languages-and-technologies)
- [Architecture and Design](#architecture-and-design)
- [Installation and Usage](#installation-and-usage)
- [License](#license)
- [Conclusion](#conclusion)

## Introduction

Welcome to the Custom Kiosk Browser project! This repository contains a specialized browser developed using ElectronJS, designed to operate in kiosk mode. It provides a secure, full-screen browsing experience, primarily intended for use in public or semi-public setups like information kiosks, museum exhibits, or digital signage.

## Project Description

The Custom Kiosk Browser is engineered to deliver a full-screen application that restricts user interaction to prevent unauthorized access to the underlying operating system. This makes it ideal for public installations where a streamlined, focused user experience is necessary.

## Features

- *Full Screen & Kiosk Mode:* Runs in full-screen and locks down the system into kiosk mode.
- *Always On Top:* Maintains the browser window on top of all other windows.
- *URL Loading:* Automatically loads a pre-set URL on startup.
- *Keyboard Interaction Restrictions:* Limits keyboard inputs to prevent users from exiting the application or triggering unwanted actions.

## Languages and Technologies

This project is developed using:
- *ElectronJS*: A framework that allows for the development of native applications with web technologies.
- *Node.js*: For handling backend operations.
- *JavaScript*: For creating interactive elements.

## Architecture and Design

The architecture of the Custom Kiosk Browser is straightforward, focusing on minimalism and security. The main application logic is contained within a single JavaScript file that initializes the browser window and handles the necessary restrictions to ensure the kiosk mode is effective and secure.

## Installation and Usage

*Installation Steps:*
1. Clone the repository
2. Install dependencies
3. Start the application

*Usage:*
- Modify the URL in the main JavaScript file to change the start page.
- Use Ctrl+Q to securely close the application when needed.

## License

This project is released under the MIT License. See the LICENSE file in the repository for more details.


## Conclusion

The Custom Kiosk Browser is a robust solution designed to meet the needs of any organization requiring a secure and reliable public internet access point. By leveraging ElectronJS, this browser combines flexibility with the powerful capabilities of modern web technologies.
