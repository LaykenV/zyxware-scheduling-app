/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from "react";
import LoginForm from "../components/loginForm";
import RegisterForm  from "../components/registerForm";


const LoginPage = () => {
    const [newUser, setNewUser] = useState(false);

    const activeTabStyle = {
        width: '50%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        border: '1px green solid', 
        backgroundColor: 'lightgreen' // Active tab background
    };
    
    const inactiveTabStyle = {
        width: '50%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        border: '1px green solid', 
        backgroundColor: 'transparent' // Inactive tab background
    };

    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100vw'}}>
            <div style={{width:'600px', height: '350px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', border:'2px green solid'}}>
                <div style={{height:'10%', display:'flex', width:'100%'}}>
                    <div onClick={() => {setNewUser(false)}} style={newUser ? inactiveTabStyle : activeTabStyle}>Log In</div>
                    <div onClick={() => {setNewUser(true)}} style={newUser ? activeTabStyle : inactiveTabStyle}>Create Account</div>
                </div>
                <div style={{height:'90%'}}>
                    {newUser ? <RegisterForm/> : <LoginForm/>}
                </div>
            </div>
        </div>
    )
}

export default LoginPage;