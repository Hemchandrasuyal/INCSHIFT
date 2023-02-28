import React, { useEffect, useState } from "react";
import "./Main.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import logo from "../../../assets/Capture.png";
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#043465",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: "white",
  height: "180px",
}));

const Main = (props) => {
  const [count, setCount] = useState({ approved: 0, rejected: 0, pending: 0 });
  const [data, setData] = useState([])
  const [dataVisible, setDataVisible] = useState(true);

  const dataAprroved = {
    employeeId: props.data,
    approval: 0
  }

  const dataRejected = {
    employeeId: props.data,
    approval: 1
  }

  const url = 'http://localhost:8080/java/Employee/Timesheet/approved';
  useEffect(() => {
    axios.post(url, dataAprroved).then((result) => {
      setData(result.data);
      setCount({ approved: result.data.length })
      setDataVisible(true);
    }).catch((error) => {
      console.log(error)
    });
  }, [])


  const handleClickApproved = (e) => {
    if (e.target.id === "approved") {
      const url = 'http://localhost:8080/java/Employee/Timesheet/approved';
      axios.post(url, dataAprroved).then((result) => {
        setData(result.data);
        setCount({ approved: result.data.length })

      }).catch((error) => {
        console.log(error)
      });
    }
  };
  const handleClickRejected = (e) => {
    if (e.target.id === "rejected") {

      const url = 'http://localhost:8080/java/Employee/Timesheet/approved';
      axios.post(url, dataRejected).then((result) => {

        setData(result.data);
        setCount({ rejected: result.data.length })
      }).catch((error) => {

      });
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "400px",
        backgroundPositionY: "50px",
      }}
    >

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ marginTop: "20px" }}
      >

        <Grid item xs={10}>
          <div className="status" onClick={handleClickApproved} id="approved">
            Awaiting Approval {count.approved}
          </div>

          <div className="status" onClick={handleClickRejected} id="rejected">Approved {count.rejected}</div>

        </Grid>

      </Grid>

      <Box sx={{ flexGrow: 1 }} style={{ margin: "120px 20px 0px 20px" }}>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >

          {dataVisible && data.map((item) => (
            <Grid item xs={2} sm={2} md={3}>
              <Item>
                <h2>{item.timesheetId}</h2>
                <p>Mnager name:{item.project.employee.employee_name}</p>
                <p>EmployeeName:{item.employee.employee_name}</p>
                <p>Allocation: {item.hours}</p>
                <p>Star date :{item.startDate}</p>
                <p>End date:{item.endDate}</p>

                <p>Project name:{item.project.projectName}</p>

                {(item.approval === 0) ? (<p>Status:Awaiting approval</p>) : (<p>Status:Approved</p>)}

              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Main;