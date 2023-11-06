import React,{ useState,useEffect } from 'react'
import { toast} from 'react-toastify';

import axios from 'axios'

function Manage_contact() {

    useEffect(()=> {
        fetch();
    }, []);

    const [data, setData]=useState([]);
    const fetch =async ()=>{
        const res=await axios.get(`http://localhost:3000/contact`);
        // console.log(res.data);
        setData(res.data)
    }

    const onDelete=async(id)=> {
        const res=await axios.delete(`http://localhost:3000/contact/${id}`);
        // console.log(res);
        if(res.status=="200")
        {
            fetch();
            toast.success('Delete Successful !');
        }
    }


    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">MANAGE CONTACT</h1>
                            <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12">
                            {/*   Kitchen Sink */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                     <th>Id</th>
                                                    <th> Name</th>
                                                    <th>Email</th>
                                                    <th>msg</th>
                                                    <th>contact id</th>
                                                    <th>subject</th>
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
                                                            <td>{value.msg}</td>
                                                            <td>{value.contactid}</td>
                                                            <td>{value.sub}</td>
                                                            <td>
                                                                 <button className='btn btn-danger' onClick={()=>onDelete(value.id)}>Delete</button>
                                                                <button className='btn btn-primary'>Insert</button>
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
                </div></div></div>

    )
}
export default Manage_contact


 
