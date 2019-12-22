import React from "react";
import "./App.css";

// Functional Component
const App = ({ lakes }) => (
  <ul>
    {lakes.map((lake, i) => (
      <li key={i}>{lake.name}</li>
    ))}
  </ul>
);

// State Component
class App1 extends React.Component {
  render() {
    return (
      <div>
        <h4>Welcome to React Lake App</h4>
      </div>
    );
  }
}

export default App;
