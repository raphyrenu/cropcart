"use client";


import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa";

function JoinPage() {
  return (
    <div className='text-white  flex items-center justify-center cursor-context-menu pt-9 lg:py-1' >
      <div className="absolute left-0.5 top-0.5 p-2 bg-slate-900 rounded-lg"><a href="/" className="flex-row flex items-center justify-center"><FaArrowLeft/>{' '} <span className="ml-2 hidden lg:flex">Home</span></a></div>
      <form action="" className='text-start bg-transparent lg:px-9 px-5 border rounded-lg py-2  lg:py-3 text-xl lg:text-sm w-screen lg:w-auto h-5/6 lg:h-auto' style={{ backgroundImage: "url('/images/Colored\ Shapes.svg')" }}>
        <h1 className="text-4xl lg:text-3xl mb-4 text-gray-300">Register to start</h1>
        <label htmlFor="Fname">Enter your First Name</label><br />
        <input type="text" placeholder='Enter your First Name' id='Fname' required className="mt-1 mb-3 w-full px-6 py-3 rounded-md outline-none lg:mt-1 lg:mb-3 lg:w-96 lg:text-md lg:px-3 lg:py-1.5 text-gray-700 placeholder:text-indigo-600 placeholder:italic placeholder:font-bold"/><br />
        <label htmlFor="Lname">Enter your Last Name</label><br />
        <input type="text" placeholder='Enter your Last Name' id='Lname' required className="mt-1 mb-3 w-full px-6 py-3 rounded-md outline-none lg:mt-1 lg:mb-3 lg:w-96 lg:text-md lg:px-3 lg:py-1.5 text-gray-700 placeholder:text-indigo-600 placeholder:italic placeholder:font-bold"/><br />
        <label htmlFor="id" >Enter your Natioanal ID</label><br />
        <input type="number"   minLength={16}  required placeholder='Enter valid National ID' id='id' className="mt-1 mb-3 w-full px-6 py-3 rounded-md outline-none lg:mt-1 lg:mb-3 lg:w-96 lg:text-md lg:px-3 lg:py-1.5 text-gray-700 placeholder:text-indigo-600 placeholder:italic placeholder:font-bold"/><br />
        <label htmlFor="email">Enter your Email</label><br />
        <input type="email" placeholder='Enter your email' required id='email' className="mt-1 mb-3 w-full px-6 py-3 rounded-md outline-none lg:mt-1 lg:mb-3 lg:w-96 lg:text-md lg:px-3 lg:py-1.5 text-gray-700 placeholder:text-indigo-600 placeholder:italic placeholder:font-bold"/><br />
        <label htmlFor="password">Enter your Password</label><br />
        <input type="password" id="password" placeholder='Enter your password' required minLength={8} maxLength={250} className="mt-1 mb-3 w-full px-6 py-3 rounded-md outline-none lg:mt-1 lg:mb-3 lg:w-96 lg:text-md lg:px-3 lg:py-1.5 text-gray-700 placeholder:text-indigo-600 placeholder:italic placeholder:font-bold"/><br />
        <label htmlFor="cpassword">Confirm your Password</label><br />
        <input type="password" id="cpassword" placeholder='Enter your password' required minLength={8} maxLength={250} className="mt-1 mb-3 w-full px-6 py-3 rounded-md outline-none lg:mt-1 lg:mb-3 lg:w-96 lg:text-md lg:px-3 lg:py-1.5 text-gray-700 placeholder:text-indigo-600 placeholder:italic placeholder:font-bold" /><br />
        <p>By registering I agree to <a href="" className="text-blue-400">Policies</a></p>
        <div className="w-full text-center pt-2"><button type="submit" className="bg-green-950 hover:bg-green-800 hover:opacity-30 transition-all duration-1000 px-5 py-2 rounded-md">Register</button></div>
        <p className="font-bold mt-2">Already have account? <a href="/login" className="text-blue-300">Login</a></p>
        
      </form> 
    </div>
  )
}

export default JoinPage
