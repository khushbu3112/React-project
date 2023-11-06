import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';


function Profile() {
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('userid')}`)
        // console.log(res.data);
        setData(res.data)
    }
    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    });

    const [editid, setid] = useState("");
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        // console.log(res.data);
        setFormvalue(res.data)
        setid(id);
    }

    const onchange = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {

        var result = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required !');
            result = false;
        }
        if (formvalue.email == "") {
            toast.error('Email Field is required !');
            result = false;
        }
        if (formvalue.password == "") {
            toast.error('Password Field is required !');
            result = false;
        }
        if (formvalue.mobile == "") {
            toast.error('Mobile Field is required !');
            result = false;
        }
        return result;
    }

    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/user/${editid}`, formvalue);
            if (res.status==200) {
                toast.success('Update Success !');
                setFormvalue({ ...formvalue, id: "", name: "", email: "", password: "", mobile: "", status: "" });
                fetch();
            }
        }
    }








    return (
        <div>
            <div className="main-banner" id="top">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-12">

                            <div className="left-content">
                                <div className="thumb">

                                    <div className="inner-content">
                                        {/* <h1>Manage Profile</h1> */}
                                        <h4>Manage Profile</h4>
                                        <span> ID: {data.id} </span>
                                        <span> Name: {data.name} </span> 
                                        <span> Email: {data.email} </span>
                                        <span> password: {data.password} </span>
                                        <span> Mobile: {data.mobile} </span>
                                        <span> status: {data.status} </span>

                                        <div className="main-border-button">
                                            <a href="javascript:void(0)" data-toggle="modal" data-target="#myModal" onClick={() => editdata(data.id)}>Edit Profile</a>
                                        </div>
                                    </div>
                                    <img src="assets/images/left-banner-image.jpg" height={700} alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                        <div className="modal-header">
                        <h4 className="modal-title">Edit profile</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            
                        </div>
                        <div className="modal-body">
                            {/* ***** Contact Area Starts ***** */}
            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-6">
                           
                            <form id="contact" action=" " method="post">
                                <div className="row">
                                    <div className="col-lg-12 mt-3">
                                        <fieldset>
                                            <input name="name" type="text" id="name" value={formvalue.name} onChange={onchange} placeholder="Name" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <fieldset>
                                            <input name="email" type="text" id="email" value={formvalue.email} onChange={onchange}  placeholder="Your email" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <fieldset>
                                        <input type="text" value={formvalue.sub} onChange={onchange} name="sub" placeholder="Subject" />
                                        </fieldset>
                                    </div>
                                      <div className="col-lg-12 mt-3">
                                        <fieldset>
                                        <input type="text" value={formvalue.msg} onChange={onchange} name="msg" placeholder="Your message" />
                                        </fieldset>
                                    </div>
                                   
                                    <div className="col-lg-12 mt-3">
                                        <fieldset>
                                            {/* <button type="submit" id="form-submit"  className="main-dark-button" onClick={onsubmit}><i className="fa fa-paper-plane" /></button> */}
                                            <button onClick={onsubmit} data-bs-dismiss="modal">Save</button>
                                        </fieldset></div>

                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Contact Area Ends ***** */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>











        </div>

    )
}

export default Profile