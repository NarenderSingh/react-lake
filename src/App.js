import React from 'react';
import './App.css';

const App = ({ lakes }) => (
  <ul>
      {lakes.map((lake, i) => 
          <li key={i}>{lake.name}</li>
      )}
  </ul>
)

export default App;

