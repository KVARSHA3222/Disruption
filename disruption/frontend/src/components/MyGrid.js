import React from 'react';
import { Button, Grid, LinearProgress, Typography } from '@mui/material';

function FormRow() {
  return (
    <React.Fragment>
      <Grid item>
        <Button fullWidth variant='contained'>item1</Button>
      </Grid>
      <Grid item>
        <Button fullWidth variant='contained'>Item2</Button>
      </Grid>
      <Grid item>
        <Button fullWidth variant='contained'>Item3</Button>
      </Grid>
    </React.Fragment>
  );
}

const MyGrid = () => {
  return (
    <div style={{paddingTop:"50px",paddingLeft:"130px",paddingRight:"130px"}}>
      <Grid container spacing={5}> 
        <Grid container item direction="column" xs={6}><Typography>Completeness Score</Typography></Grid>
        <Grid container item direction="column" xs={6}><Typography> Score</Typography></Grid>
        <Grid container item direction="column" xs={6} spacing={2}><FormRow/></Grid>
        <Grid container item direction="column" xs={6} spacing={2}><FormRow/></Grid>
      </Grid>
    </div>    
  );
}

export default MyGrid;
