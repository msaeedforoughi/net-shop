# React + TypeScript + Vite + Tailwind

## Project Name
net-shop

## Project Description
net-shop is a shopping website built with React, TypeScript, Tailwind, and Vite. This project provides a seamless online shopping experience for users, allowing them to browse and purchase products with ease.

## Target Audience
This project is intended for users who want to shop online and developers who want to contribute to or learn from the project.

## Key Features
User-friendly interface: The website provides an intuitive and responsive user interface, making it easy for users to navigate and find products.
Product catalog: The website features a comprehensive product catalog, allowing users to browse and purchase products.
Local database: The project uses a local database, powered by json-server, to store and retrieve product data.

# Getting Started

## Running the Project
To run the project, navigate to the project directory and execute the following command:
`npm run dev`
This will start the development server, and you can access the website with Ctrl key and click on localhost link that provided in terminal

## Accessing the Local Database
To access the local database, run the following command in a separate terminal window:
`npx json-server data/db.json -p 8001`
This will start the json-server instance, and you can access the database at `http://localhost:8001`

## Technical Details
Frontend: The project uses React and TypeScript for the frontend, along with Tailwind for styling.
Build Tool: The project uses Vite as the build tool.
Database: The project uses a local database powered by json-server.

## Development Notes
This project uses a minimal setup to get React working in Vite with HMR and some ESLint rules. For more information on the technical configuration, please see the following notes:
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration
If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request. We appreciate any contributions, whether it's fixing bugs, adding new features, or improving the documentation.

Let me know if this meets your expectations or if you'd like me to make any changes!