import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";

// style={{ backgroundColor: "#ef4815", paddingTop: "7px", paddingLeft: "40px", marginTop: "30px"}}
const Footer = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      style={{
        marginTop: "50px",
        backgroundColor: "#ef4815",
        paddingLeft: "40px",
        paddingBottom: "20px",
      }}
    >
      <Grid item xs={10}>
<a href="https://www.facebook.com/IncedoInc" target="_blank">      <FacebookIcon href="www" style={{ color: "#043465", fontSize: "35px" }} /></a> 
<a href="https://www.facebook.com/IncedoInc" target="_blank">  <LinkedInIcon style={{ color: "#043465", fontSize: "35px" }} /></a>
      </Grid>
      <Grid item xs={2}>
        <a href="https://www.incedoinc.com/contact/" target="_blank" style={{ color: "#043465", fontWeight: "bolder" }}>
           CONTACT US
        </a>
      </Grid>
    </Grid>
  );
};

export default Footer;
