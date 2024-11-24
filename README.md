## React Counter App with Material-UI

## Description.

This project is a counter app built with **React**, **Material-UI** and **FontAwesome**.

It allows the user to perform the following actions:

- **Increment** the counter.
- **Decrement** the counter.
- Reset** the counter to 0.
- Ensures that the counter does not go below 0 or exceed the maximum value of **10**.
- Displays an **alert** when the maximum counter limit is reached.

The interface is designed with a **dark theme**, large buttons, and a centered layout using **Material-UI** for style and structure. 

---

## Technologies used

- [**React**](https://reactjs.org/) - Library for building user interfaces.
- [**Material-UI**](https://mui.com/) - Component framework for React.
- [**FontAwesome**](https://fontawesome.com/) - Library of icons used in the application buttons.
- [**Google Fonts**](https://fonts.google.com/) - Custom typography **Big Shoulders Stencil Display**.

---

## Project configuration

### Prerequisites

Before you start, make sure you have the following programs installed on your system:

- [**Node.js**](https://nodejs.org/) (v16 or higher recommended).
- [**npm**](https://www.npmjs.com/) or [**yarn**](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/begonufer/react-counter.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-counter
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```
   Or if you prefer Yarn:
   ```bash
   yarn install
   ```

4. Run the project in development mode:
   ```bash
   npm start
   ```
   Or with Yarn:
   ```bash
   yarn start
   ```

Open your browser and go to http://localhost:3000 to view the application.

---

## Project structure

```bash
react-counter-app/
├── public/ # # Static files.
│ ├─── index.html # Main HTML file.
│ └── ...
├─── src/ # Source code.
│ ├─── App.js # Main component of the application.
│ ├─── index.js # React entry point.
│ ├─── theme.js # Material-UI theme configuration file.
│ └── ...
├─── package.json # Project configuration and dependencies.
├────────── README.md # Project documentation.
└── ...
```

---

## Improvement points

- **Alert on reaching minimum**: Add a similar alert when the minimum limit is reached.
- **Custom limit setting**: Allow the user to set the maximum and minimum limit of the counter.
- **Interval counter**: Allow the user to configure the intervals at which the counter is added or subtracted.
- **Unit testing**: Implement unit tests to verify the behavior of the counter.
- **Integrating animations**: Use the **Material-UI Transitions** library to animate changes in the counter.
- **Add graphs**: Add a graphical representation of the counter value with respect to the minimum and maximum value.