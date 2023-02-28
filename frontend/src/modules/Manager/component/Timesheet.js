import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import "./Timesheet.css";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import logo from "../../../assets/Capture.png";
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#043465",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: "white",
  height: "240px",
  
}));

const Timesheet = ({ data, display }) => {

// const[filteredItem,setFilteredItem]=useState([]);
// const [dataArr,setDataArr]=useState(data);
// setDataArr(data);
// console.log(dataArr);
 const handleClick = (e) => {
    const f=e.target.id;
    // console.log(f);
    // data=data.filter(i=>i.timesheetId!==f);
    // console.log(data);
      const url=`http://localhost:8080/java/Manager/Timesheet/Approve/${f}`;
    axios.patch(url).then((result)=>{

    // console.log(result)
   }).catch((error)=>{
        console.log(error)
   });
  };

  // const handleChange=(e)=>{
  //   console.log("handle change");
  //   setFilteredItem(e.target.value);
    
  //   console.log(filteredItem);
  //   let newData=data.filter(card=>{
  //     return  card.employee.employee_name.toLowerCase()==filteredItem});
  //   console.log(newData);
      
  // }

// const searchInput=(event)=>{
//   const newQuery=event.target.value;
//   setQuery(newQuery);
//   const filtered=data.filter(item=>{
// return item.employee_name.toLowerCase().includes(newQuery.toLowerCase());
//   });
//   setData(filtered);
// }


  return (
    <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "top center",
        backgroundSize: "400px",
        backgroundPositionY: "100px",
        backgroundPositionX: "100px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-end", marginTop: "10px" }}>
        <span className="timesheet">{display}</span>{" "}
        <TextField
        // value={filteredItem}
        //  onChange={handleChange}
          id="input-with-icon-textfield"
          label="Search Timesheet"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <SearchIcon 
                  sx={{ color: "#ef4815", mr: 0, my: 1, fontSize: "30px" }}
                  
                />
              </InputAdornment>
            ),
          }}
          variant="standard"
          style={{ marginRight: "20px" }}
        />
      </Box>

      <Box sx={{ flexGrow: 1 }} style={{ margin: "180px 20px 0px 20px" }}>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map((item) => (
            <Grid item xs={2} sm={2} md={3} style={{minWidth:'33%'}}>
              <Item>
                <h2>{item.timesheetId}</h2>
                <p>Name: {item.employee.employee_name}</p>
                <p>Start date: {item.startDate}</p>
                <p>End Date:{item.endDate}</p>
                <p>Worked Hours:{item.hours}</p>
                <p>Allocated Hours:{item.projectemployeemapping.allocation}</p>
                {(item.approval===0)?(<p>Status:Awaiting approval</p>):(<p>Status:Approved</p>)}
                <button onClick={handleClick}  id={item.timesheetId} type="button">Approve</button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Timesheet;
