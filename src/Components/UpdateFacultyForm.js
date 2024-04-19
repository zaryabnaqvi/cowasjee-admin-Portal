import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  Input,
  Card,
  CardBody,
  Select,
  Option,
} from "@material-tailwind/react";
import { useParams } from 'react-router-dom'; // Assuming you are using React Router for routing

const UpdateFacultyForm = () => {
  const { id } = useParams(); // Get the ID from the route parameter

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: null
  });

  const getFormData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/faculty/${id}`, {});

      if (response.ok) {
        toast.success('Faculty retrieved successfully!');
        const data = await response.json();
        setFormData(data);
      } else {
        const data = await response.json();
        throw new Error('Failed to retrieve faculty');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to retrieve faculty');
    }
  };

  useEffect(() => {
    getFormData();
  }, [id]); // Fetch data whenever the ID changes

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("faculty_id", id);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);

    if (formData.imageUrl) {
      formDataToSend.append('imageUrl', formData.imageUrl);
    }

    try {
      const response = await fetch('http://127.0.0.1:8080/update-faculty', {
        method: 'PATCH',
        body: formDataToSend
      });

      if (response.ok) {
        toast.success('Faculty updated successfully!');
      } else {
        const data = await response.json();
        throw new Error('Failed to update faculty');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to update faculty');
    }
  };

  return (
    <div className="">
      <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-3">
          <div className="xl:mx-auto shadow-lg p-5 xl:w-full xl:max-w-lg 2xl:max-w-md">
            <div className="mb-2"></div>
            <h2 className="text-2xl font-bold leading-tight">
              Update Faculty Information
            </h2>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Name"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset--5 disabled:cursor-not-allowed disabled:opacity-50"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      placeholder="Description"
                      className="flex h-20 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset--5 disabled:cursor-not-allowed disabled:opacity-50"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Image
                  </label>
                  <div className="mt-2">
                    <input
                      type="file"
                      name="imageUrl"
                      onChange={handleChange}
                      className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                    />
                  </div>
                </div>
                <div>
                  <Button
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    type="submit"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default UpdateFacultyForm;
