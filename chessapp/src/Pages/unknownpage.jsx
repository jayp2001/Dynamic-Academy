import React from "react"
import {
    Route,
    Switch,
    Redirect
  } from "react-router-dom"

  const unknownpage = (props) => {
    <div>
      <h3>DCA</h3>
      {/* <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/set-password" component={ResetPassword} />
        <Route path="/invalid-token" component={InvalidToken} />
        <Redirect to="/login" />          
      </Switch> */}
    </div>
  }
  export default unknownpage;