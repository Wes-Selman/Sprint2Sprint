import React from "react";

const { REACT_APP_CLIENT_ID } = process.env;
const redirectUrl = "https://master.d3kcfxj6ue7uwb.amplifyapp.com/redirect"

const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read`;
};

const Home = () => {
    return (
        <div className="homepage">
            <header className="home-header">
                <h1>Home</h1>
                <p>Join Product Solutions as we embark on bi-weekly active challenges!</p>
                <button onClick={handleLogin}>Connect with Strava</button>
            </header>

            <main className="home-content">
                <div className="hero-section">
                    <img src="path/to/runner-group.jpg" alt="group of people running together" className="hero-image" />
                </div>
                <section className="how-it-works-section">
          <h2>How It Works</h2>
          <ol>
            <li>Sign up with Strava and connect your fitness tracker.</li>
            <li>Track your walks and runs throughout the challenge period.</li>
            <li>Each challenge may be a little different! Earn points for steps, miles, or even active minutes.</li>
            <li>Climb the leaderboard and compete for the greatest prize of all time - public affirmation!</li>
          </ol>
        </section>
            </main>
        </div>
    );
};

export default Home;