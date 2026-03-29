// /**
//  * Default players added to every new room.
//  * Points represent fantasy value; basePrice in lakhs.
//  */
// const DEFAULT_PLAYERS = [
//   {
//     "name": "Anshul Kamboj",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 30,
//     "points": 39,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Gurjapneet Singh",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 30,
//     "points": 20,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Jamie Overton",
//     "role": "All-Rounder",
//     "country": "England",
//     "ipl_team": "CSK",
//     "basePrice": 100,
//     "points": 26,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "MS Dhoni",
//     "role": "Wicket-Keeper",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 100,
//     "points": 57,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Mukesh Choudhary",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 30,
//     "points": 20,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Noor Ahmad",
//     "role": "Bowler",
//     "country": "Afghanistan",
//     "ipl_team": "CSK",
//     "basePrice": 100,
//     "points": 93,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Ramakrishna Ghosh",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 30,
//     "points": 28,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Sanju Samson",
//     "role": "Wicket-Keeper",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 200,
//     "points": 224,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Ruturaj Gaikwad",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 200,
//     "points": 266,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Shivam Dube",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 200,
//     "points": 139,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Shreyas Gopal",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 30,
//     "points": 25,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Syed Khaleel Ahmed",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 100,
//     "points": 44,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Ayush Mhatre",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 30,
//     "points": 7,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Dewald Brevis",
//     "role": "Batsman",
//     "country": "South Africa",
//     "ipl_team": "CSK",
//     "basePrice": 200,
//     "points": 28,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Urvil Patel",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 30,
//     "points": 29,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Abhishek Porel",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 100,
//     "points": 51,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Ajay Mandal",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 30,
//     "points": 24,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Ashutosh Sharma",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 100,
//     "points": 29,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Axar Patel",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 200,
//     "points": 265,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Dushmantha Chameera",
//     "role": "Bowler",
//     "country": "Sri Lanka",
//     "ipl_team": "DC",
//     "basePrice": 75,
//     "points": 35,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Karun Nair",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 50,
//     "points": 11,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "KL Rahul",
//     "role": "Wicket-Keeper",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 1400,
//     "points": 209,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Kuldeep Yadav",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 1325,
//     "points": 154,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Madhav Tiwari",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 40,
//     "points": 34,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Mitchell Starc",
//     "role": "Bowler",
//     "country": "Australia",
//     "ipl_team": "DC",
//     "basePrice": 1175,
//     "points": 194,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Mukesh Kumar",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 800,
//     "points": 115,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Nitish Rana",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 420,
//     "points": 72,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Sameer Rizvi",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 95,
//     "points": 5,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "T. Natarajan",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 1075,
//     "points": 111,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Tripurana Vijay",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 30,
//     "points": 25,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Tristan Stubbs",
//     "role": "Wicket-Keeper",
//     "country": "South Africa",
//     "ipl_team": "DC",
//     "basePrice": 1000,
//     "points": 182,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Vipraj Nigam",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 30,
//     "points": 29,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Rashid Khan",
//     "role": "Bowler",
//     "country": "Afghanistan",
//     "ipl_team": "GT",
//     "basePrice": 1800,
//     "points": 221,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Shubman Gill",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 1650,
//     "points": 250,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Jos Buttler",
//     "role": "Wicket-Keeper",
//     "country": "England",
//     "ipl_team": "GT",
//     "basePrice": 1575,
//     "points": 203,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Mohammed Siraj",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 1225,
//     "points": 146,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Kagiso Rabada",
//     "role": "Bowler",
//     "country": "South Africa",
//     "ipl_team": "GT",
//     "basePrice": 1075,
//     "points": 153,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Prasidh Krishna",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 950,
//     "points": 116,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Sai Sudharsan",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 850,
//     "points": 153,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Rahul Tewatia",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 400,
//     "points": 54,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Shahrukh Khan",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 400,
//     "points": 67,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Washington Sundar",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 320,
//     "points": 33,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Glenn Phillips",
//     "role": "All-Rounder",
//     "country": "New Zealand",
//     "ipl_team": "GT",
//     "basePrice": 200,
//     "points": 30,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Nishant Sindhu",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 30,
//     "points": 27,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Kumar Kushagra",
//     "role": "Wicket-Keeper",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 65,
//     "points": 20,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Mohd. Arshad Khan",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 130,
//     "points": 33,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Ishant Sharma",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 75,
//     "points": 23,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Jayant Yadav",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 75,
//     "points": 12,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Anuj Rawat",
//     "role": "Wicket-Keeper",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 30,
//     "points": 8,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Manav Suthar",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 30,
//     "points": 18,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Gurnoor Singh Brar",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 130,
//     "points": 30,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Sai Kishore",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "GT",
//     "basePrice": 200,
//     "points": 34,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Rinku Singh",
//     "role": "Wicket-Keeper",
//     "country": "India",
//     "ipl_team": "KKR",
//     "basePrice": 1300,
//     "points": 264,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Sunil Narine",
//     "role": "Bowler",
//     "country": "West Indies",
//     "ipl_team": "KKR",
//     "basePrice": 1200,
//     "points": 216,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Varun Chakravarthy",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "KKR",
//     "basePrice": 1200,
//     "points": 189,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Manish Pandey",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "KKR",
//     "basePrice": 75,
//     "points": 15,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Angkrish Raghuvanshi",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "KKR",
//     "basePrice": 300,
//     "points": 36,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Vaibhav Arora",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "KKR",
//     "basePrice": 180,
//     "points": 18,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Ajinkya Rahane",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "KKR",
//     "basePrice": 150,
//     "points": 14,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Rovman Powell",
//     "role": "All-Rounder",
//     "country": "West Indies",
//     "ipl_team": "KKR",
//     "basePrice": 150,
//     "points": 11,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Umran Malik",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "KKR",
//     "basePrice": 75,
//     "points": 22,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Ramandeep Singh",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "KKR",
//     "basePrice": 400,
//     "points": 38,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Anukul Roy",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "KKR",
//     "basePrice": 40,
//     "points": 21,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Navdeep Saini",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "KKR",
//     "basePrice": 75,
//     "points": 41,
//     "isForeign": false,
//     "status": "replacement"
//   },
//   {
//     "name": "Saurabh Dubey",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "KKR",
//     "basePrice": 30,
//     "points": 17,
//     "isForeign": false,
//     "status": "replacement"
//   },
//   {
//     "name": "Rishabh Pant",
//     "role": "Wicket-Keeper",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 2700,
//     "points": 322,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Nicholas Pooran",
//     "role": "Wicket-Keeper",
//     "country": "West Indies",
//     "ipl_team": "LSG",
//     "basePrice": 2100,
//     "points": 280,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Mayank Yadav",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 1100,
//     "points": 180,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Mohammed Shami",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 1000,
//     "points": 166,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Avesh Khan",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 975,
//     "points": 105,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Akash Singh",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 30,
//     "points": 8,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Arjun Tendulkar",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 30,
//     "points": 12,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Arshin Kulkarni",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 30,
//     "points": 22,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Matthew Breetzke",
//     "role": "Wicket-Keeper",
//     "country": "South Africa",
//     "ipl_team": "LSG",
//     "basePrice": 75,
//     "points": 9,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Ayush Badoni",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 400,
//     "points": 57,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Digvesh Rathi",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 30,
//     "points": 9,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Himmat Singh",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 30,
//     "points": 27,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Manimaran Siddharth",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 75,
//     "points": 17,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Prince Yadav",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 30,
//     "points": 27,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Shahbaz Ahmed",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 240,
//     "points": 25,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Mitchell Marsh",
//     "role": "All-Rounder",
//     "country": "Australia",
//     "ipl_team": "LSG",
//     "basePrice": 340,
//     "points": 68,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Allah Ghazanfar",
//     "role": "Bowler",
//     "country": "Bangladesh",
//     "ipl_team": "MI",
//     "basePrice": 480,
//     "points": 65,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Ashwani Kumar",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 30,
//     "points": 7,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Corbin Bosch",
//     "role": "All-Rounder",
//     "country": "South Africa",
//     "ipl_team": "MI",
//     "basePrice": 200,
//     "points": 16,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Deepak Chahar",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 925,
//     "points": 73,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Hardik Pandya",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 1635,
//     "points": 180,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Jasprit Bumrah",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 1800,
//     "points": 279,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Mayank Markande",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 30,
//     "points": 10,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Mitchell Santner",
//     "role": "All-Rounder",
//     "country": "New Zealand",
//     "ipl_team": "MI",
//     "basePrice": 200,
//     "points": 30,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Naman Dhir",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 525,
//     "points": 59,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Raghu Sharma",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 30,
//     "points": 22,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Raj Angad Bawa",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 30,
//     "points": 16,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Robin Minz",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 65,
//     "points": 26,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Rohit Sharma",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 1630,
//     "points": 260,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Ryan Rickelton",
//     "role": "Batsman",
//     "country": "South Africa",
//     "ipl_team": "MI",
//     "basePrice": 100,
//     "points": 26,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Shardul Thakur",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 200,
//     "points": 23,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Sherfane Rutherford",
//     "role": "All-Rounder",
//     "country": "West Indies",
//     "ipl_team": "MI",
//     "basePrice": 260,
//     "points": 27,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Suryakumar Yadav",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 1635,
//     "points": 227,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Tilak Verma",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "MI",
//     "basePrice": 800,
//     "points": 100,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Trent Boult",
//     "role": "Bowler",
//     "country": "New Zealand",
//     "ipl_team": "MI",
//     "basePrice": 1250,
//     "points": 278,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Will Jacks",
//     "role": "All-Rounder",
//     "country": "England",
//     "ipl_team": "MI",
//     "basePrice": 525,
//     "points": 64,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Arshdeep Singh",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 1800,
//     "points": 180,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Azmatullah Omarzai",
//     "role": "Bowler",
//     "country": "Afghanistan",
//     "ipl_team": "PBKS",
//     "basePrice": 240,
//     "points": 27,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Harnoor Pannu",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 30,
//     "points": 12,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Harpreet Brar",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 150,
//     "points": 13,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Lockie Ferguson",
//     "role": "Bowler",
//     "country": "New Zealand",
//     "ipl_team": "PBKS",
//     "basePrice": 200,
//     "points": 58,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Marco Jansen",
//     "role": "Bowler",
//     "country": "South Africa",
//     "ipl_team": "PBKS",
//     "basePrice": 700,
//     "points": 94,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Marcus Stoinis",
//     "role": "All-Rounder",
//     "country": "Australia",
//     "ipl_team": "PBKS",
//     "basePrice": 1100,
//     "points": 160,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Mitch Owen",
//     "role": "Bowler",
//     "country": "New Zealand",
//     "ipl_team": "PBKS",
//     "basePrice": 300,
//     "points": 50,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Musheer Khan",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 30,
//     "points": 26,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Nehal Wadhera",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 420,
//     "points": 68,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Prabhsimran Singh",
//     "role": "Wicket-Keeper",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 400,
//     "points": 94,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Priyansh Arya",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 380,
//     "points": 60,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Pyla Avinash",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 30,
//     "points": 22,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Shashank Singh",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 550,
//     "points": 49,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Shreyas Iyer",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 2675,
//     "points": 291,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Suryansh Shedge",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 30,
//     "points": 19,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Vishnu Vinod",
//     "role": "Wicket-Keeper",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 95,
//     "points": 22,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Vyshak Vijaykumar",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 180,
//     "points": 19,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Xavier Bartlett",
//     "role": "Bowler",
//     "country": "Australia",
//     "ipl_team": "PBKS",
//     "basePrice": 80,
//     "points": 18,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Yash Thakur",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 160,
//     "points": 30,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Yuzvendra Chahal",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "PBKS",
//     "basePrice": 1800,
//     "points": 213,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Dhruv Jurel",
//     "role": "Wicket-Keeper",
//     "country": "India",
//     "ipl_team": "RR",
//     "basePrice": 1400,
//     "points": 203,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Donovan Ferreira",
//     "role": "All-Rounder",
//     "country": "South Africa",
//     "ipl_team": "RR",
//     "basePrice": 100,
//     "points": 5,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Jofra Archer",
//     "role": "Bowler",
//     "country": "England",
//     "ipl_team": "RR",
//     "basePrice": 1250,
//     "points": 181,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Kwena Maphaka",
//     "role": "Bowler",
//     "country": "South Africa",
//     "ipl_team": "RR",
//     "basePrice": 150,
//     "points": 12,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Lhuan-Dre Pretorious",
//     "role": "Bowler",
//     "country": "South Africa",
//     "ipl_team": "RR",
//     "basePrice": 30,
//     "points": 12,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Nandre Burger",
//     "role": "Bowler",
//     "country": "South Africa",
//     "ipl_team": "RR",
//     "basePrice": 350,
//     "points": 53,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Ravindra Jadeja",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "RR",
//     "basePrice": 1400,
//     "points": 266,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Riyan Parag",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "RR",
//     "basePrice": 1400,
//     "points": 233,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Sandeep Sharma",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "RR",
//     "basePrice": 400,
//     "points": 27,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Shimron Hetmyer",
//     "role": "All-Rounder",
//     "country": "West Indies",
//     "ipl_team": "RR",
//     "basePrice": 1100,
//     "points": 109,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Shubham Dubey",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "RR",
//     "basePrice": 80,
//     "points": 19,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Tushar Deshpande",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "RR",
//     "basePrice": 650,
//     "points": 68,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Vaibhav Suryavanshi",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "RR",
//     "basePrice": 110,
//     "points": 15,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Yudhvir Charak",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "RR",
//     "basePrice": 35,
//     "points": 11,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Dasun Shanaka",
//     "role": "All-Rounder",
//     "country": "Sri Lanka",
//     "ipl_team": "RR",
//     "basePrice": 200,
//     "points": 10,
//     "isForeign": true,
//     "status": "replacement"
//   },
//   {
//     "name": "Abhinandan Singh",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "RCB",
//     "basePrice": 1500,
//     "points": 84,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Bhuvneshwar Kumar",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "RCB",
//     "basePrice": 1200,
//     "points": 210,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Devdutt Padikkal",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "RCB",
//     "basePrice": 1500,
//     "points": 207,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Jacob Bethell",
//     "role": "All-Rounder",
//     "country": "England",
//     "ipl_team": "RCB",
//     "basePrice": 150,
//     "points": 29,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Jitesh Sharma",
//     "role": "Wicket-Keeper",
//     "country": "India",
//     "ipl_team": "RCB",
//     "basePrice": 400,
//     "points": 37,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Josh Hazlewood",
//     "role": "Bowler",
//     "country": "Australia",
//     "ipl_team": "RCB",
//     "basePrice": 1250,
//     "points": 208,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Krunal Pandya",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "RCB",
//     "basePrice": 400,
//     "points": 45,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Nuwan Thushara",
//     "role": "Bowler",
//     "country": "Sri Lanka",
//     "ipl_team": "RCB",
//     "basePrice": 200,
//     "points": 20,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Phil Salt",
//     "role": "Wicket-Keeper",
//     "country": "England",
//     "ipl_team": "RCB",
//     "basePrice": 400,
//     "points": 41,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Rajat Patidar",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "RCB",
//     "basePrice": 950,
//     "points": 82,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Rasikh Dar",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "RCB",
//     "basePrice": 30,
//     "points": 7,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Romario Shepherd",
//     "role": "All-Rounder",
//     "country": "West Indies",
//     "ipl_team": "RCB",
//     "basePrice": 800,
//     "points": 89,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Suyash Sharma",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "RCB",
//     "basePrice": 30,
//     "points": 13,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Swapnil Singh",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "RCB",
//     "basePrice": 30,
//     "points": 30,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Tim David",
//     "role": "All-Rounder",
//     "country": "Australia",
//     "ipl_team": "RCB",
//     "basePrice": 1200,
//     "points": 294,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Virat Kohli",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "RCB",
//     "basePrice": 1800,
//     "points": 270,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Yash Dayal",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "RCB",
//     "basePrice": 105,
//     "points": 18,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Abhishek Sharma",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "SRH",
//     "basePrice": 1500,
//     "points": 139,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Aniket Verma",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "SRH",
//     "basePrice": 350,
//     "points": 59,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Brydon Carse",
//     "role": "Bowler",
//     "country": "England",
//     "ipl_team": "SRH",
//     "basePrice": 150,
//     "points": 22,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Eshan Malinga",
//     "role": "Bowler",
//     "country": "Sri Lanka",
//     "ipl_team": "SRH",
//     "basePrice": 30,
//     "points": 29,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Harsh Dubey",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "SRH",
//     "basePrice": 250,
//     "points": 44,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Harshal Patel",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "SRH",
//     "basePrice": 800,
//     "points": 49,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Heinrich Klaasen",
//     "role": "Batsman",
//     "country": "South Africa",
//     "ipl_team": "SRH",
//     "basePrice": 550,
//     "points": 54,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Ishan Kishan",
//     "role": "Wicket-Keeper",
//     "country": "India",
//     "ipl_team": "SRH",
//     "basePrice": 1000,
//     "points": 185,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Jaydev Unadkat",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "SRH",
//     "basePrice": 30,
//     "points": 14,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Kamindu Mendis",
//     "role": "All-Rounder",
//     "country": "Sri Lanka",
//     "ipl_team": "SRH",
//     "basePrice": 130,
//     "points": 23,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Nitish Kumar Reddy",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "SRH",
//     "basePrice": 30,
//     "points": 25,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Pat Cummins",
//     "role": "Bowler",
//     "country": "Australia",
//     "ipl_team": "SRH",
//     "basePrice": 1250,
//     "points": 278,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Smaran Ravichandran",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "SRH",
//     "basePrice": 50,
//     "points": 17,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Travis Head",
//     "role": "All-Rounder",
//     "country": "Australia",
//     "ipl_team": "SRH",
//     "basePrice": 550,
//     "points": 105,
//     "isForeign": true,
//     "status": "retained"
//   },
//   {
//     "name": "Zeeshan Ansari",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "SRH",
//     "basePrice": 190,
//     "points": 27,
//     "isForeign": false,
//     "status": "retained"
//   },
//   {
//     "name": "Cameron Green",
//     "role": "All-Rounder",
//     "country": "Australia",
//     "ipl_team": "KKR",
//     "basePrice": 2520,
//     "points": 334,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Sarfaraz Khan",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 75,
//     "points": 33,
//     "isForeign": false,
//     "status": "auction"
//   },
//   {
//     "name": "David Miller",
//     "role": "Batsman",
//     "country": "South Africa",
//     "ipl_team": "DC",
//     "basePrice": 200,
//     "points": 21,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Prithvi Shaw",
//     "role": "Batsman",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 75,
//     "points": 26,
//     "isForeign": false,
//     "status": "auction"
//   },
//   {
//     "name": "Wanindu Hasaranga",
//     "role": "All-Rounder",
//     "country": "Sri Lanka",
//     "ipl_team": "LSG",
//     "basePrice": 200,
//     "points": 17,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Venkatesh Iyer",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "RCB",
//     "basePrice": 700,
//     "points": 101,
//     "isForeign": false,
//     "status": "auction"
//   },
//   {
//     "name": "Liam Livingstone",
//     "role": "All-Rounder",
//     "country": "England",
//     "ipl_team": "SRH",
//     "basePrice": 1300,
//     "points": 147,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Rachin Ravindra",
//     "role": "All-Rounder",
//     "country": "New Zealand",
//     "ipl_team": "KKR",
//     "basePrice": 200,
//     "points": 25,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Finn Allen",
//     "role": "Batsman",
//     "country": "New Zealand",
//     "ipl_team": "KKR",
//     "basePrice": 200,
//     "points": 28,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Quinton de Kock",
//     "role": "Wicket-Keeper",
//     "country": "South Africa",
//     "ipl_team": "MI",
//     "basePrice": 100,
//     "points": 5,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Ben Duckett",
//     "role": "Wicket-Keeper",
//     "country": "England",
//     "ipl_team": "DC",
//     "basePrice": 200,
//     "points": 12,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Akash Deep",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "KKR",
//     "basePrice": 100,
//     "points": 17,
//     "isForeign": false,
//     "status": "auction"
//   },
//   {
//     "name": "Jacob Duffy",
//     "role": "Bowler",
//     "country": "New Zealand",
//     "ipl_team": "RCB",
//     "basePrice": 200,
//     "points": 28,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Matt Henry",
//     "role": "Bowler",
//     "country": "New Zealand",
//     "ipl_team": "CSK",
//     "basePrice": 200,
//     "points": 27,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Shivam Mavi",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "SRH",
//     "basePrice": 75,
//     "points": 6,
//     "isForeign": false,
//     "status": "auction"
//   },
//   {
//     "name": "Anrich Nortje",
//     "role": "Bowler",
//     "country": "South Africa",
//     "ipl_team": "LSG",
//     "basePrice": 200,
//     "points": 44,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Matheesha Pathirana",
//     "role": "Bowler",
//     "country": "Sri Lanka",
//     "ipl_team": "KKR",
//     "basePrice": 1800,
//     "points": 272,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Ravi Bishnoi",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "RR",
//     "basePrice": 720,
//     "points": 152,
//     "isForeign": false,
//     "status": "auction"
//   },
//   {
//     "name": "Rahul Chahar",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 520,
//     "points": 58,
//     "isForeign": false,
//     "status": "auction"
//   },
//   {
//     "name": "Akeal Hosein",
//     "role": "Bowler",
//     "country": "West Indies",
//     "ipl_team": "CSK",
//     "basePrice": 200,
//     "points": 21,
//     "isForeign": true,
//     "status": "auction"
//   },
//   {
//     "name": "Auqib Nabi",
//     "role": "Bowler",
//     "country": "India",
//     "ipl_team": "DC",
//     "basePrice": 840,
//     "points": 153,
//     "isForeign": false,
//     "status": "auction"
//   },
//   {
//     "name": "Shivang Kumar",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "SRH",
//     "basePrice": 30,
//     "points": 30,
//     "isForeign": false,
//     "status": "auction"
//   },
//   {
//     "name": "Prashant Veer",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 1420,
//     "points": 233,
//     "isForeign": false,
//     "status": "auction"
//   },
//   {
//     "name": "Mukul Choudhary",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "LSG",
//     "basePrice": 260,
//     "points": 38,
//     "isForeign": false,
//     "status": "auction"
//   },
//   {
//     "name": "Kartik Sharma",
//     "role": "All-Rounder",
//     "country": "India",
//     "ipl_team": "CSK",
//     "basePrice": 1420,
//     "points": 163,
//     "isForeign": false,
//     "status": "auction"
//   }
// ];

