import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';



function Signup() {

    const [formvalue,setFormvalue]=useState({
        name:"",
        email:"",
        password:"",
        mobile:"",
        status:"Unblock"
    });

    const onchange=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    function validation(){

        var result=true;
        if(formvalue.name=="")
        {
            toast.error('Name Field is required !');
            result=false;
        }
        if(formvalue.email=="")
        {
            toast.error('Email Field is required !');
            result=false;
        }
        if(formvalue.password=="")
        {
            toast.error('Password Field is required !');
            result=false;
        }
        if(formvalue.mobile=="")
        {
            toast.error('Mobile Field is required !');
            result=false;
        }
        return result;
    }

    const onsubmit=async(e)=>{
        e.preventDefault();
        if(validation())
        {
        const res=await axios.post(`http://localhost:3000/user`,formvalue);
        if(res.status==201)
        {
            toast.success('Registration Success !');
            setFormvalue({...formvalue,name:"",email:"",password:"",mobile:""});
        }}
    }
    return (
        <div>
            <div className="contact-us">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 mt-5">

                        <div className="section-heading">
                                <h1>Sign Up</h1>
                            </div>
                            <form id="contact" action=" " method="post">
                                <div className="row">
                                <div className="col-lg-12">
                                        <fieldset>
                                            <input name="name" type="text" id="name" value={formvalue.name} onChange={onchange}  placeholder="Your name" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <input name="email" type="text" id="email" value={formvalue.email} onChange={onchange}  placeholder="Your email" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <input name="password" type="password" id="name" value={formvalue.password} onChange={onchange} placeholder="password" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <input name="mobile" type="number" id="email" value={formvalue.mobile} onChange={onchange}  placeholder="Your mobile" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <fieldset>
                                            <button type="submit" id="form-submit"  className="main-dark-button" onClick={onsubmit}><i className="fa fa-paper-plane" /></button>
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

export default Signup