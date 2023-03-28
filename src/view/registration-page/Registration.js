/** @format */
// import brightsquidLogo from '../../img/brightsquid_logo.PNG';
import React, { useState, useEffect } from "react";
import "../../App.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, Navigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../assets/props/Copyrights.js";
import MedicalPhoto from "../assets/props/MedicalPhotoProp.js";

// For Step count
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import HorizontalLinearStepper from "../../stepper";
import setActiveStep from "../../stepper";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import { stepperClasses } from "@mui/material";

import PasswordStrengthBar from "react-password-strength-bar";

// https://www.npmjs.com/package/check-password-strength
// https://www.npmjs.com/package/react-password-strength-bar

// NOT USED
// // Testing Password from youtube vid
// import {Password} from "primereact/password";
// import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
// import "primereact/resources/primereact.min.css"; // core css
// import "primeicons/primeicons.css"; //icons

// function PasswordMeterComponent() {
// 	const [inputPassword, setInputValue] = useState('');
// 	password = inputPassword
// 	return <PasswordMeter password/>;
// }

// import HorizontalLinearStepper from "../../stepper";
// import setActiveStep from "../../stepper";

import axios from "axios";

const theme = createTheme();

export default function Registration() {
	const [username, setUsername] = useState("");
	// Creates states for fields
	// Create a state var to hold the password strength
	// const [passwordStrength, setPasswordStrength] = React.useState(0);
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	// Handles backend submission
	function handleSubmitForm() {
		if (password !== passwordConfirm) {
			alert("Passwords do not match!");
			return;
		}
		if (username === "") {
			alert("Please fill the username field");
			return;
		}
		if (password === "") {
			alert("Please fill the password field");
			return;
		}
		axios
			.post("../../controller/api/users.js", {
				username: username,
				password: password,
			})
			.then(function () {
				alert("User created successfully");
				window.location.reload();
			})
			.catch(function () {
				alert("Could not create account. Please try again");
			});
		console.log(username, ", ", password, ", ", passwordConfirm);
		Navigate("/registration/practice-details");
	}

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				component="main"
				sx={{ height: "100%", width: "100%" }}
				marginLeft={4}
			>
				<CssBaseline />
				{/* TO-DO: Fix imaging dimensions to replicate figma mock-ups */}
				<Grid
					item
					xs={false}
					sm={4}
					md={3}
					sx={{
						backgroundImage: MedicalPhoto,
						backgroundRepeat: "no-repeat",
						backgroundColor: (t) =>
							t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
				<Grid
					item
					xs={12}
					sm={8}
					md={9}
					component={Paper}
					elevation={6}
					square
				>
					<Box
						sx={{
							my: 15,
							mx: 6,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						{/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
							{/* <LockOutlinedIcon /> */}
						{/* </Avatar> */}
						<Grid item xs={4} mt={4}>
							<img
								src={""}
								width={141.8}
								height={30.8}
								alt="brightsquid"
							/>
						</Grid>
						<Typography component="body" variant="h5">
							Welcome to Brightsquid!
						</Typography>
						<Box component="form" sx={{ mt: 1 }}>
							<Typography component={"bodyBS"}>
								{" "}
								Username{" "}
							</Typography>
							<TextField
								onChange={(e) => setUsername(e.target.value)}
								margin="normal"
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
								// autoComplete="John"
								autoFocus
							/>
							{/* <Typography variant="body1"> Last Name </Typography>
							<TextField
								margin="normal"
								required
								fullWidth
								id="last_name"
								label="Last Name"
								name="last_name"
								// autoComplete="Doe"
								autoFocus */}
							{/* /> */}
							{/* <FormControlLabel
								control={
									<Checkbox
										value="remember"
										color="primary"
									/>
								}
								label="Remember me"
							/> */}
							<Typography variant="body1">
								{" "}
								Create a Password{" "}
							</Typography>
							{/* <TextField
								margin="normal"
								required
								fullWidth
								id="password"
								label="Password"
								name="password"
								// autoComplete="Doe"
								autoFocus
							/> */}
							<OutlinedInput
								onChange={(e) => setPassword(e.target.value)}
								label="Password"
								fullWidth
								id="outlined-adornment-password"
								type={showPassword ? "text" : "password"}
								// value={inputValue}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{showPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								}
							/>
							{/* TODO: Password meter */}
							<Typography variant="body1">
								{" "}
								PASSWORD METER PLACEHOLDER{" "}
							</Typography>

							<PasswordStrengthBar password={password} />

							<Typography variant="body1">
								{" "}
								Confirm Password{" "}
							</Typography>
							{/* <Password value={value} onChange={(e) => setValue(e.target.value)} feedback={false} /> */}

							{/* <PasswordStrengthBar password={password} /> */}
							{/* function PasswordMeterK() {
								return (
									<div className="PasswordMeterK">
										<div style={{padding: "40px"}}>
										<Password feedback={false}

											/>
										</div>
									</div>
											
								);

							} */}

							<OutlinedInput
								onChange={(e) => {
									setPasswordConfirm(e.target.value);
								}}
								// onChange={(e) => {
								// 	if (password === e.target.value) {
								// 		setPasswordConfirm(e.target.value);
								// 	}
								// }}
								label="Password"
								fullWidth
								id="outlined-adornment-password"
								type={showPassword ? "text" : "password"}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{showPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								}
							/>

							{/* About you section */}
							<Typography variant="h6">About You</Typography>

							<Grid item xs={5} mt={5}>
								<Typography mb={2}>
									Title{" "}
									<strong
										className="asterisk"
										style={{ color: "red" }}
									>
										{" "}
										*{" "}
									</strong>
								</Typography>
								<FormControl fullWidth>
									<InputLabel> Title </InputLabel>
									{/* TO-DO: fill with actual data */}
									<Select
										id="clinic-select"
										label="Clinic Type"
									>
										<MenuItem value={0}>Dental</MenuItem>
										<MenuItem value={0}>Family</MenuItem>
										<MenuItem value={0}>Hospital</MenuItem>
										<MenuItem value={0}>
											Mental Health{" "}
										</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Button
								onClick={handleSubmitForm}
								id="next-steps-btn"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Next Steps
							</Button>

							<Grid container>
								<Grid item xs>
									{/* <Link href="#" variant="body2">
										Forgot password?
									</Link> */}
								</Grid>
								<HorizontalLinearStepper>
									{" "}
								</HorizontalLinearStepper>
								<Grid item></Grid>
							</Grid>
						</Box>
					</Box>
					<Copyright sx={{ mt: 5 }} />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
