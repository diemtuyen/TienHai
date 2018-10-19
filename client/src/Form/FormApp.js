import React, {Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

import { Values } from 'redux-form-website-template';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import showResults from './showResults';
import MaterialUiForm from '../Form/MaterialUiForm';
import ReactWidgetsForm from '../Form/ReactWidgetsForm';

class FormApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div style={{ padding: 15 }}>
            <h2>Material UI Example</h2>
            <MaterialUiForm onSubmit={showResults} />
            <Values form="MaterialUiForm" />
          </div>
        </MuiThemeProvider>
        <div style={{ padding: 15 }}>
          <h1>React Widgets Form Example</h1>
          <ReactWidgetsForm onSubmit={showResults} />
          <Values form="reactWidgets" />
        </div>
      </Provider>
    )
  }
}

export default FormApp
