import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TaskBox from './Components/TaskBox';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { green100, green500, green700 } from 'material-ui/styles/colors';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green700,
    primary2Color: green500,
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
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <Row center="xs">
                  <Col xs={12} md={8} lg={8}>
                    <TaskBox />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
