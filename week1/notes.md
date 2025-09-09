# React Basics

## What is react?

Javascript library for making dynamic applications by using components

### Components

Help us write reusable modular and better organized code. For example for a website you can have one component for navbar, one for general content and one for footer, or have as many components as you want

## Layout

### Node Modules

Third party libraries (Don't mess with this file)

### Public

Public assets: Images, videos, etc exist

### Src

Where we put all our components

### Index

div with ID root is the container for our application, the script below that is the entry to our application

### Package.json

Information about our project

### App

This is a file you create to pass the components to something like an app or website which you can later use somewhere else

## Example

### Component

```js
function Message() {
  return <h1>Hello World</h1>;
}
export default App;
```

This component has a text message which can be edited

### App

```js
import Message from "./Message";
function App() {
  return (
    <div>
      <Message />
    </div>
  );
}
export default App;
```

The app is basically where we are sending the component to, in this case we are calling it app but it can be anything
