import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    let [Name, setName] = useState('');
    let [Email, setEmail] = useState('');
    let [show, setShow] = useState(false);
    let [msg, setMsg] = useState("");

    let nav = useNavigate()
    let url = ("https://67b0235fdffcd88a67886e99.mockapi.io/Careembooking")

    async function Logic_func() {
        let api_data = axios.get(url)
        let data_Form_mockapi = (await api_data).data
        let record_find = data_Form_mockapi.find((a) => (a.name === Name && a.email === Email))


        if (record_find) {
            let uname = record_find.Name;
            nav("Data", { state: { n: Name } })
        } else {
            setMsg("Invalid Email or Password")
            setShow(true)
        }
    }




    useEffect(() => {
        if (show === true) {
            let timer = setTimeout(() => {
                setShow(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [show]);


    return (
        <div className='container'>
            <h1 className='fw-bold py-3'>Login</h1>
            {show && <h1 style={{ color: "red" }}>{msg}</h1>}
            <label>Enter Your Full Name</label>
            <input type="text"
                className="form-control my-3"
                placeholder="Enter Your Full Name"
                value={Name} onChange={(e) => setName(e.target.value)} required />

            <label>Enter Your Email Address</label>
            <input type="text"
                className="form-control my-3"
                placeholder="Enter Your Email Address"
                value={Email} onChange={(e) => setEmail(e.target.value)} />

            <button className='btn btn-success' onClick={Logic_func}>Login</button>
            <br />
            <br />

            <Link to="/Register">Don't have an account? <span className='text-primary fw-bold'>Sign Up</span></Link>
        </div>
    )
}
