/** @format */

// import brightsquidLogo from '../../img/brightsquid_logo.PNG';

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import FormControl from '@mui/material/FormControl';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import HorizontalLinearStepper from "../../stepper";
import MedicalPhoto from "../assets/props/MedicalPhotoProp.js";
import Copyright from "../assets/props/Copyrights.js";

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

import { useEffect, useState } from "react"
import customTheme from "../../style";

export default function PracticeDetails() {
	const [value, setValue] = useState(false);

	const [formState, setFormState] = useState({
		practiceName: "",
		clinicType: "",
		clinicSubType: "",
		country: "",
		province: "",
		city: ""
	  });
	
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormState((prevState) => ({ ...prevState, [name]: value }));
	};

	const isFormFilled = () => {
		return (
			formState.practiceName !== "" &&
			formState.clinicType !== "" &&
			formState.clinicSubType !== "" &&
			formState.country !== "" &&
			formState.province !== "" &&
			formState.city !== ""
		);
	  };

	const handleSubmit = (event) => {
		event.preventDefault();
		if (isFormFilled()) {
		console.log("Form submitted!", formState);
		} else {
		console.log("Please fill out all fields.");
		}
	};

	// Find a way import this 
	const theme = createTheme({
		palette: {
		primary: {
			main: '#1074AE',
			constrastText: "black"
		},
		secondary: {
			main: '#55C9F4',
		},
		inherit: {
			main: '#B3B3B3',				
			constrastText: "#FFFF" // not working :(
		},
		},
	});

	return (
		<form onSubmit={handleSubmit}>
			<ThemeProvider theme={theme}>
				<Grid container component="main" sx={{ height: "100vh"}}>
					<CssBaseline />
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
					<Grid item xs={12} sm={8} md={9} component={Paper} elevation={6} square>

						{/* Right side*/}
						<Box sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column",  alignItems: "left", }} >
							<Box component="form" sx={{ mt: 1 }} >
								<Grid container spacing={12}>
									<Grid item xs={3}>
										<Typography variant="h5">
											Practice Details 
										</Typography>
									</Grid>
									<Grid item xs={9}>
										LOGO
										{/* <img src={brightsquidLogo} width={141.8} height={30.8} alt="brightsquid"/> */}
									</Grid>
								</Grid>

								{/* Practice Name and Practice Phone */ }			
								<Grid container spacing={12}>
									<Grid item xs={2}>
										<Typography variant="body1" mt={5} >
											<strong> Practice Details</strong> 
										</Typography>
									</Grid>

									<Grid item xs={5} mt={7}>
										<Typography variant="body1"> Practice Name <strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
										<TextField
											margin="normal"
											fullWidth
											id="practice_name"
											label="Practice Name"
											name="practiceName"
											onChange={handleInputChange}
										/>
									</Grid>
									<Grid item xs={5} mt={7}>
										<Typography variant="body1"> Practice Phone </Typography>
										<PhoneInput
										fullWidth
											// fix me, label disappear, similar to text fields
											specialLabel={""}
											country={'ca'}
											inputProps={{shrink: "true"}}
											disableDropdown={true}
											disableSearchIcon={true}
											value={value}
											onChange={setValue}/>
									</Grid>
								</Grid>

								{/* Clinic Type and Clinic sub type */ }					
								<Grid container spacing={12}>
									<Grid item xs={2}>
										{/* Empty space to align*/}
									</Grid>
									<Grid item xs={5} mt={5}>
										<Typography  mb={2}>Clinic Type<strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
										<FormControl fullWidth>
										<InputLabel>Clinic Type</InputLabel>
										{/* TO-DO: fill with actual data */}
										<Select name="clinicType" id="clinic-select" label="Clinic Type" onChange={handleInputChange}>
											<MenuItem value={0}>Dental</MenuItem>
											<MenuItem value={0}>Family</MenuItem>
											<MenuItem value={0}>Hospital</MenuItem>
											<MenuItem value={0}>Mental Health </MenuItem>
										</Select>
										</FormControl>
									</Grid>
									<Grid item xs={5} mt={5}>
										<Typography  mb={2}>Clinic Subtype <strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
										<FormControl fullWidth>
										<InputLabel> Clinic Subtype </InputLabel>
										{/* TO-DO: fill with actual data */}
										<Select name="clinicSubType" id="country-select" label="Clinic Subtype" onChange={handleInputChange}>
											<MenuItem value={10}>Dental Laboratory</MenuItem>
											<MenuItem value={10}>Dental Laboratory</MenuItem>
											<MenuItem value={10}>Dental Laboratory</MenuItem>
										</Select>
										</FormControl>
									</Grid>
								</Grid>

								{/* PRACTICE ADDRESS: Country, State/province and City */ }
								<Grid container spacing={12}>
									<Grid item xs={2}>
										<Typography variant="body1"  mt={7}> <strong> Practice Address </strong>  </Typography>
									</Grid>
							
									<Grid item xs={5} mt={5}>
										<Typography  mb={2}>Country<strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
										<FormControl fullWidth>
										<InputLabel> Country </InputLabel>
										{/* TO-DO: fill with actual data */}
										<Select name="country" id="country-select" label="Country" onChange={handleInputChange}>
											<MenuItem value={10}>Canada</MenuItem>
											<MenuItem value={20}>United States</MenuItem>
											<MenuItem value={30}>Canada</MenuItem>
										</Select>
										</FormControl>
									</Grid>
									<Grid item xs={5}>
										<Typography  mb={2} mt={5}>Province<strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
										<FormControl fullWidth>
										<InputLabel> Province </InputLabel>
										{/* TO-DO: fill with actual data */}
										<Select name="province" id="province-select" label="Province" onChange={handleInputChange}>
											<MenuItem value={10}>Alberta</MenuItem>
											<MenuItem value={30}>British Columbia</MenuItem>
											<MenuItem value={20}>Manitoba</MenuItem>
											<MenuItem value={20}>New Brunswick</MenuItem>
											<MenuItem value={20}>Newfoundland and Labrador</MenuItem>
											<MenuItem value={20}>Nova Scotia</MenuItem>
											<MenuItem value={20}>Ontario</MenuItem>
											<MenuItem value={20}>Prince Edward Island</MenuItem>
											<MenuItem value={20}>Quebec</MenuItem>
											<MenuItem value={20}>Saskatchewan</MenuItem>
										</Select>
										</FormControl>
									</Grid>
								</Grid>
		
								<Grid container spacing={12}>
									<Grid item xs={2}/>	{/* Empty grid item to align the City dropdown*/}

									<Grid item xs={5} mt={5}>
										<Typography  mb={2}>City<strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
										<FormControl fullWidth>
										<InputLabel> City </InputLabel>
										{/* TO-DO: fill with actual data */}
										<Select name="city" id="city-select" label="City" onChange={handleInputChange}>
											<MenuItem value={10}>Calgary</MenuItem>
											<MenuItem value={20}>Edmonton</MenuItem>
											<MenuItem value={30}>City 1</MenuItem>
											<MenuItem value={40}>City 2</MenuItem>
										</Select>
										</FormControl>
									</Grid>
								</Grid>
				
								{/* Center the stepper */}
								<Grid container spacing={10}  alignItems="center" justifyContent="center">
									<Grid item xs={10} mt={5}  >
										<HorizontalLinearStepper> </HorizontalLinearStepper>
									</Grid>
								</Grid>

								{/* Back and next buttons */}
								<Grid container spacing={12}>
									<Grid item xs={10} mt={5}>
										<Button id="back-btn" variant="contained" component={Link} to="/registration">Back</Button>
									</Grid>
									<Grid item xs={2} mt={5}  >
										{/* Need to check fields if form is complete */}
										<Button id="next-btn" variant="contained" disabled={!isFormFilled()} color={isFormFilled()  ? "primary" : "inherit"}>Next</Button>
									</Grid>
								</Grid>

							</Box>
						</Box>
						<Copyright sx={{ mt: 5 }} />
					</Grid>
				</Grid>
			</ThemeProvider>
	</form>
	);
}