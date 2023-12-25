import React from "react";

const { REACT_APP_CLIENT_ID } = process.env;
const redirectUrl = "https://master.d3kcfxj6ue7uwb.amplifyapp.com/redirect"

const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read`;
};

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogin}>Connect with Strava</button>
        </div>
    );
};

export default Home;