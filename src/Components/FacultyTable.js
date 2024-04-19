import React, { useState, useEffect } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TABLE_HEAD = [
  "Name",
  "Description",
  "Image",
  "Manage"
];

export function FacultyTable({ deletedFaculty }) {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    // Fetch data from the endpoint
    fetch('http://127.0.0.1:8080/faculty')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Set the fetched data to the state
        setFaculties(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const deleteFaculty = async (id) => {
    // const req = await fetch(`http://127.0.0.1:8080/delete-faculty/${id}`, {
    //   method: "DELETE"
    // })

    // if (req.ok) {
    //   const newArray = faculties.filter((faculty, index) => faculty._id !== id);
    //   setFaculties(newArray); // Updates the state with the new array
    // }
    toast.success('Faculty deleted successfully');
    deletedFaculty();
  }

  return (
    <Card className="mt-5 h-full w-4/5 rounded-none overflow-x-scroll mx-auto">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty._id}>
              <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {faculty.name}
                </Typography>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {faculty.description}
                </Typography>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <img src={faculty.imageUrl} alt={faculty.name} className="w-20 h-20" />
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  <Link style={{ backgroundColor: "rgb(245 158 11)", marginRight: "0.5rem", borderRadius: "2px" }} className='text-gray-900 p-3' to={`/update/Faculty/${faculty._id}`}>
                    <FontAwesomeIcon icon={faPencil} />
                  </Link>
                  <span onClick={() => deleteFaculty(faculty._id)} style={{ marginRight: "0.5rem", borderRadius: "2px" }} className='text-white bg-red-700 p-3' >
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
