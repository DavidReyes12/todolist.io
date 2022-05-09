import React from 'react'
import { SessionContext } from "../config/State";


const AuthVerify = Component => props => (
  <SessionContext.Consumer>
    {({ session }) => 
        <Component {...props} session={session}>
          {props.children}
        </Component>
    }
  </SessionContext.Consumer>
);

export default AuthVerify;