import React, { useState, useEffect } from 'react';
import { setUser } from '../actions';

const ClubMiles = ({ clubId }) => {
  const [totalMiles, setTotalMiles] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentWeekDates = () => {
    const now = new Date();
    const day = now.getDay();
    const sunday = new Date(now.setDate(now.getDate() - day));
    const saturday = new Date(sunday.setDate(sunday.getDate() + 6));
    return { start: sunday, end: saturday };
  };

  useEffect(() => {
    const { start, end } = getCurrentWeekDates();
    setIsLoading(true);
    fetch(`https://www.strava.com/api/v3/clubs/${clubId}/activities?after=${start.toISOString()}&before=${end.toISOString()}`)
      .then(response => response.json())
      .then(data => {
        const miles = data.activities.reduce((acc, activity) => acc + activity.distance, 0);
        setTotalMiles(miles);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (isLoading) {
    return <p>Loading club mileage...</p>;
  }

  return (
    <div>
      <h1>Club Total Miles this Week: {totalMiles}</h1>
      {/* MemberList component and other content as needed */}
    </div>
  );
};

export default ClubMiles;