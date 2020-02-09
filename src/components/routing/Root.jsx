import 'date-fns'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, /*Route*/ } from 'react-router-dom'
// import AdminPanel from './AdminPanel'
// import AddUserMainForm from './AddUserMainForm'
import SimpleTabs from './NavBar'
import DateFnsUtils from '@date-io/date-fns';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

const Root = ({ store }) => (
  <MuiThemeProvider>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Provider store={store}>
        <Router>
          <SimpleTabs />
          {/* <Route exact path="/" component={MainPage} /> */}
          {/* <Route path='/add-user' component={AddUserMainForm} />
          <Route path='/admin' component={AdminPanel} /> */}
        </Router>
      </Provider>
    </MuiPickersUtilsProvider>
  </MuiThemeProvider>
)

export default Root