import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

export default function RadioButtonsGroup() {
  const [selectedValue, setSelectedValue] = React.useState('general'); // Default selected value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" sx={{paddingLeft:"10%"}}>
      <Grid container>
      <Grid item xs={6}><FormLabel component="legend">Completeness Score</FormLabel></Grid>
      <Grid item xs={6}><FormLabel component="legend">Accuracy Score</FormLabel></Grid>
      </Grid>
      <RadioGroup
        aria-label="completeness-and-accuracy-score"
        name="completeness-and-accuracy-score"
        value={selectedValue}
        onChange={handleChange}
      >
        <Grid container direction="row" justifyContent="space-evenly">
          <Grid item xs={6}>
            <FormControlLabel value="general" control={<Radio />} label="General" />
            <LinearProgress variant="determinate" value={90}/>
            <Typography variant="caption">No rows have missing fields</Typography>
          </Grid>
          <Grid item xs={6}>
      <FormControlLabel value="city/state_match" control={<Radio />} label="City/State Match" />
      <LinearProgress variant="determinate" value={90}/>
      <Typography variant="caption">3 out of 300 rows contain a City/State mismatch</Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="npi_data" control={<Radio />} label="NPI data" />
            <LinearProgress variant="determinate" value={30}/>
            <Typography variant="caption">not mapped</Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="zip_code_check" control={<Radio />} label="ZIP Code Check" />
            <LinearProgress variant="determinate" value={80}/>
            <Typography variant="caption">No rows have an invalid Zip Code</Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="recommended_data" control={<Radio />} label="Recommended data" />
            <LinearProgress variant="determinate" value={50}/>
            <Typography variant="caption">File contains 7 out of 10 recommended data</Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="npi_validation" control={<Radio />} label="NPI Validation" />
            <LinearProgress variant="determinate" value={60}/>
            <Typography variant="caption">Not mapped</Typography>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
