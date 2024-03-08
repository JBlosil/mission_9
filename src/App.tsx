import React from 'react';
import './App.css';
import jsonData from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const teams = jsonData.teams;

function Welcome() {
  return (
    <div>
      <h1>Welcome to NCAA March Madness!</h1>
      <h2>Listed below are all the schools in college basketball</h2>
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <img />
        <h2>School: {oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>Location: {oneTeam.city}, {oneTeam.state}</h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teams.map((team) => (
        <Team key={team.school} {...team} /> // Add key prop for unique identification
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
