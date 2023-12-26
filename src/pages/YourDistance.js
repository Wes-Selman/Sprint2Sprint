import React from "react";
import { connect } from "react-redux";

const YourDistance = ({ user, returnTokens }) => {
    return (
        <div>
            <h1>Hi, {returnTokens.athlete.firstname}!</h1>
            <h2>{user.data.all_run_totals.distance}</h2>
            <h2>{user.data.all_ride_totals.distance}</h2>
            <h2>{user.data.all_swim_totals.distance}</h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        returnTokens: state.returnTokens,
    };
};

export default connect(mapStateToProps)(YourDistance);

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClubActivities = () => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);
  const clubId = 1200758; // Club ID

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(`https://www.strava.com/api/v3/clubs/${clubId}/activities`, {
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

  // ... use the activities data to render your component

  return (
    // ... your component's JSX
  );
};
