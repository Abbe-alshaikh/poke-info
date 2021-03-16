
import loginImg from "../../login.svg"
import auth from "../../services/fireBase";
import { AuthContext } from "../../services/auth";
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
//import { useHistory } from "react-router-dom";
// eslint-disable-next-line no-empty-pattern
export const Login = ({ }) => {
    
    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { username, password } = event.target.elements;
        try {
          await auth()
            .signInWithEmailAndPassword(username.value, password.value);
            
        } catch (error) {
          alert(error);
        }
      },
      []
    );
  
    const { currentUser } = useContext(AuthContext);
  
    if (currentUser) {
      return <Redirect to="/HomePage" />;
    } 


        return (
            <div className="base-container" >
                <div className="header">Login</div>
                <form onSubmit={handleLogin}>
                <div className="content">
                   <div className="image">
                     <img src={loginImg} alt=""/>
                  </div>
                  <div className="form">
                       <div className="form-group">
                          <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
            
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                           <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type= "submit" className="btn">
                        Login
                    </button>
                </div>
                </form>
            </div>

        );
    }
    export default withRouter(Login);