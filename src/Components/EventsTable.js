import React, { useState, useEffect } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash ,faPlus} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const TABLE_HEAD = [
  "Title",
  "Description",
  "Year",
  "Manage"
];

export function EventTable({deletedEvent}) {
  const [Events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data from the endpoint
    fetch('https://nedmob1.neduet.edu.pk:8080/event')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Sort Events by year
        const sortedEvents = data.sort((a, b) => a.year - b.year);
        // Set the fetched data to the state
        setEvents(sortedEvents);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const truncateDescription = (description) => {
    if (description.length > 30) {
      return description.substring(0, 30) + "...";
    }
    return description;
  };

  const deleteEvent=async(id)=>{
    const req = await fetch(`https://nedmob1.neduet.edu.pk:8080/delete-event/${id}`,{
      method:"DELETE"
    })

    if(req.ok){
      const newArray = Events.filter((event, index) => event._id !== id);
      setEvents(newArray); // Updates the state with the new array
    }
    toast.success('hello')
    deletedEvent()
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
          {Events.map((Event) => (
            <tr key={Event._id}>
              <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {Event.title}
                </Typography>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {truncateDescription(Event.description)}
                </Typography>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {Event.year}
                </Typography>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                <Link style={{backgroundColor:"rgb(245 158 11)",marginRight: "0.5rem",borderRadius:"2px"}} className='text-gray-900 p-3' to={`/update/Event/${Event._id}`}>  <FontAwesomeIcon  icon={faPencil} /></Link>
                <span onClick={()=>deleteEvent(Event._id)} style={{marginRight: "0.5rem",borderRadius:"2px"}} className='text-white bg-red-700 p-3' > <FontAwesomeIcon   icon={faTrash} /></span>

                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}



