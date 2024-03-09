import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Buffer } from "buffer";
import './Buy.css';
import { Button, Grid, TextField, Typography } from '@mui/material';

const Buy = () => {
  const [viewData, setViewData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3005/view1/${id}`).then(({ data }) => {
      setViewData(data);
    }).catch(error => {
      console.error("Error fetching item data:", error);
    });
  }, [id]);

  const [inputs, setInputs] = useState({
    "itemid": id,
    "Fname": '',
    "Address": '',
    "City": '',
    "State": '',
    "Zipcode": '',
    "Contactno": '',
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    
  };

  const addHandler = () => {
    axios.post("http://localhost:3005/unew", inputs)
      .then((response) => {
        alert("Item Ordered Successfully");
      })
      .catch(err => console.error("Error ordering item:", err));
  };

  return (
    <div className='h'>
      {viewData.image1 && (
        <img
          src={`data:image/jpeg;base64,${Buffer.from(viewData.image1.data.data).toString("base64")}`}
          width="300px"
          height="auto"
          alt="Item"
        />
      )}

      <Typography variant="h5" gutterBottom>
        Shipping Address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="fullname"
            name='Fname'
            label="Full Name"
            value={inputs.Fname}
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="address"
            name="Address"
            label="Address"
            value={inputs.Address}
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            id="city"
            name="City"
            label="City"
            value={inputs.City}
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            id="state"
            name="State"
            label="State"
            value={inputs.State}
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            id="zipcode"
            name="Zipcode"
            label="ZIP Code"
            value={inputs.Zipcode}
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="contactno"
            name="Contactno"
            label="Contact Number"
            value={inputs.Contactno}
            onChange={inputHandler}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={addHandler}>
        Submit
      </Button>
    </div>
  );
};

export default Buy;
