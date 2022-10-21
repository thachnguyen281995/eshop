import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";
const SearchBar = ({onSubmit}) =>{
    const [searchTerm,setSearchTerm] = useState("");
    const handleChange = (e) =>{
        setSearchTerm(e.target.value)
    }
    const onKeyPress = (e) =>{
        if(e.key === "Enter"){
            onSubmit(searchTerm)
        }
    }
    return(
        <Paper elevation={6} style={{padding:"25px",marginTop:"20px",display:"flex"}}>
            <TextField 
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
            value={searchTerm}
            onChange ={handleChange}
            onKeyPress ={onKeyPress}
            />
        </Paper>
    )
}
export default SearchBar