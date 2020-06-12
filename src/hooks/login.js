import React, { useContext } from "react";
import Context from '../utils/context';

const Login = () => {
    const context = useContext(Context)
    return (<div>
        <form>
            <h1>Login Here</h1>
            <button
                style={{ width: "100%" }}
                onClick={() => context.authObj.login()}>Login</button>
        </form>

    </div>);
}
export default Login;