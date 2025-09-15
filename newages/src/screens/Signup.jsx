import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Welcome to The Utkarsh Kitchen!</h1>
      <div>
        <form action="/user" method='post'>
        <input type="text" name='urname' placeholder='Name' />
        <input type="text" name='location' placeholder='Address' />
        <input type="email" name='email' placeholder='Email' />
        <input type="password" name='password' placeholder='Password' />
        <input type="submit"  />
        </form>
      </div>
    </div>
  )
}

export default Signup
