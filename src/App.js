import React, { useEffect, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cutting from "./Pages/Cutting";
import SignIn from "./Pages/LoginPage";
import DashBoard from "./Pages/DashBoard";
import ListOfUsersPage from "./Pages/ListOfUsersPage";
import AddUsersPage from "./Pages/AddUsersPage";
import { AuthContext } from "./store/Context";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import InventoryPage from "./Pages/InventoryPage";
import ArrivedMaterialsPage from "./Pages/inventory/ArrivedMaterialsPage";
import StockRegisterPage from "./Pages/inventory/StockRegisterPage";
import {useNavigate} from 'react-router-dom'

function App() {
  //const navigate = useNavigate();
  const auth = getAuth();
  const {setUserDtls,userDtls } = useContext(AuthContext);
  // const { fb } = useContext(FirebaseContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserDtls(user);
      
    });
  }, [auth,setUserDtls]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route exact path="/" element={<DashBoard />} />
          <Route path="/cutting" element={<Cutting />} />
          <Route path="/addusers" element={<AddUsersPage />} />
          <Route path="/userslist" element={<ListOfUsersPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/arrivedmaterials" element={<ArrivedMaterialsPage />} />
          <Route path="/stockreg" element={<StockRegisterPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;