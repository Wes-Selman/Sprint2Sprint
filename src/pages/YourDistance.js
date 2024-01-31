import React from "react";
import { connect } from "react-redux";

const { REACT_APP_CLIENT_ID } = process.env;
const redirectUrl = "https://master.d3kcfxj6ue7uwb.amplifyapp.com/redirect"

const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read`;
};

const YourDistance = ({ user, returnTokens }) => {
    return (
      <div className="athletesummary">
      <header className="athletesummary-header">
          <p></p>
      </header>
      <main className="athlete-content">
          <div className="hero-section">
          </div>
          <section className="distance-summary">
    <h2>Hi, {returnTokens.athlete.firstname}!</h2>
    <ol>
      <li>You've ran {user.data.all_run_totals.distance} miles!</li>
      <li>You've biked {user.data.all_ride_totals.distance} miles!</li>
      <li>You've swam {user.data.all_swim_totals.distance} miles!</li>
      <button onClick={handleLogin}>Club Leaderboard</button>
    </ol>
  </section>
      </main>
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