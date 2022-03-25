import React from 'react'
import { Link } from 'react-router-dom'
import { getData } from '../actions/action';

export default function Nav() {
    return (
        <div className='nav'>
            <Link to="/">Home</Link> |{" "}
            <Link onClick={getData()} to="/Candidate" >Candidata</Link> |{" "}
            <Link to="/AboutUs" >About Us</Link>
        </div>
    )
}
