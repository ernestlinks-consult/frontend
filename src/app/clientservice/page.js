"use client";
import React, { useState } from "react";
import Header from "@/app/components/header/index";
import { Button } from "@mui/material";
import { Input } from "@mui/material";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const CustomerInfoForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    surname: "",
    firstName: "",
    otherName: "",
    maidenName: "",
    previousName: "",
    gender: "",
    dateOfBirth: "",
    cityOfBirth: "",
    countryOfBirth: "",
    height: "",
    hairColor: "",
    eyeColor: "",
    visiblePeculiarities: "",
    nationality: "",
    dualCitizenship: "", // Keep this within formData
    maritalStatus: "",
    profession: "",
    phone: "",
    email: "",
    address: "",
    guarantors: [
      { fullName: "", occupation: "", phone: "", email: "", address: "" },
      { fullName: "", occupation: "", phone: "", email: "", address: "" },
    ],
  });

  const nationalities = [
    {
      value: "GH",
      label: "Ghanaian",
    },
    {
      value: "US",
      label: "American",
    },
    {
      value: "DE",
      label: "German",
    },
    {
      value: "IN",
      label: "Indian",
    },
    {
      value: "JP",
      label: "Japanese",
    },
  ];

  const gender = [
    {
      value: "None",
      label: "Select Gender",
    },
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ];

  const [dualCitizenship, setDualCitizenship] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleGuarantorChange = (index, e) => {
    const { name, value } = e.target;
    const updatedGuarantors = [...formData.guarantors];
    updatedGuarantors[index][name] = value;
    setFormData({ ...formData, guarantors: updatedGuarantors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <>
      <div className="mainContainer ">
        <Header />
        {/* <div className="container py-5 d-flex justify-content-center min-vh-100">
        <div className="card shadow-lg p-4 w-50">
          <h2 className="text-center mb-4">Customer Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Birthdate</label>
              <input
                type="date"
                className="form-control"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Upload Ghana Card</label>
              <input
                type="file"
                className="form-control"
                name="ghanaCard"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Upload Birth Certificate</label>
              <input
                type="file"
                className="form-control"
                name="birthCert"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                required
              />
            </div>

            <button
              type="submit"
              className="nav-link link p-3 fw-bold text-white rounded text-decoration-none w-100">
              Submit
            </button>
          </form>
        </div>
      </div> */}
        <div className="container py-5 d-flex justify-content-center min-vh-100">
          <div className="p-4 w-96">
            <h2 className="text-center mb-4">New Applicant Information</h2>
            <form onSubmit={handleSubmit}>
              <h4 className="mt-4 mb-4">Personal Information</h4>
              <div className="border p-3">
                {" "}
                <div className="row">
                  <Box
                    component="form"
                    // sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 1,
                    }}
                    noValidate
                    autoComplete="off">
                    {/* <div className="col-md-6 mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div> */}
                    <TextField
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                      className="col-md-4 mb-4"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      id="outlined-basic"
                      label="Surname"
                      variant="outlined"
                      className="col-md-4 mb-4"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      className="col-md-4 mb-4"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Box>
                </div>
                <div className="row">
                  <Box
                    component="form"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 1,
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Other Name"
                      variant="outlined"
                      className="col-md-4 mb-4"
                      name="otherName"
                      value={formData.otherName}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      id="outlined-basic"
                      label="Maiden Name"
                      variant="outlined"
                      className="col-md-4 mb-4"
                      name="maidenName"
                      value={formData.maidenName}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      id="outlined-basic"
                      label="Previous Name"
                      variant="outlined"
                      className="col-md-4 mb-3"
                      name="previousName"
                      value={formData.previousName}
                      onChange={handleChange}
                      required
                    />
                  </Box>
                </div>
                {/* ----------------------------------- */}
                <div className="row">
                  <Box
                    component="form"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 1,
                    }}
                    noValidate
                    autoComplete="off">
                    {/* <TextField
                    id="outlined-basic"
                    label="Gender"
                    variant="outlined"
                    className="col-md-4 mb-4"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  /> */}
                    <TextField
                      id="outlined-basic"
                      select
                      label="Gender"
                      defaultValue="None"
                      className="col-md-4 mb-4">
                      {gender.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    {/* <TextField
                    id="outlined-basic"
                    label="City of Birth"
                    variant="outlined"
                    className="col-md-4 mb-4"
                    name="cityOfBirth"
                    value={formData.cityOfBirth}
                    onChange={handleChange}
                    required
                  /> */}
                    <TextField
                      id="outlined-basic"
                      label="Date of Birth"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      className="col-md-4 mb-4"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      id="outlined-basic"
                      label="Country of Birth"
                      variant="outlined"
                      className="col-md-4 mb-4"
                      name="countryOfBirth"
                      value={formData.countryOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </Box>
                </div>
                <div className="row">
                  <Box
                    component="form"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 1,
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="City of Birth"
                      variant="outlined"
                      className="col-md-4 mb-4"
                      name="cityOfBirth"
                      value={formData.cityOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </Box>
                </div>
              </div>

              <div className="border p-3 mt-4">
                
              </div>

              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Information Form</h2>

                <Box
                  component="form"
                  sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                  noValidate
                  autoComplete="off">
                  <div>
                    <TextField
                      id="outlined-select-nationality"
                      select
                      label="Select Nationality"
                      defaultValue="GH">
                      {nationalities.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </Box>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <TextField
                    label="With normal TextField"
                    id="filled-start-adornment"
                    sx={{ m: 1, width: "25ch" }}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">kg</InputAdornment>
                        ),
                      },
                    }}
                    variant="filled"
                  />
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                    <FilledInput
                      id="filled-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">kg</InputAdornment>
                      }
                      aria-describedby="filled-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                    <FormHelperText id="filled-weight-helper-text">
                      Weight
                    </FormHelperText>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">
                      Password
                    </InputLabel>
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">
                      Amount
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Eye Colour
                  </label>
                  <Input type="text" placeholder="Enter eye colour" />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Hair Colour
                  </label>
                  <Input type="text" placeholder="Enter hair colour" />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Visible Peculiarities
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter visible peculiarities"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Nationality
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ghana">Ghana</SelectItem>
                      <SelectItem value="nigeria">Nigeria</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      {/* Add more countries as needed */}
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Dual Citizenship
                  </label>
                  <Select
                    value={formData.dualCitizenship}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dualCitizenship: e.target.value,
                      })
                    }>
                    <SelectTrigger>
                      <SelectValue placeholder="Do you have dual citizenship?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {dualCitizenship && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      Secondary Nationality
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select secondary nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ghana">Ghana</SelectItem>
                        <SelectItem value="nigeria">Nigeria</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        {/* Add more countries as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Marital Status
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select marital status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Profession
                  </label>
                  <Input type="text" placeholder="Enter current profession" />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Previous Profession
                  </label>
                  <Input type="text" placeholder="Enter previous profession" />
                </div>
              </div>

              <h4 className="mt-4">Contact Information</h4>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <h4 className="mt-4">Guarantors</h4>
              {formData.guarantors.map((guarantor, index) => (
                <div key={index} className="border p-3 mb-3">
                  <h5>Guarantor {index + 1}</h5>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={guarantor.fullName}
                      onChange={(e) => handleGuarantorChange(index, e)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Occupation</label>
                    <input
                      type="text"
                      className="form-control"
                      name="occupation"
                      value={guarantor.occupation}
                      onChange={(e) => handleGuarantorChange(index, e)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={guarantor.phone}
                      onChange={(e) => handleGuarantorChange(index, e)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={guarantor.email}
                      onChange={(e) => handleGuarantorChange(index, e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={guarantor.address}
                      onChange={(e) => handleGuarantorChange(index, e)}
                      required
                    />
                  </div>
                </div>
              ))}

              <button type="submit" className="btn btn-primary w-100 mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerInfoForm;
