import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.scss"

export default function Navbar() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(()=>{
            window.addEventListener("scroll",isActive);
            return ()=>{
                window.removeEventListener("scroll",isActive)
            }
    },[])
    const currentUser={
        id:"1",
        username: "khawar",
        isConsultant: true
    }
    return (
        <div>
            <div className={active ? "navbar active" : "navbar"}>
                <div className="container">
                    <div className="logo">
                        <Link to="/" className='link'>
                        <span className='text'>Study Abroad</span>
                        </Link>
                    </div>
                    <div className="links">
                        <span>Home</span>
                        <span>Blog</span>
                        <span>Scholarships</span>
                        <span>Signin </span>
                        {!currentUser?.isConsultant && <span>Become Consultant</span>}
                        {!currentUser &&<button>Join</button>}
                        {currentUser && (
                            <div className="user" onClick={()=>{
                                setOpen(!open)
                            }}>
                                <img src="" alt="" />
                                <span>{currentUser ?.username}</span>
                        {open &&        <div className="options">
                                    {
                                        currentUser ?.isConsultant && (
                                            <>
                                                <Link to="/services" className='link'>Services</Link>
                                                <Link to="/myservices" className='link'>My Services</Link>

                                                <Link to="/Add" className='link'>Add new service</Link>
                                            </>         
                                        )
                                    }
                                    <Link to="/orders" className='link'>Orders</Link>
                                    <Link to="/messages" className='link'>Messages</Link>
                                    <Link to="/logout" className='link'>Logout</Link>
                                </div>}
                            </div>
                        )}
                    </div>
                </div>
                {active && (
                    <>
                        <hr />
                        <div className="menu">
                            <Link className='link menuLink' to="/">UK</Link>
                            <Link className='link menuLink' to="/">Canada</Link>
                            <Link className='link menuLink' to="/">Australia</Link>
                            <Link className='link menuLink' to="/">America</Link>
                            <Link className='link menuLink' to="/">Germany</Link>
                            <Link className='link menuLink' to="/">Finland</Link>
                            <Link className='link menuLink' to="/">Sweden</Link>
                            <Link className='link menuLink' to="/">France</Link>
                            <Link className='link menuLink' to="/">Italy</Link>
                            <Link className='link menuLink' to="/">Spain</Link>
                            <Link className='link menuLink' to="/">New Zealand</Link>
                            <Link className='link menuLink' to="/">Dubai</Link>
                            <Link className='link menuLink' to="/">Kuwait</Link>
                            <Link className='link menuLink' to="/">Qatar</Link>
                            <Link className='link menuLink' to="/">Saudia</Link>
                            <Link className='link menuLink' to="/">Oman</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