// module.exports = DEFAULT_PLAYERS;
const DEFAULT_PLAYERS =[
  {
    "name": "Anshul Kamboj",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 30,
    "points": 145,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Gurjapneet Singh",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 30,
    "points": 45,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Jamie Overton",
    "role": "All-Rounder",
    "country": "England",
    "ipl_team": "CSK",
    "basePrice": 150,
    "points": 95,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "MS Dhoni",
    "role": "Wicket-Keeper",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 30,
    "points": 125,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Mukesh Choudhary",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 30,
    "points": 65,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Noor Ahmad",
    "role": "Bowler",
    "country": "Afghanistan",
    "ipl_team": "CSK",
    "basePrice": 200,
    "points": 180,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Ramakrishna Ghosh",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 30,
    "points": 25,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Ravindra Jadeja",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 200,
    "points": 290,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Ruturaj Gaikwad",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 200,
    "points": 285,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Shivam Dube",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 200,
    "points": 210,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Shreyas Gopal",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 30,
    "points": 40,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Syed Khaleel Ahmed",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 100,
    "points": 165,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Ayush Mhatre",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 30,
    "points": 35,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Dewald Brevis",
    "role": "Batsman",
    "country": "South Africa",
    "ipl_team": "CSK",
    "basePrice": 100,
    "points": 85,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Urvil Patel",
    "role": "Wicket-Keeper",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 30,
    "points": 45,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Abhishek Porel",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 100,
    "points": 175,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Ajay Mandal",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 30,
    "points": 30,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Ashutosh Sharma",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 100,
    "points": 150,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Axar Patel",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 200,
    "points": 255,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Dushmantha Chameera",
    "role": "Bowler",
    "country": "Sri Lanka",
    "ipl_team": "DC",
    "basePrice": 100,
    "points": 70,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Karun Nair",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 30,
    "points": 45,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "KL Rahul",
    "role": "Wicket-Keeper",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 200,
    "points": 265,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Kuldeep Yadav",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 200,
    "points": 230,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Madhav Tiwari",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 30,
    "points": 20,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Mitchell Starc",
    "role": "Bowler",
    "country": "Australia",
    "ipl_team": "DC",
    "basePrice": 200,
    "points": 215,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Mukesh Kumar",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 150,
    "points": 185,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Nitish Rana",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 150,
    "points": 145,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Sameer Rizvi",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 30,
    "points": 60,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "T. Natarajan",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 200,
    "points": 195,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Tripurana Vijay",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 30,
    "points": 25,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Tristan Stubbs",
    "role": "Wicket-Keeper",
    "country": "South Africa",
    "ipl_team": "DC",
    "basePrice": 200,
    "points": 255,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Vipraj Nigam",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 30,
    "points": 35,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Rashid Khan",
    "role": "Bowler",
    "country": "Afghanistan",
    "ipl_team": "GT",
    "basePrice": 200,
    "points": 275,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Shubman Gill",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 200,
    "points": 270,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Jos Buttler",
    "role": "Wicket-Keeper",
    "country": "England",
    "ipl_team": "GT",
    "basePrice": 200,
    "points": 260,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Mohammed Siraj",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 200,
    "points": 220,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Kagiso Rabada",
    "role": "Bowler",
    "country": "South Africa",
    "ipl_team": "GT",
    "basePrice": 200,
    "points": 225,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Prasidh Krishna",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 200,
    "points": 140,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Sai Sudharsan",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 200,
    "points": 235,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Rahul Tewatia",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 100,
    "points": 125,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Shahrukh Khan",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 100,
    "points": 145,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Washington Sundar",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 150,
    "points": 160,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Glenn Phillips",
    "role": "All-Rounder",
    "country": "New Zealand",
    "ipl_team": "GT",
    "basePrice": 200,
    "points": 110,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Nishant Sindhu",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 30,
    "points": 45,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Kumar Kushagra",
    "role": "Wicket-Keeper",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 30,
    "points": 35,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Mohd. Arshad Khan",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 30,
    "points": 65,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Ishant Sharma",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 75,
    "points": 85,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Jayant Yadav",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 30,
    "points": 55,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Anuj Rawat",
    "role": "Wicket-Keeper",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 30,
    "points": 75,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Manav Suthar",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 30,
    "points": 40,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Gurnoor Singh Brar",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 30,
    "points": 50,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Sai Kishore",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "GT",
    "basePrice": 100,
    "points": 140,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Rinku Singh",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "KKR",
    "basePrice": 200,
    "points": 210,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Sunil Narine",
    "role": "All-Rounder",
    "country": "West Indies",
    "ipl_team": "KKR",
    "basePrice": 200,
    "points": 340,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Varun Chakravarthy",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "KKR",
    "basePrice": 200,
    "points": 250,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Manish Pandey",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "KKR",
    "basePrice": 75,
    "points": 75,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Angkrish Raghuvanshi",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "KKR",
    "basePrice": 30,
    "points": 135,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Vaibhav Arora",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "KKR",
    "basePrice": 30,
    "points": 145,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Ajinkya Rahane",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "KKR",
    "basePrice": 150,
    "points": 105,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Rovman Powell",
    "role": "All-Rounder",
    "country": "West Indies",
    "ipl_team": "KKR",
    "basePrice": 150,
    "points": 120,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Umran Malik",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "KKR",
    "basePrice": 75,
    "points": 85,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Ramandeep Singh",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "KKR",
    "basePrice": 30,
    "points": 160,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Anukul Roy",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "KKR",
    "basePrice": 30,
    "points": 65,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Navdeep Saini",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "KKR",
    "basePrice": 75,
    "points": 75,
    "isForeign": false,
    "status": "replacement"
  },
  {
    "name": "Saurabh Dubey",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "KKR",
    "basePrice": 30,
    "points": 25,
    "isForeign": false,
    "status": "replacement"
  },
  {
    "name": "Rishabh Pant",
    "role": "Wicket-Keeper",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 200,
    "points": 320,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Nicholas Pooran",
    "role": "Wicket-Keeper",
    "country": "West Indies",
    "ipl_team": "LSG",
    "basePrice": 200,
    "points": 290,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Mayank Yadav",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 200,
    "points": 195,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Mohammed Shami",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 200,
    "points": 235,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Avesh Khan",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 200,
    "points": 175,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Akash Singh",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 30,
    "points": 45,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Arjun Tendulkar",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 30,
    "points": 35,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Arshin Kulkarni",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 30,
    "points": 45,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Matthew Breetzke",
    "role": "Wicket-Keeper",
    "country": "South Africa",
    "ipl_team": "LSG",
    "basePrice": 75,
    "points": 55,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Ayush Badoni",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 30,
    "points": 165,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Digvesh Rathi",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 30,
    "points": 25,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Himmat Singh",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 30,
    "points": 40,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Manimaran Siddharth",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 30,
    "points": 75,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Prince Yadav",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 30,
    "points": 25,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Shahbaz Ahmed",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 100,
    "points": 135,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Mitchell Marsh",
    "role": "All-Rounder",
    "country": "Australia",
    "ipl_team": "LSG",
    "basePrice": 200,
    "points": 155,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Allah Ghazanfar",
    "role": "Bowler",
    "country": "Afghanistan",
    "ipl_team": "MI",
    "basePrice": 30,
    "points": 115,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Ashwani Kumar",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 30,
    "points": 25,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Corbin Bosch",
    "role": "All-Rounder",
    "country": "South Africa",
    "ipl_team": "MI",
    "basePrice": 100,
    "points": 60,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Deepak Chahar",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 200,
    "points": 155,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Hardik Pandya",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 200,
    "points": 265,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Jasprit Bumrah",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 200,
    "points": 330,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Mayank Markande",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 30,
    "points": 85,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Mitchell Santner",
    "role": "All-Rounder",
    "country": "New Zealand",
    "ipl_team": "MI",
    "basePrice": 200,
    "points": 125,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Naman Dhir",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 30,
    "points": 135,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Raghu Sharma",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 30,
    "points": 25,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Raj Angad Bawa",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 30,
    "points": 40,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Robin Minz",
    "role": "Wicket-Keeper",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 30,
    "points": 50,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Rohit Sharma",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 200,
    "points": 280,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Ryan Rickelton",
    "role": "Wicket-Keeper",
    "country": "South Africa",
    "ipl_team": "MI",
    "basePrice": 100,
    "points": 85,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Shardul Thakur",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 200,
    "points": 125,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Sherfane Rutherford",
    "role": "Batsman",
    "country": "West Indies",
    "ipl_team": "MI",
    "basePrice": 150,
    "points": 110,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Suryakumar Yadav",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 200,
    "points": 310,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Tilak Verma",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "MI",
    "basePrice": 150,
    "points": 100,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Trent Boult",
    "role": "Bowler",
    "country": "New Zealand",
    "ipl_team": "MI",
    "basePrice": 200,
    "points": 278,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Will Jacks",
    "role": "All-Rounder",
    "country": "England",
    "ipl_team": "MI",
    "basePrice": 100,
    "points": 64,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Arshdeep Singh",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 150,
    "points": 180,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Azmatullah Omarzai",
    "role": "Bowler",
    "country": "Afghanistan",
    "ipl_team": "PBKS",
    "basePrice": 30,
    "points": 27,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Harnoor Pannu",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 30,
    "points": 12,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Harpreet Brar",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 30,
    "points": 13,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Lockie Ferguson",
    "role": "Bowler",
    "country": "New Zealand",
    "ipl_team": "PBKS",
    "basePrice": 100,
    "points": 58,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Marco Jansen",
    "role": "Bowler",
    "country": "South Africa",
    "ipl_team": "PBKS",
    "basePrice": 100,
    "points": 94,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Marcus Stoinis",
    "role": "All-Rounder",
    "country": "Australia",
    "ipl_team": "PBKS",
    "basePrice": 150,
    "points": 160,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Mitch Owen",
    "role": "Bowler",
    "country": "New Zealand",
    "ipl_team": "PBKS",
    "basePrice": 100,
    "points": 50,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Musheer Khan",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 30,
    "points": 26,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Nehal Wadhera",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 100,
    "points": 68,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Prabhsimran Singh",
    "role": "Wicket-Keeper",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 100,
    "points": 94,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Priyansh Arya",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 100,
    "points": 60,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Pyla Avinash",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 30,
    "points": 22,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Shashank Singh",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 30,
    "points": 49,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Shreyas Iyer",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 200,
    "points": 291,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Suryansh Shedge",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 30,
    "points": 19,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Vishnu Vinod",
    "role": "Wicket-Keeper",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 30,
    "points": 22,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Vyshak Vijaykumar",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 30,
    "points": 19,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Xavier Bartlett",
    "role": "Bowler",
    "country": "Australia",
    "ipl_team": "PBKS",
    "basePrice": 30,
    "points": 18,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Yash Thakur",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 30,
    "points": 30,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Yuzvendra Chahal",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "PBKS",
    "basePrice": 200,
    "points": 213,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Dhruv Jurel",
    "role": "Wicket-Keeper",
    "country": "India",
    "ipl_team": "RR",
    "basePrice": 200,
    "points": 203,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Donovan Ferreira",
    "role": "All-Rounder",
    "country": "South Africa",
    "ipl_team": "RR",
    "basePrice": 30,
    "points": 5,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Jofra Archer",
    "role": "Bowler",
    "country": "England",
    "ipl_team": "RR",
    "basePrice": 150,
    "points": 181,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Kwena Maphaka",
    "role": "Bowler",
    "country": "South Africa",
    "ipl_team": "RR",
    "basePrice": 30,
    "points": 12,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Lhuan-Dre Pretorious",
    "role": "Bowler",
    "country": "South Africa",
    "ipl_team": "RR",
    "basePrice": 30,
    "points": 12,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Nandre Burger",
    "role": "Bowler",
    "country": "South Africa",
    "ipl_team": "RR",
    "basePrice": 100,
    "points": 53,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Ravindra Jadeja",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "RR",
    "basePrice": 200,
    "points": 266,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Riyan Parag",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "RR",
    "basePrice": 200,
    "points": 233,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Sandeep Sharma",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "RR",
    "basePrice": 30,
    "points": 27,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Shimron Hetmyer",
    "role": "All-Rounder",
    "country": "West Indies",
    "ipl_team": "RR",
    "basePrice": 150,
    "points": 109,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Shubham Dubey",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "RR",
    "basePrice": 30,
    "points": 19,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Tushar Deshpande",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "RR",
    "basePrice": 100,
    "points": 68,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Vaibhav Suryavanshi",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "RR",
    "basePrice": 30,
    "points": 15,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Yudhvir Charak",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "RR",
    "basePrice": 30,
    "points": 11,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Dasun Shanaka",
    "role": "All-Rounder",
    "country": "Sri Lanka",
    "ipl_team": "RR",
    "basePrice": 30,
    "points": 10,
    "isForeign": true,
    "status": "replacement"
  },
  {
    "name": "Abhinandan Singh",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "RCB",
    "basePrice": 100,
    "points": 84,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Bhuvneshwar Kumar",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "RCB",
    "basePrice": 200,
    "points": 210,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Devdutt Padikkal",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "RCB",
    "basePrice": 200,
    "points": 207,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Jacob Bethell",
    "role": "All-Rounder",
    "country": "England",
    "ipl_team": "RCB",
    "basePrice": 30,
    "points": 29,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Jitesh Sharma",
    "role": "Wicket-Keeper",
    "country": "India",
    "ipl_team": "RCB",
    "basePrice": 30,
    "points": 37,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Josh Hazlewood",
    "role": "Bowler",
    "country": "Australia",
    "ipl_team": "RCB",
    "basePrice": 200,
    "points": 208,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Krunal Pandya",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "RCB",
    "basePrice": 30,
    "points": 45,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Nuwan Thushara",
    "role": "Bowler",
    "country": "Sri Lanka",
    "ipl_team": "RCB",
    "basePrice": 30,
    "points": 20,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Phil Salt",
    "role": "Wicket-Keeper",
    "country": "England",
    "ipl_team": "RCB",
    "basePrice": 30,
    "points": 41,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Rajat Patidar",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "RCB",
    "basePrice": 100,
    "points": 82,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Rasikh Dar",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "RCB",
    "basePrice": 30,
    "points": 7,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Romario Shepherd",
    "role": "All-Rounder",
    "country": "West Indies",
    "ipl_team": "RCB",
    "basePrice": 100,
    "points": 89,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Suyash Sharma",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "RCB",
    "basePrice": 30,
    "points": 13,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Swapnil Singh",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "RCB",
    "basePrice": 30,
    "points": 30,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Tim David",
    "role": "All-Rounder",
    "country": "Australia",
    "ipl_team": "RCB",
    "basePrice": 200,
    "points": 294,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Virat Kohli",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "RCB",
    "basePrice": 200,
    "points": 270,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Yash Dayal",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "RCB",
    "basePrice": 30,
    "points": 18,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Abhishek Sharma",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "SRH",
    "basePrice": 150,
    "points": 139,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Aniket Verma",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "SRH",
    "basePrice": 100,
    "points": 59,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Brydon Carse",
    "role": "Bowler",
    "country": "England",
    "ipl_team": "SRH",
    "basePrice": 30,
    "points": 22,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Eshan Malinga",
    "role": "Bowler",
    "country": "Sri Lanka",
    "ipl_team": "SRH",
    "basePrice": 30,
    "points": 29,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Harsh Dubey",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "SRH",
    "basePrice": 30,
    "points": 44,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Harshal Patel",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "SRH",
    "basePrice": 30,
    "points": 49,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Heinrich Klaasen",
    "role": "Batsman",
    "country": "South Africa",
    "ipl_team": "SRH",
    "basePrice": 100,
    "points": 54,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Ishan Kishan",
    "role": "Wicket-Keeper",
    "country": "India",
    "ipl_team": "SRH",
    "basePrice": 150,
    "points": 185,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Jaydev Unadkat",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "SRH",
    "basePrice": 30,
    "points": 14,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Kamindu Mendis",
    "role": "All-Rounder",
    "country": "Sri Lanka",
    "ipl_team": "SRH",
    "basePrice": 30,
    "points": 23,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Nitish Kumar Reddy",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "SRH",
    "basePrice": 30,
    "points": 25,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Pat Cummins",
    "role": "Bowler",
    "country": "Australia",
    "ipl_team": "SRH",
    "basePrice": 200,
    "points": 278,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Smaran Ravichandran",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "SRH",
    "basePrice": 30,
    "points": 17,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Travis Head",
    "role": "All-Rounder",
    "country": "Australia",
    "ipl_team": "SRH",
    "basePrice": 150,
    "points": 105,
    "isForeign": true,
    "status": "retained"
  },
  {
    "name": "Zeeshan Ansari",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "SRH",
    "basePrice": 30,
    "points": 27,
    "isForeign": false,
    "status": "retained"
  },
  {
    "name": "Cameron Green",
    "role": "All-Rounder",
    "country": "Australia",
    "ipl_team": "KKR",
    "basePrice": 200,
    "points": 334,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Sarfaraz Khan",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 30,
    "points": 33,
    "isForeign": false,
    "status": "auction"
  },
  {
    "name": "David Miller",
    "role": "Batsman",
    "country": "South Africa",
    "ipl_team": "DC",
    "basePrice": 30,
    "points": 21,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Prithvi Shaw",
    "role": "Batsman",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 30,
    "points": 26,
    "isForeign": false,
    "status": "auction"
  },
  {
    "name": "Wanindu Hasaranga",
    "role": "All-Rounder",
    "country": "Sri Lanka",
    "ipl_team": "LSG",
    "basePrice": 30,
    "points": 17,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Venkatesh Iyer",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "RCB",
    "basePrice": 150,
    "points": 101,
    "isForeign": false,
    "status": "auction"
  },
  {
    "name": "Liam Livingstone",
    "role": "All-Rounder",
    "country": "England",
    "ipl_team": "SRH",
    "basePrice": 150,
    "points": 147,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Rachin Ravindra",
    "role": "All-Rounder",
    "country": "New Zealand",
    "ipl_team": "KKR",
    "basePrice": 30,
    "points": 25,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Finn Allen",
    "role": "Batsman",
    "country": "New Zealand",
    "ipl_team": "KKR",
    "basePrice": 30,
    "points": 28,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Quinton de Kock",
    "role": "Wicket-Keeper",
    "country": "South Africa",
    "ipl_team": "MI",
    "basePrice": 30,
    "points": 5,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Ben Duckett",
    "role": "Wicket-Keeper",
    "country": "England",
    "ipl_team": "DC",
    "basePrice": 30,
    "points": 12,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Akash Deep",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "KKR",
    "basePrice": 30,
    "points": 17,
    "isForeign": false,
    "status": "auction"
  },
  {
    "name": "Jacob Duffy",
    "role": "Bowler",
    "country": "New Zealand",
    "ipl_team": "RCB",
    "basePrice": 30,
    "points": 28,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Matt Henry",
    "role": "Bowler",
    "country": "New Zealand",
    "ipl_team": "CSK",
    "basePrice": 30,
    "points": 27,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Shivam Mavi",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "SRH",
    "basePrice": 30,
    "points": 6,
    "isForeign": false,
    "status": "auction"
  },
  {
    "name": "Anrich Nortje",
    "role": "Bowler",
    "country": "South Africa",
    "ipl_team": "LSG",
    "basePrice": 30,
    "points": 44,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Matheesha Pathirana",
    "role": "Bowler",
    "country": "Sri Lanka",
    "ipl_team": "KKR",
    "basePrice": 200,
    "points": 272,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Ravi Bishnoi",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "RR",
    "basePrice": 150,
    "points": 152,
    "isForeign": false,
    "status": "auction"
  },
  {
    "name": "Rahul Chahar",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 100,
    "points": 58,
    "isForeign": false,
    "status": "auction"
  },
  {
    "name": "Akeal Hosein",
    "role": "Bowler",
    "country": "West Indies",
    "ipl_team": "CSK",
    "basePrice": 30,
    "points": 21,
    "isForeign": true,
    "status": "auction"
  },
  {
    "name": "Auqib Nabi",
    "role": "Bowler",
    "country": "India",
    "ipl_team": "DC",
    "basePrice": 150,
    "points": 153,
    "isForeign": false,
    "status": "auction"
  },
  {
    "name": "Shivang Kumar",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "SRH",
    "basePrice": 30,
    "points": 30,
    "isForeign": false,
    "status": "auction"
  },
  {
    "name": "Prashant Veer",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 200,
    "points": 233,
    "isForeign": false,
    "status": "auction"
  },
  {
    "name": "Mukul Choudhary",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "LSG",
    "basePrice": 30,
    "points": 38,
    "isForeign": false,
    "status": "auction"
  },
  {
    "name": "Kartik Sharma",
    "role": "All-Rounder",
    "country": "India",
    "ipl_team": "CSK",
    "basePrice": 150,
    "points": 163,
    "isForeign": false,
    "status": "auction"
  }
]
module.exports = DEFAULT_PLAYERS;