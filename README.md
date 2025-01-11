
# ConsoleX (VS Code Extension) - Local Testing Instructions

This guide provides step-by-step instructions to clone and test this VS Code extension locally on your system.


## Overview
This guide provides step-by-step instructions to clone and test this VS Code extension locally on your system.

## Prerequisites
- **Node.js** :  Make sure you have Node.js installed. [Download Node.js](https://nodejs.org/en)

- **Visual Studio Code** : Install VS Code if not already installed. [Download VS Code](https://code.visualstudio.com/)

- **Git** : Ensure Git is installed on your system. [Download Git](https://git-scm.com/)

## Steps to Test the Extension Locally

### Clone the Repository : 

Run the following command in your terminal to clone the extension's repository:

```
git clone https://github.com/Keval9247/ConsoleX.git
```

Navigate into the project folder :

```
cd consolex
```

### Install Dependencies :

Install the required Node.js dependencies using npm :
```
npm install
```

###  Open the Project in VS Code : 

Launch Visual Studio Code and open the project folder :

```
code .
```

### Run the Extension 

- Open the Run and Debug view in VS Code (shortcut: `Ctrl+Shift+D` or `Cmd+Shift+D `on Mac).

- Select Run Extension from the dropdown menu.

- Press `F5` or click the green `play button (▶)` to launch a new VS Code window (Extension Development Host).

### Test the Extension 

- The Extension Development Host window will open, where you can test your extension’s functionality.
- Follow any specific usage instructions for the extension.

### Image - consoleX-VS_Code_Extension
![consoleX](/consoleX-vs-code-extension.png)


## Troubleshooting

**Dependencies Issue** : If `npm install` fails, ensure you have the correct version of Node.js installed.

**Extension Doesn’t Load** : Check the Debug Console in the main VS Code window for errors.
 
**Permission Denied** : Ensure you have appropriate write permissions in the project folder.

## Contributing

**If you find issues or want to improve the extension, feel free to fork the repository, make changes, and submit a pull request.**
## License

This extension is licensed under the 
[MIT License](https://choosealicense.com/licenses/mit/).
