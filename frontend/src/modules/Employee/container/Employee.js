import React, {useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Main from "../component/Main";
import Footer from "../../Footer/Footer";
import {useLocation} from "react-router-dom";
function Employee() {

  const location=useLocation();
  const [data1] = useState(location);
  console.log('location',location)
  return (
    <>
      <Navbar data={data1.state.EmployeeName}/>
      <Main data={data1.state.EmployeeId}/>
      <Footer />
    </>
  );
}
export default Employee;
