import React from 'react';
import './style.css';
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {Card} from 'primereact/card';

function Login() {
    return (
        <div className={"container-div"}>
            <div className={"login-div"}>
                <Card>
                    <h3 style={{marginBottom: 30}}>Login</h3>
                    <div className="field col-12 md:col-4" style={{marginBottom: 30}}>
                        <span className="p-float-label">
                            <InputText id="email-input" />
                            <label htmlFor="email-input">Email</label>
                        </span>
                    </div>
                    <div className="field col-12 md:col-4" style={{marginBottom: 20}}>
                        <span className="p-float-label">
                            <Password id="password-input" feedback={false} />
                            <label htmlFor="password-input">Password</label>
                        </span>
                    </div>
                    <Button label="Submit" icon="pi pi-check" iconPos="right" />
                </Card>
            </div>

        </div>
    );
}

export default Login;