import React from 'react';
import { Container, Sticky } from './components/react-mobile-sticky'

import "./app.css"

function App() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className="App">
      <header className="header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <Container>
        <Sticky><div className="title">标题</div></Sticky>
        {
          list.map((item, index) => (<div className="list-item" key={index}>{item}</div>))
        }
      </Container>
    </div>
  );
}

export default App;
