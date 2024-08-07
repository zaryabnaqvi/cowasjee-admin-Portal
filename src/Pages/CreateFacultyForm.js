import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@material-tailwind/react";

const CreateFacultyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
    teachingStaff: '', // New field for Teaching Staff
    designation: ''    // New field for Designation
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('imageUrl', formData.image);
    formDataToSend.append('teachingStaff', formData.teachingStaff); // Append new field
    formDataToSend.append('designation', formData.designation); // Append new field

    try {
      const response = await fetch('https://nedmob1.neduet.edu.pk:8080/new-faculty', {
        method: 'POST',
        headers:{
            accept:"multipart/form-data"
        },
        body: formDataToSend
      });

      if (response.ok) {
        toast.success('Faculty created successfully!');
        setFormData({
          name: '',
          description: '',
          image: null,
          teachingStaff: '', // Reset new field
          designation: ''    // Reset new field
        });
      } else {
        const data = await response.json();
        console.log(data);
        throw new Error('Failed to create faculty');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to create faculty');
    }
  };

  return (
    <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",borderRadius:"10px"}} className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Faculty</h2>
      <p className="mt-2 text-base text-gray-600">
              Note:the things you post their will display to main cowasjee website
            </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter faculty name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder="Enter faculty description"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">CV</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Teaching Staff</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="teachingYes"
              name="teachingStaff"
              value="yes"
              checked={formData.teachingStaff === 'yes'}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <label htmlFor="teachingYes" className="mr-4">Yes</label>
            <input
              type="radio"
              id="teachingNo"
              name="teachingStaff"
              value="no"
              checked={formData.teachingStaff === 'no'}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <label htmlFor="teachingNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="designation" className="block text-gray-700 font-bold mb-2">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter designation"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
          fullWidth
            type="submit"
            variant='gradient'
            className=" text-white font-bold rounded focus:outline-none focus:shadow-outline"
          >
            Create Faculty
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateFacultyForm;
