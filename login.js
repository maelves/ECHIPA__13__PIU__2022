import React from 'react'
import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'

import './login.css'

const Login = (props) => {
    return (
        <div className="login-container">
            <Helmet>
                <title>Block Manager</title>
            </Helmet>
            <img
                alt="image"
                src="/playground_assets/logo-200h.png"
                className="login-image"
            />
            <div className="login-login">
                <div id="helpbutton" className="login-container01">
                    <img
                        alt="Rectangle21021"
                        src="/playground_assets/rectangle21021-gf7fb.svg"
                        className="login-rectangle2"
                    />
                    <span className="login-text">
            <span>Ajutor</span>
          </span>
                </div>
                <div className="login-container02">
                    <div className="login-container03">
                        <Link to="/home" className="login-navlink">
                            <img
                                alt="Rectangle11021"
                                src="/playground_assets/rectangle11021-l2fv-200h.png"
                                className="login-rectangle1"
                            />
                        </Link>
                    </div>
                    <span className="login-text2">
            <span>Login</span>
          </span>
                </div>
                <div className="login-l-o-g-i-n-p-a-g-e">
          <span className="login-text4">
            <span>
              LOGIN PAGE
              <span
                  dangerouslySetInnerHTML={{
                      __html: ' ',
                  }}
              />
            </span>
          </span>
                </div>
                <div className="login-container04">
                    <div className="login-container05">
                        <label className="login-text6">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="Username"
                            required
                            placeholder="enter username"
                            className="login-textinput input"
                        />
                    </div>
                    <div className="login-container06">
                        <div className="login-container07">
                            <div className="login-container08">
                                <div className="login-container09">
                                    <label className="login-text7">Password</label>
                                </div>
                            </div>
                        </div>
                        <input
                            type="text"
                            id="password"
                            name="Password"
                            required
                            placeholder="enter password"
                            className="login-textinput1 input"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
