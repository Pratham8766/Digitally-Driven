import React from 'react'
import '../style/Register_section.css';
export default function Register() {
  return (
    <>
    <div class="box">
    <div class="loginContainer">

        <div class="top">
            <h2 className='loginHeading'>Register</h2>
        </div>

        <div class="input-field">
            <input type="email" class="input" placeholder="Email" id=""/>
            <i class='bx bx-user' ></i>
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
            <input type="submit" class="submit" value="Register" id=""/>
        </div>
    </div>
</div>  
    </>
  )
}
