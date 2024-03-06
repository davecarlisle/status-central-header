import { Grommet, Box } from 'grommet'
import { hpe } from 'grommet-theme-hpe';
import { Header } from './components';
import React from "react";

function App() {
  return (
    <Grommet className="App" theme={hpe} full>
      <Box elevation="medium">
       <Header />
      </Box>
    </Grommet>
  );
}

export default App;
