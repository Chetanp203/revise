import React from 'react'

const Login = () => {
  return (
    <div style={{width:"30%",border:'1px solid lightgrey',margin:"auto",textAlign:"center",paddingBottom:"30px"}}>
    <h1>Login</h1>
    <form>
        
        <label>Email ID</label><br />
        <input type="email" /><br />
        
        <label>Password</label><br />
        <input type="password" /><br />
        <br />
        <input type="submit" value="Login" />
    
    </form>


</div>
  )
}

export default Login