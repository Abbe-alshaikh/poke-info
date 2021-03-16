
import loginImg from "../../login.svg"
import auth from "../../services/fireBase";
import { AuthContext } from "../../services/auth";
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";

// eslint-disable-next-line no-empty-pattern
export const Register = ({ }) => {
    const handleSignUp = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await auth()
            .createUserWithEmailAndPassword( email.value,password.value);
          
        } catch (error) {
          alert(error);
        }
      },
      []
    );
  
    const { currentUser } = useContext(AuthContext);
  
    if (currentUser) {
      return <Redirect to="/HomePage"/>;
    } 


        return (
            <div className="base-container" >
                <div className="header">Register</div>
                <form onSubmit={handleSignUp}>
                <div className="content">
                   <div className="image">
                     <img src={loginImg} alt=""/>
                  </div>
                  <div className="form">
                        <div className="form-group">
                          <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" placeholder="email"/>
                        </div>
            
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                           <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type= "submit" className="btn">
                     Register
                    </button>
                </div>
                </form>
            </div>

        );
    }
    export default withRouter(Register);