import{ ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Add_product from "./Pages/Add_product";
import Add_categories from "./Pages/Add_categories";

import Manage_user from "./Pages/Manage_user";
import Manage_category from "./Pages/Manage_category";
import Manage_product from "./Pages/Manage_product";
import Manage_order from "./Pages/Manage_order";
import Login from "./Pages/Login";
import Manage_contact from "./Pages/Manage_contact";
import Edit_user from './Pages/Edit_user';
// import Signup from './Pages/Signup';



function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
          <Routes>  
                   <Route index path="/" element={ <> <Login/> </> } ></Route>
                  {/* <Route index path="/signup" element={ <> <Signup/> </> } ></Route>  */}
                    <Route  path="/dashboard" element={ <> <Header/> <Dashboard/> <Footer/> </> } ></Route>
                  <Route  path="/add_category" element={ <> <Header/> <Add_categories/> <Footer/> </> } ></Route>
                  <Route  path="/add_product" element={ <> <Header/> <Add_product/> <Footer/> </> } ></Route>
                 

                  <Route  path="/manage_category" element={ <> <Header/> <Manage_category/> <Footer/> </> } ></Route>
                  <Route  path="/manage_product" element={ <> <Header/> <Manage_product/> <Footer/> </> } ></Route>
                  <Route  path="/manage_order" element={ <> <Header/> <Manage_order/> <Footer/> </> } ></Route>

                  <Route  path="/manage_user" element={ <> <Header/> <Manage_user/> <Footer/> </> } ></Route>
                  <Route  path="/edit_user/:id" element={ <> <Header/> <Edit_user/> <Footer/> </> } ></Route>
                  <Route  path="/manage_contact" element={ <> <Header/> <Manage_contact/> <Footer/> </> } ></Route>
                  

          </Routes>
    </BrowserRouter>
  );
}

export default App;
