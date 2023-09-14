import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const router = useNavigate();
  return (
    <div style={{width:"100%",height:"50px",backgroundColor:"lightgrey",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <h1 onClick={()=>router('/')}><em>AWDIZ</em></h1>
        <div style={{display:"flex",width:"20%",justifyContent:"space-between",cursor:"pointer"}}>
            <h3>Add Products</h3>
            <h3>Your Products</h3>
        </div>
        <div style={{display:"flex",width:"25%",justifyContent:"space-between",cursor:"pointer"}}>
            <h4>Cart</h4>
            <h4>Profile</h4>
            <h4 onClick={()=>router('/login')}>Login/Register</h4>
            <h4>Logout</h4>
        </div>

    </div>
  )
}

export default Navbar