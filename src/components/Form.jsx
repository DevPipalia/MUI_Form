import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';


function RegistrationForm() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    acceptedTerms: false,
  });


  const [passwordError, setPasswordError] = useState('');
  const [requiredFieldErrors, setRequiredFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
  });



  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'acceptedTerms' ? checked : value,
    });

    setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;

    // Check for empty fields
    const requiredFields = ['username', 'email', 'password', 'gender'];
    const fieldErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        fieldErrors[field] = 'Field is required';
        hasErrors = true;
      } else {
        fieldErrors[field] = '';
      }
    });

    setRequiredFieldErrors(fieldErrors);

    if (hasErrors) {
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setPasswordError('Password must contain one uppercase, one lowercase, one number, and one special character');
      hasErrors = true;
    } else {
      setPasswordError('');
    }

    if (hasErrors) {
      return;
    }

    // You can handle successful form submission here
    console.log(formData);
    navigate('/welcome'); // Redirect to the '/welcome' route after successful submission
  };

  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  

  return (
    <Container
      maxWidth="xs"
      style={{
        background: '#F25B55',
        padding: '20px',
        borderRadius: '10px',
        
        marginTop: '50px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom style={{ fontFamily: 'Poppins' }}>
        Sign in to your KJSCE account
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="standard"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          style={{ color: 'white', marginBottom: '20px' }}
          error={requiredFieldErrors.username !== ''}
          helperText={
    <span style={{ color: 'white' }}>
      {requiredFieldErrors.username}
    </span>
  }
        />
        <TextField
          label="Email"
          variant="standard"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          style={{ color: 'white', marginBottom: '20px' }}
          error={requiredFieldErrors.email !== ''}
          helperText={
    <span style={{ color: 'white' }}>
      {requiredFieldErrors.email}
    </span>
  }
        />
         <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password" style={{ color: 'white' }}>
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={passwordError !== ''}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {requiredFieldErrors.password && (
          <Typography color="error" variant="caption" style={{ marginLeft: '14px', color: 'white' }}>
            {requiredFieldErrors.password}
          </Typography>
        )}
        {passwordError && (
          <Typography color="error" variant="caption" style={{ marginLeft: '14px', color: 'white' }}>
            {passwordError}
          </Typography>
        )}
        <br/>
       <FormControl component="fieldset" style={{ marginTop: '20px' }}>
          <FormLabel component="legend" style={{ color: 'white' }}>
            Gender
          </FormLabel>
          <RadioGroup
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            row // Display options horizontally
          >
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              style={{ color: 'white' }}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              style={{ color: 'white' }}
            />
          </RadioGroup>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
            />
          }
          label="I accept all the terms and conditions"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default RegistrationForm;
