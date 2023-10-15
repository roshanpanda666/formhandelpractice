import React, { useRef, useState } from 'react'

const index = () => {
  const emailinput=useRef()
  const pwd=useRef()
  const [greet,greetchange]=useState(false)


  

  function submithandler(event){
    event.preventDefault()

  const enteredemail=emailinput.current.value
  const enteredpwd=pwd.current.value

  if(enteredpwd==='panda'){
    alert('you are logged in')
    greetchange(!greet)
    greetchange(enteredemail)
  }
  if(enteredpwd!='panda'){
    greetchange("password is wrong")
  }
  if(enteredemail===""){
    alert("fill the email")

  }
  

  
  }

  return (
    <div className='flex justify-center items-center h-96 flex-col'>
      <h1>hello</h1>
      <form onSubmit={submithandler} className='flex flex-col'>
        <label htmlFor="email">email </label>
        <input type="text" ref={emailinput} id='email' className='text-black' />

        <label htmlFor="pwd">pwd </label>
        <input type="text" ref={pwd} id='pwd' className='text-black' />
        <button>submit</button>
      </form>

      <div className={`${greet?'text-3xl text-blue-400 block' : "text-1xl text-red-500 hidden"}`}>hello {greet}</div>
    </div>
  )
}

export default index
