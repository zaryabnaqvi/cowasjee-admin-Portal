import React, { useState, useEffect } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const TABLE_HEAD = [
    "Title",
    "Description",
    "Issue Date",
    "Document",
    "Manage"
];

export function NotificationTable() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch data from the endpoint
        fetch('http://127.0.0.1:8080/notifications')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Sort notifications by issue date
                const sortedNotifications = data.sort((a, b) => {
                    const dateA = new Date(a.issueDate.year, getMonthIndex(a.issueDate.month), a.issueDate.day);
                    const dateB = new Date(b.issueDate.year, getMonthIndex(b.issueDate.month), b.issueDate.day);
                    return dateB - dateA;
                });
                // Set the fetched data to the state
                setNotifications(sortedNotifications);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const getMonthIndex = (month) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months.indexOf(month);
    };

    const truncateDescription = (description) => {
        if (description.length > 30) {
            return description.substring(0, 30) + "...";
        }
        return description;
    };

    const handleDelete = async(id)=>{
        
    }
    return (
        <Card className="mt-5 w-4/5 rounded-none overflow-x-scroll mx-auto">
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
                    {notifications.map((notification) => (
                        <tr key={notification._id}>
                            <td className="p-4 border-b border-blue-gray-50">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {truncateDescription(notification.title)}
                                </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {truncateDescription(notification.description)}
                                </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {`${notification.issueDate.month} ${notification.issueDate.day}, ${notification.issueDate.year}`}
                                </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <a
                                    href={notification.uploadedDocument}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-900 hover:text-black transition-transform"
                                    style={{ textDecoration: "none" }}
                                >
                                    View Document
                                </a>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                  <Link style={{backgroundColor:"rgb(245 158 11)",marginRight: "0.5rem",borderRadius:"2px"}} className='text-gray-900 p-3' to={`/update/Notification/${notification._id}`}>  <FontAwesomeIcon  icon={faPencil} /></Link>
                                  <span style={{marginRight: "0.5rem",borderRadius:"2px"}} className='text-white bg-red-700 p-3' > <FontAwesomeIcon   icon={faTrash} /></span>
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
