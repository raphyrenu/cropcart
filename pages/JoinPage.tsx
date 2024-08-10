"use client";


import { useState } from "react"

function JoinPage() {
  return (
    <div className='text-white text-xl flex items-center justify-center h-screen'>
      <form action="" className='text-center p-6'>
        <h1 className="text-3xl">Register to CropCart to start <br /> buying or selling</h1>
        <label htmlFor="Fname">Enter your First Name</label><br />
        <input type="text" placeholder='Enter your First Name' id='Fname' required className="w-80"/><br />
        <label htmlFor="Lname">Enter your Last Name</label><br />
        <input type="text" placeholder='Enter your Last Name' id='Lname' required /><br />
        <label htmlFor="id" >Enter your Natioanal ID</label><br />
        <input type="number"   minLength={16}  required placeholder='Enter valid National ID' id='id'/><br />
        <label htmlFor="email">Enter your Email</label><br />
        <input type="email" placeholder='Enter your email' required id='email' /><br />
        <label htmlFor="password">Enter your Password</label><br />
        <input type="password" id="password" placeholder='Enter your password' required minLength={8} maxLength={250} /><br />
        <label htmlFor="password">Confirm your Password</label><br />
        <input type="password" id="password" placeholder='Enter your password' required minLength={8} maxLength={250} /><br />
        <button type="submit">Register</button>
      </form> 
    </div>
  )
}

export default JoinPage
