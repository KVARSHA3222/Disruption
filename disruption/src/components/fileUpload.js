import React, { useState } from 'react';
import { Button, Container, Box, FormControl, OutlinedInput, Select, MenuItem, Checkbox, FormControlLabel, Grid, Alert } from '@mui/material';

const FileUpload = () => {
  
  const [alert, setAlert] = useState();
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
    setFormData((prev) => ({ ...prev, sharingFile: e.target.checked 
    }));
  };

  const currentDate = new Date();
  const after60Days = new Date(currentDate.getTime() + 60 * 24 * 60 * 60 * 1000);
  const after90Days = new Date(currentDate.getTime() + 90 * 24 * 60 * 60 * 1000);

  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileSizeMB = file.size / (1024 * 1024);
    const validFileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
    if (validFileTypes.includes(file.type) && fileSizeMB < 100) {
      setSelectedFile(file);
      
    } else {
      if (fileSizeMB >= 100) {
        setAlert({ severity: 'error', message: 'File size should be less than 100MB' });
      } else {
        setAlert({ severity: 'error', message: 'File type not supported. Accepted file types are .csv, .xls, and .xlsx' });
      }
    }
  };
  
  
  return (
  <Container align='center' style={{ paddingLeft: '200px', paddingRight: '200px' }}>
    <form style={{ paddingTop: '20px' }}>
      <Grid container spacing={2} direction="column" justify="center" >

      <Grid item container>
      <Grid item xs={2} sx={{ textAlign: 'left' }}></Grid>

      <Grid item xs={10}>
  <Box component="label"
  fullWidth
      sx={{
        height: "fit-content",
        border: "2px dashed gray",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#D3D3D333"
      }}>

    <input type="file" accept=".xls,.xlsx,.csv" style={{ display: 'none' }} onChange={handleFileChange}/>
    <p style={{ fontSize: "16px" }}>Drag and drop a Utilization File here, or click to select a file from your computer.</p>
    <p style={{ fontSize: "12px" }}>Supported Formats: .csv (recommended) and Microsoft Excel 2003 and above (.xls and .xlsx)</p>
    {alert&&<Alert severity={alert.severity}>{alert.message}</Alert>}
    <Button component="label" variant="contained" >
      Upload
      <input type="file" accept=".xls,.xlsx,.csv" style={{ display: 'none' }} onChange={handleFileChange}/>
    </Button>
  </Box>
</Grid>
</Grid>


          <Grid item container>
            <Grid item xs={2} sx={{ textAlign: 'left' }}>
              <h5>Name*</h5>
            </Grid>
            <Grid item xs={10}>
            <FormControl fullWidth>
              <OutlinedInput placeholder="Enter Utilization File Name" />
            </FormControl>
            </Grid>
          </Grid>

          <Grid item container>
            <Grid item xs={2} sx={{ textAlign: 'left' }}>
              <h5>Description</h5>
            </Grid>
            <Grid item xs={10}>
            <FormControl fullWidth>
              <OutlinedInput placeholder="Enter Description" />
            </FormControl>
          </Grid>
          </Grid>

          <Grid item container>
            <Grid item xs={2} sx={{ textAlign: 'left' }}>
              <h5 >Delimiter</h5>
            </Grid>
            <Grid item xs={10}>
            <FormControl fullWidth>
              <Select variant="outlined" value={formData.delimiter} onChange={handleChange} name="delimiter" sx={{ textAlign: 'left' }}>
                <MenuItem value=",">Comma (,)</MenuItem>
                <MenuItem value=";">Semicolon (;)</MenuItem>
                <MenuItem value="|">Pipe (|)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          </Grid>

          <Grid item container>
            <Grid item xs={2} sx={{ textAlign: 'left' }}>
              <h5 sx={{ textAlign: 'left' }}>Expiration</h5>
            </Grid>
            <Grid item xs={10}>
            <FormControl fullWidth>
              <Select variant="outlined" value={formData.expiration} onChange={handleChange} name="expiration" sx={{ textAlign: 'left' }}>
                <MenuItem value="60">60 days({after60Days.toLocaleDateString()})</MenuItem>
                <MenuItem value="90">90 days({after90Days.toLocaleDateString()})</MenuItem>
                <MenuItem value="0">Never</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          </Grid>

          <Grid item container>
            <Grid item xs={2}>
              <h5 style={{ textAlign: 'left' }}>Sharing</h5>
            </Grid>
            <Grid item xs={10} sx={{ textAlign: 'left' }}>
            <FormControlLabel
              control={<Checkbox size='small' checked={formData.sharingFile} onChange={handleCheckboxChange} name="sharingFile" color="primary" />}
              label="Sharing" />
          </Grid>
          </Grid>

          <Grid container justifyContent="flex-end">
          <Grid item>
            <Button size='small'>Cancel</Button>
            <Button variant='contained' size='small'>Save</Button>
          </Grid>
          </Grid>
      </Grid>
    </form>
  </Container>
  );
};

export default FileUpload;
