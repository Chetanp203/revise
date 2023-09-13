import React from 'react'

const Register = () => {
  return (
    <div style={{width:"30%",border:'1px solid lightgrey',margin:"auto",textAlign:"center",paddingBottom:"30px"}}>
        <h1>Register</h1>
        <form>
            <label>Name</label><br />
            <input type="text" /><br />
            <label>Email ID</label><br />
            <input type="email" /><br />
            <label>Select Role</label><br />
            <select>
                <option>Buyer</option>
                <option>Seller</option>
            </select>
            <br />
            <label>Password</label><br />
            <input type="password" /><br />
            <label>Confirm Password</label><br />
            <input type="password" /><br />
            <br />
            <input type="submit" value="Register" />
        
        </form>


    </div>
  )
}

export default Register