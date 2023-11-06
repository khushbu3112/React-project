import React,{ useState,useEffect } from 'react'
import { toast} from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { redirect } from 'react-router-dom';

function Manage_user() {

    const redirect=useNavigate();

    useEffect(()=> {
        fetch();
    }, []);

    const [data, setData]=useState([]);
    const fetch =async ()=>{
        const res=await axios.get(`http://localhost:3000/user`);
        // console.log(res.data);
        setData(res.data)
    }

const onDelete=async(id)=> {
    const res=await axios.delete(`http://localhost:3000/user/${id}`);
    // console.log(res);
    if(res.status=="200")
    {
        fetch();
        toast.success('Delete Successful !');
    }
}

const statuschange=async(id)=> {
    const res=await axios.get(`http://localhost:3000/user/${id}`);
    // console.log(res);
    if(res.data.status=="Block")
    {
        const res1=await axios.patch(`http://localhost:3000/user/${id}`,{status:"Unblock"});
        if(res1.status==200)
        {
        fetch();
        toast.success('status Unblock  Successful !');
        }
    }

    else

    {
        const res1=await axios.patch(`http://localhost:3000/user/${id}`,{status:"Block"});
        if(res1.status==200)
        {
         fetch();
         toast.success('status Block  Successfull !');
         }
    }
}

    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Data Table</h1>
                            <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12">
                            {/*   Kitchen Sink */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Kitchen Sink
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                     <th>Id</th>
                                                    <th> Name</th>
                                                    <th>Email</th>
                                                    <th>Password</th>
                                                    <th>Mobile</th>
                                                    <th>status</th>
                                                    <th></th>
                                                    <th>Created_at</th>
                                                    <th>Updated_at</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                data.map((value,index,entarr)=>{
                                                    return(
                                                        <tr>
                                                            <td>{value.id}</td>
                                                            <td>{value.name}</td>
                                                            <td>{value.email}</td>
                                                            <td>{value.password}</td>
                                                            <td>{value.mobile}</td>
                                                            <td>{value.status}</td>
                                                            <td>
                                                                <button className='btn btn-danger' onClick={()=>onDelete(value.id)}>Delete</button>
                                                                <button className='btn btn-primary' onClick={()=>{redirect('/edit_user/' +value.id)}}>Edit</button>
                                                                <button className='btn btn-success' onClick={()=>statuschange(value.id)}> {value.status} </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                
                                                })
                                                
                                               }
                                               
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* End  Kitchen Sink */}
                        </div>
                    </div>
                </div>
                </div>
                </div>

    )
}

export default Manage_user