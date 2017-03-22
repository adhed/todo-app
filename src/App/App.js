import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TaskBox from './Components/TaskBox';
import Container from './Components/Container';
import { green100, green500, green700 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar 
            title="React ToDo app"
            showMenuIconButton={false}
          />
          <Container 
            element={<TaskBox />}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
