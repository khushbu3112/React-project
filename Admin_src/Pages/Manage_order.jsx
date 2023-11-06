
import React,{ useState,useEffect } from 'react'
import { toast} from 'react-toastify';

import axios from 'axios'

function Manage_order() {
    
    useEffect(()=> {
        fetch();
    }, []);

    const [data, setData]=useState([]);
    const fetch =async ()=>{
        const res=await axios.get(`http://localhost:3000/categories`);
        // console.log(res.data);
        setData(res.data)
    }

    const onDelete=async(id)=> {
        const res=await axios.delete(`http://localhost:3000/categories/${id}`);
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
                            <h1 className="page-head-line">Manage order</h1>
                            <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12">
                            {/*   Kitchen Sink */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Manage categery
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>password</th>
                                                    <th>Created_at</th>
                                                    <th>Updated_at</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Arvi</td>
                                                    <td>
                                                        <input type="email" name="email" placeholder='arvi@gmail.com' />
                                                    </td>
                                                    <td>
                                                        <input type="password" name='password' placeholder='123456' />
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                              </tr>

                                               
                                               
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

export default Manage_order