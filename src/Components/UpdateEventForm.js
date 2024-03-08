import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Navbar,
  Button,
  Input,
  Typography,
  Card,
  CardBody,
  CardFooter,
  Select,
  Option,
} from "@material-tailwind/react";

const UpdateEventForm = ({id}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
year:'',
    imageUrl: null
  });

  const getFormData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/event/${id}`, {});
  
      if (response.ok) {
        // Show toast Event on success
        toast.success('Event retrieved successfully!');
        const data = await response.json();
        console.log(data)
        // Format the issueDate
        setFormData(data)

      } else {
        const data = await response.json();
        console.log(data);
        throw new Error('Failed to retrieve Event');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to retrieve Event');
    }
  };
  
 
  

  const handleChange = (e) => {
    const { name, value, files } = e.target;


    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    const formDataToSend = new FormData();
    formDataToSend.append("event_id",id)
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append("year",formData.year)


    if( formData.imageUrl){
        alert("image changed also")
    formDataToSend.append('imageUrl', formData.imageUrl);
    }
    try {
      const response = await fetch('http://127.0.0.1:8080/update-event', {
        method: 'PATCH',
        headers: {
          accept: "multipart/form-data"
        },
        body: formDataToSend
      });

      if (response.ok) {
        // Show toast Event on success
        toast.success('Event Updated successfully!');
        // Reset form after successful submission if needed
        
      } else {
        const data = await response.json()
        console.log(data)
        throw new Error('Failed to update Event');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to post Event');
    }
  };
let flag=0
  useEffect(()=>{
    if(flag===0){
    
    getFormData()
    flag=1
    }
  },[])

  return (
    <div className="">
      <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-3">
          <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",borderRadius:"10px"}} className="xl:mx-auto shadow-lg p-5 xl:w-full xl:max-w-lg 2xl:max-w-md">
            <div className="mb-2"></div>
            <h2 className="text-2xl font-bold leading-tight">
              Update Posted Event
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Note: Events you update will be displayed on the main Cowasjee website.
            </p>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Title"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset--5 disabled:cursor-not-allowed disabled:opacity-50"
                      name="title"
                      value={formData.title}
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
                    Year
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Year"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset--5 disabled:cursor-not-allowed disabled:opacity-50"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                    />
                  </div>
                  
                </div>
                <div class="grid w-full max-w-xs items-center gap-1.5">
                  <label class="text-base font-medium text-gray-900">Image</label>
                  <input
                    type="file"
                    name="imageUrl"
                    onChange={handleChange}
                    className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                  />
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
      <ToastContainer /> {/* Toast container for displaying Events */}
    </div>
  );
};

export default UpdateEventForm;
