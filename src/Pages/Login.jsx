import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';



function Login() {

    const rediret = useNavigate();

    const [formvalue, setFormvalue] = useState({

        email: "",
        password: ""
    });

    const onchange = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var result = true;
        if (formvalue.email == "") {
            toast.error('Email Field is required !');
            result = false;
        }
        if (formvalue.password == "") {
            toast.error('Password Field is required !');
            result = false;
        }
        return result;
    }


    const onsubmit = async (e) =>
     {
        e.preventDefault();
        if (validation())
         {
            const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            if (res.data.length > 0) {
                if (res.data[0].password == formvalue.password) {
                    if (res.data[0].status == "Unblock")
                     {


                        localStorage.setItem('username', res.data[0].name);
                        localStorage.setItem('userid', res.data[0].id);

                        toast.success('Login Successfull !');
                        rediret('/');
                    }
                
                else {
                    toast.error('Account is Blocked !');
                    return false;
                }
            }
                 else {

                toast.error('Password is Incorrect !');
                return false;
                 }
                }
                
        else {
            toast.error('Email id is Incorrect !');
            return false;
        }
     }
 }

return (
    <div>
        <div className="contact-us">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 mt-5">

                        <div className="section-heading">
                            <h1>Login</h1>
                        </div>
                        <form id="contact" action=" " method="post">
                            <div className="row">

                                <div className="col-lg-12">
                                    <fieldset>
                                        <input name="email" type="text" id="email" value={formvalue.email} onChange={onchange} placeholder="Your email" />
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <input name="password" type="password" id="name" value={formvalue.password} onChange={onchange} placeholder="password" />
                                    </fieldset>
                                </div>

                                {/* <div className="col-lg-12 mt-3"> */}

                                {/* <Link to="/profile"><button type="submit" id="form-submit"  className="main-dark-button" onClick={onsubmit}><i className="fa fa-paper-plane" /></button></Link>
                                        </fieldset>
                                        <Link to="/signup">If not register then cLick here for Signup</Link> */}

                                <div className="d-flex ">
                                    <fieldset>
                                        <button onClick={onsubmit}>
                                            Login
                                        </button>
                                        <Link to="/signup">If not register then click here for Signup</Link>
                                    </fieldset>
                                </div>




                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>






)
}

export default Login