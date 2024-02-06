import React, { useState } from 'react';

const FileUpload = () => {
  const [formData, setFormData] = useState({
    fileName: '',
    description: '',
    delimiter: '',
    expiration: '',
    sharingFile: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, sharingFile: e.target.checked }));
  };

  const currentDate = new Date();
  const after60Days = new Date(currentDate.getTime() + 60 * 24 * 60 * 60 * 1000);
  const after90Days = new Date(currentDate.getTime() + 90 * 24 * 60 * 60 * 1000);

  return (
    <form>
     <label>
  <p>Drag and drop a Utilization File here, or click to select a file from your computer.</p>
  <p>Supported Formats: .csv (recommended) and Microsoft Excel 2003 and above (.xls and .xlsx)</p>
  <input type="file" onChange={(e) => console.log(e.target.files)} accept=".xls,.xlsx,.csv" />
</label>
<br />
<input
  type="text"
  name="fileName"
  placeholder="Enter Utilization File Name"
  onChange={handleChange}
/>
<br />
<input
  type="text"
  name="description"
  placeholder="Enter Description"
  onChange={handleChange}
/>
<br />

      <label>
        Delimiter
        <select name="delimiter" onChange={handleChange}>
          <option value=",">Comma (,)</option>
          <option value=";">Semicolon (;)</option>
          <option value="|">Pipe (|)</option>
        </select>
      </label>
      <br />
      <label>
        Expiration
        <select name="expiration" onChange={handleChange}>
          <option value="1">60 days({after60Days.toLocaleDateString()})</option>
          <option value="7">90 days({after90Days.toLocaleDateString()})</option>
          <option value="30">Never</option>
        </select>
      </label>
      <br />
      
      <label>
        Sharing File
        <input
          type="checkbox"
          checked={formData.sharingFile}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <button type="button" onClick={() => console.log('Cancelled')}>
        Cancel
      </button>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        Save
      </button>
    </form>
  );
};

export default FileUpload;


import * as React from 'react';
import {Checkbox,FormControlLabel} from '@mui/material';


export default function FileUpload() {
  return (
    <div>
       
      <FormControlLabel
  control={<Checkbox size="small" />}
  label="Sharing"
      />
    </div>
  );
}

import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, FormControl, OutlinedInput, FormHelperText, Select, MenuItem } from '@mui/material';

function YourForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid item container>
        <Grid item xs={2} sx={{ textAlign: 'left' }}>
          <h5>Name*</h5>
        </Grid>
        <Grid item xs={10}>
          <FormControl fullWidth error={errors.name}>
            <OutlinedInput 
              placeholder="Enter Utilization File Name" 
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <FormHelperText>{errors.name.message}</FormHelperText>}
          </FormControl>
        </Grid>
      </Grid>
      {/* ... rest of your form */}
      <input type="submit" />
    </form>
  );
}




import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileSizeMB = file.size / (1024 * 1024);
    const validFileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
    if (validFileTypes.includes(file.type) && fileSizeMB < 100) {
      setSelectedFile(file);
    } else {
      alert(fileSizeMB >= 100 ? "File size should be below 100MB" : "File supported only xls xlsx csv");
    }
  };

  return (
    <Box component="label"
      fullWidth
      sx={{
        height: 150,
        border: "2px dashed gray",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#D3D3D333"
      }}>
      <input type="file" accept=".xls,.xlsx,.csv" style={{ display: 'none' }} onChange={handleFileChange} />
      <p style={{ fontSize: "16px" }}>Drag and drop a Utilization File here, or click to select a file from your computer.</p>
      <p style={{ fontSize: "12px" }}>Supported Formats: .csv (recommended) and Microsoft Excel 2003 and above (.xls and .xlsx)</p>
      <Button component="label" variant="contained" >
        Upload
        <input type="file" accept=".xls,.xlsx,.csv" style={{ display: 'none' }} onChange={handleFileChange} />
      </Button>
    </Box>
  );
};

export default FileUpload;

