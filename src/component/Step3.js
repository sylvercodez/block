import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ArrowDropDownCircleTwoTone } from '@mui/icons-material';
import { Input } from '@mui/material';

export default function Step3() {
  const [state, setStates] = React.useState('');

  const handleChange = (event) => {
    setStates(event.target.value);
  };

  return (
    <div>
      
      <FormControl fullWidth >
        <Select
          value={state}
          onChange={handleChange}
          displayEmpty
        //   IconComponent={<ArrowDropDownCircleTwoTone />}
          className="forms2"
        //   inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            Your Level Of Experience
          </MenuItem>
          <MenuItem value={'LAGOS'}>Lagos</MenuItem>
          <MenuItem value={'Abuja'}>Abija</MenuItem>
          <MenuItem value={'Kogi'}>Kogi</MenuItem>
        </Select>
        <Select
          value={state}
          onChange={handleChange}
          displayEmpty
        //   IconComponent={<ArrowDropDownCircleTwoTone />}
          className="forms2"
        //   inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            Your Preferred Track
          </MenuItem>
          <MenuItem value={'LAGOS'}>Lagos</MenuItem>
          <MenuItem value={'Abuja'}>Abija</MenuItem>
          <MenuItem value={'Kogi'}>Kogi</MenuItem>
        </Select>
        <Select
          value={state}
          onChange={handleChange}
          displayEmpty
        //   IconComponent={<ArrowDropDownCircleTwoTone />}
          className="forms2"
        //   inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            Your Current Employment Type
          </MenuItem>
          <MenuItem value={'LAGOS'}>Lagos</MenuItem>
          <MenuItem value={'Abuja'}>Abija</MenuItem>
          <MenuItem value={'Kogi'}>Kogi</MenuItem>
        </Select>  
      </FormControl>
    </div>
  );
}
