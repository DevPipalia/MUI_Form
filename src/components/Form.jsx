import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    acceptedTerms: false,
  });

  const [passwordError, setPasswordError] = useState("");
  const [requiredFieldErrors, setRequiredFieldErrors] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
  });

  const isSomaiyaEmail = (email) => {
    return email.toLowerCase().endsWith("@somaiya.edu");
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "acceptedTerms" ? checked : value,
    });

    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;

    const requiredFields = ["username", "email", "password", "gender"];
    const fieldErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        fieldErrors[field] = "Field is required";
        hasErrors = true;
      } else {
        fieldErrors[field] = "";
      }
    });

    if (!isSomaiyaEmail(formData.email)) {
      fieldErrors.email = "Please enter a correct Somaiya email address.";
      hasErrors = true;
    }

    setRequiredFieldErrors(fieldErrors);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setPasswordError(
        "Password must contain one uppercase, one lowercase, one number, and one special character"
      );
      hasErrors = true;
    } else {
      setPasswordError("");
    }

    if (hasErrors) {
      return;
    }

    console.log(formData);
    navigate("/welcome");
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
        background: "#F25B55",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom style={{ fontFamily: "Poppins" }}>
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
          style={{ color: "white", marginBottom: "20px" }}
          error={requiredFieldErrors.username !== ""}
          helperText={
            <span style={{ color: "white" }}>
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
          style={{ color: "white", marginBottom: "20px" }}
          error={requiredFieldErrors.email !== ""}
          helperText={
            <span style={{ color: "white" }}>{requiredFieldErrors.email}</span>
          }
        />
        <TextField
          label="Password"
          variant="standard"
          name="password" 
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          fullWidth
          style={{ color: "white", marginBottom: "20px" }}
          error={passwordError !== ''}
          helperText={
            <span style={{ color: "white" }}>{requiredFieldErrors.password}</span>
          }
          InputProps={{
            endAdornment: <InputAdornment position="start"  onClick={handleClickShowPassword}>👁</InputAdornment>,
          }}
        />
        {requiredFieldErrors.password && (
          <Typography
            color="error"
            variant="caption"
            style={{ marginLeft: "14px", color: "white" }}
          >
            {requiredFieldErrors.password}
          </Typography>
        )}
        {passwordError && (
          <Typography
            color="error"
            variant="caption"
            style={{ marginLeft: "14px", color: "white" }}
          >
            {passwordError}
          </Typography>
        )}
        <br />
        <FormControl component="fieldset" style={{ marginTop: "20px" }}>
          <FormLabel component="legend" style={{ color: "white" }}>
            Gender
          </FormLabel>
          <RadioGroup
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              style={{ color: "white" }}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              style={{ color: "white" }}
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
        <Button
          type="submit"
          fullWidth
          sx={{
            display: "flex",
            alignItems: "center",
            fontFamily: "inherit",
            fontWeight: 500,
            fontSize: "16px",
            padding: "0.7em 1.4em 0.7em 1.1em",
            color: "black",
            backgroundColor: "#70F4FA",
            border: "none",
            boxShadow: "0 0.7em 1.5em -0.5em #14a73e98",
            letterSpacing: "0.05em",
            borderRadius: "20em",
            cursor: "pointer",
            userSelect: "none",
            WebkitUserSelect: "none",
            touchAction: "manipulation",
            "&:hover": {
              backgroundColor: "#4DE5E7",
              boxShadow: "0 1em 2em -0.5em #14a73e98",
            },
            "&:active": {
              boxShadow: "0 0.3em 1em -0.5em #14a73e98",
            },
          }}
          style={{ marginTop: "20px" }}
        >
          Submit
        </Button>

        <Typography variant="h6" style={{ color: "white", marginTop: "20px" }}>
          or sign in with
        </Typography>

        <IconButton style={{ marginRight: "60px" }}>
          <GoogleIcon style={{ fontSize: 40, color: "black" }} />
        </IconButton>
        <IconButton style={{ marginRight: "60px" }}>
          <GitHubIcon style={{ fontSize: 40, color: "black" }} />
        </IconButton>
        <IconButton>
          <LinkedInIcon style={{ fontSize: 40, color: "black" }} />
        </IconButton>
      </form>
    </Container>
  );
}

export default RegistrationForm;
