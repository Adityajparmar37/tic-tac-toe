import React from 'react';
import moment from 'moment';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Event = ({ events, handleSelected, onPageChange, page }) => {
    //   const formatDate = (dateString) => {
    //     return moment(dateString).format('MMM Do, YYYY'); 
    //   };

    //   const userLogin = useSelector((state) => state.userLogin);
    //   const userInfo = userLogin.userInfo;

    //   const navigate = useNavigate();

    //   const handleUpdateButton = (eventId) => {
    //     navigate(/updateEvent/${eventId});
    //   }

    //   const handleDeleteButton = (eventId) => {
    //     const config = {
    //       headers: {
    //         Authorization: Bearer ${userInfo.token},
    //       },
    //     };

    //     axios.delete(/api/event/delete-event/${eventId}, config)
    //       .then((response) => {
    //         console.log('Successful deletion:', response.data);
    //       })
    //       .catch((error) => {
    //         console.error('Error deleting event:', error);
    //       });
}

return (
    <>
        {events.map((event) => (
            <div key={event._id} className="bg-white shadow-md p-4 rounded-md mb-4">
                <div className="mb-2">
                    <h1 className="text-xl font-bold">{event.title}</h1>
                    <button
                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
                        onClick={() => handleSelected(event)}
                    >
                        View Details
                    </button>
                </div>
                <div className="mb-2">
                    <span className="text-gray-600">Category: {event.category}</span>
                    <span className="text-gray-600 ml-2">Location: {event.location}</span>
                </div>
                <div className="mb-2">
                    <span className="text-gray-600">Organizer: {event.organizer.name}</span>
                    <span className="text-gray-600 ml-2">Date: {event.days && event.days[0] && formatDate(event.days[0].date)}</span>
                </div>
                <div className="flex items-center">
                    <button
                        className="text-lg"
                    // onClick={() => handleUpdateButton(event._id)}
                    >
                        <CiEdit className="mr-2" />
                    </button>
                    <button
                        className="text-lg ml-2"
                    // onClick={() => handleDeleteButton(event._id)}
                    >
                        <MdDelete className="mr-2" />
                    </button>
                </div>
            </div>
        ))}

        <div className="text-center">
            <p className="mb-2">Showing Page {page}</p>
            <div>
                <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 text-sm"
                // onClick={() => onPageChange('prev')}
                >
                    Previous
                </button>
                <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
                // onClick={() => onPageChange('next')}
                >
                    Next
                </button>
            </div>
        </div>
    </>
);

export default Event;