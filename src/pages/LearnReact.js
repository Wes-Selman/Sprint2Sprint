function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
    </div>
  )
}

// here is the code previously used for the distance page

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setUser } from '../actions';

const ClubActivities = () => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);
  const clubId = 1200758; // Replace with your actual club ID
  const accessToken = setUser.accessToken; // Replace with your Strava access token

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(`https://www.strava.com/api/v3/clubs/1200758/activities`, {
          headers: { Authorization: `Bearer ${accessToken}` },
          params: { // Optional query parameters
            after: '2023-12-20', // Filter activities after this date
            before: '2023-12-26', // Filter activities before this date
          },
        });

        setActivities(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchActivities();
  }, []);
  const ClubActivities = () => {
    const [activities, setActivities] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Add loading state
  
    return (
      <div>
        {isLoading && <p>Loading activities...</p>}
        {error && <p>Error fetching activities: {error.message}</p>}
        {!error && activities.length > 0 && (
          <ul>
            {activities.map((activity) => (
              <li key={activity.id}>
                {/* Render activity details here */}
                <h3>{activity.name}</h3>
                <p>Type: {activity.type}</p>
                <p>Distance: {activity.distance} km</p>
                <p>Date: {new Date(activity.start_date_local).toLocaleDateString()}</p>
                {/* ...more details as needed */}
              </li>
            ))}
          </ul>
        )}
        {!error && activities.length === 0 && <p>No activities found.</p>}
      </div>
    );
  };
  
  export default ClubActivities;

  // ... use the activities data to render your component
}