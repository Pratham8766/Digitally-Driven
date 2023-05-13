import React from 'react'
import '../style/Login_section.css';
export default function Login() {
  return (
    <>
    <div class="box">
    <div class="loginContainer">

        <div class="top">
            <h2 className='loginHeading'>Login</h2>
        </div>

        <div class="input-field">
            <input type="text" class="input" placeholder="Username" id=""/>
            <i class='bx bx-user' ></i>
        </div>

        <div class="input-field">
            <input type="Password" class="input" placeholder="Password" id=""/>
            <i class='bx bx-lock-alt'></i>
        </div>

        <div class="input-field">
            <input type="submit" class="submit" value="Login" id=""/>
        </div>

        <div class="two-col">
            <div class="two">
                <label><a href="#">Forgot password?</a></label>
            </div>
        </div>
    </div>
</div>  
    </>
  )
}
