import React from "react";
import List from "./List";
import Form from "./Form";
import ImageColor from "./ImageColor";
import ImageColorValidate from "./ImageColorValidate";
import ColorIndex from "./ColorIndex";
import LinearChart from "./LinearChart";
import Button from '@material-ui/core/Button';
import './App.css';

const App = () => (
  <>
  
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />

      <div className="App-row">

      <LinearChart/>
      <ImageColor/>
      <ColorIndex/>
      </div>

      <div className="App-row">
      <ImageColorValidate/>
      <Button variant="outlined">Send</Button>
      </div>
      
    </div>

  </>
);

export default App;