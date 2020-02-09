import React, {Component} from "react";
import {Tabs, Tab} from 'material-ui';
import { withRouter } from "react-router-dom";
import AddUserMainForm from './AddUserMainForm'
import AdminPanel from './AdminPanel/AdminPanel'


class NavTabs extends Component {

 handleCallToRouter = (value) => {
   this.props.history.push(value);
 }

  render () {
     return (
      <Tabs
        value={this.props.history.location.pathname}
        onChange={this.handleCallToRouter}
        >
        <Tab
          label="Add User"
          value="/add-user"
        >
        <div>
           <AddUserMainForm />
        </div>
        </Tab>
        <Tab
          label="Administration"
          value="/admin"
            >
          <div>
            <AdminPanel />
          </div>
        </Tab>
      </Tabs>           
    )
  }
}

export default withRouter(NavTabs)  