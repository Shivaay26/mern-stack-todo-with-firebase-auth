import React from 'react'

const Login = ({handleclick}) => {
    return (
        <div className="login-background">
            <div className="login-card">
                <h1>LOGIN</h1>
                <button className="login-with-google" onClick={handleclick}>
                    <h2> LOGIN WITH GOOGLE</h2>    
                </button>
            </div>
        </div>
    )
}

export default Login
