# OilSandsDesktopGUI

This is a desktop application that loads the Oil Sands GUI. It is built using [Electron](https://www.electronjs.org/).

## To Use

To run this application, you will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mikejattu/OilSandsDesktopGUI.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd OilSandsDesktopGUI
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Run the application:**
    ```bash
    npm start
    ```

## To Package

To package the application, run the following command:

```bash
npm run make
```

After the script runs, you should see an out folder containing both the distributable and a folder containing the packaged application code. 

The distributable in the out/make folder should be ready to launch! The file to be used will depend on your operating system. For example, on Windows, it will be a `.exe` file.

## Technologies Used

*   [Electron](https://www.electronjs.org/)
*   [Node.js](https://nodejs.org/)
*   [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
*   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
