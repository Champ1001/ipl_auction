/**
 * Default players added to every new room.
 * Points represent fantasy value; basePrice in lakhs.
 */
const DEFAULT_PLAYERS = [
  { name: 'Virat Kohli',    role: 'Batsman',        country: 'India',       ipl_team: 'RCB',  basePrice: 200, points: 250 },
  { name: 'Rohit Sharma',   role: 'Batsman',        country: 'India',       ipl_team: 'MI',   basePrice: 175, points: 230 },
  { name: 'MS Dhoni',       role: 'Wicket-Keeper',  country: 'India',       ipl_team: 'CSK',  basePrice: 150, points: 180 },
  { name: 'Hardik Pandya',  role: 'All-Rounder',    country: 'India',       ipl_team: 'MI',   basePrice: 150, points: 200 },
  { name: 'Jasprit Bumrah', role: 'Bowler',         country: 'India',       ipl_team: 'MI',   basePrice: 150, points: 220 },
  { name: 'KL Rahul',       role: 'Wicket-Keeper',  country: 'India',       ipl_team: 'LSG',  basePrice: 150, points: 210 },
  { name: 'Shubman Gill',   role: 'Batsman',        country: 'India',       ipl_team: 'GT',   basePrice: 125, points: 195 },
  { name: 'Rishabh Pant',   role: 'Wicket-Keeper',  country: 'India',       ipl_team: 'DC',   basePrice: 125, points: 205 },
  { name: 'Ravindra Jadeja',role: 'All-Rounder',    country: 'India',       ipl_team: 'CSK',  basePrice: 125, points: 190 },
  { name: 'Pat Cummins',    role: 'Bowler',         country: 'Australia',   ipl_team: 'SRH',  basePrice: 200, points: 215 },
  { name: 'Jos Buttler',    role: 'Wicket-Keeper',  country: 'England',     ipl_team: 'RR',   basePrice: 175, points: 225 },
  { name: 'David Warner',   role: 'Batsman',        country: 'Australia',   ipl_team: 'DC',   basePrice: 150, points: 200 },
  { name: 'Suryakumar Yadav', role: 'Batsman',      country: 'India',       ipl_team: 'MI',   basePrice: 150, points: 215 },
  { name: 'Mohammed Siraj', role: 'Bowler',         country: 'India',       ipl_team: 'RCB',  basePrice: 100, points: 170 },
  { name: 'Yuzvendra Chahal', role: 'Bowler',       country: 'India',       ipl_team: 'RR',   basePrice: 100, points: 175 },
  { name: 'Glenn Maxwell',  role: 'All-Rounder',    country: 'Australia',   ipl_team: 'RCB',  basePrice: 150, points: 205 },
  { name: 'Faf du Plessis', role: 'Batsman',        country: 'South Africa',ipl_team: 'RCB',  basePrice: 125, points: 185 },
  { name: 'Trent Boult',    role: 'Bowler',         country: 'New Zealand', ipl_team: 'MI',   basePrice: 100, points: 180 },
  { name: 'Sanju Samson',   role: 'Wicket-Keeper',  country: 'India',       ipl_team: 'RR',   basePrice: 125, points: 195 },
  { name: 'Ishan Kishan',   role: 'Wicket-Keeper',  country: 'India',       ipl_team: 'MI',   basePrice: 100, points: 185 },
];

module.exports = DEFAULT_PLAYERS;
