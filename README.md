KeenKeeper

KeenKeeper is a small web app I built to help keep track of friendships and stay in touch with people regularly. The idea is simple — sometimes we forget to reach out, so this app helps remind and organize interactions.

What this project does
Shows a list of friends with basic information
Tracks how many days since last contact
Lets you quickly log interactions (Call, Text, Video)
Saves those interactions in a timeline
Allows filtering the timeline by interaction type
Displays a simple chart of interaction data
Works on mobile, tablet, and desktop
How it works
Friend data is loaded from a JSON file
Clicking on a friend opens a detailed page
From there, you can log a call, text, or video interaction
Each action adds an entry to the timeline
The timeline page shows all past activities
Technologies used
Next.js (App Router)
React
Tailwind CSS
Recharts
React Hot Toast
React Icons
Running the project locally

Clone the repo:

git clone https://github.com/

Go to the project folder:

cd keenkeeper

Install dependencies:

npm install

Start the server:

npm run dev

Then open http://localhost:3000

Notes

This project was built as part of an assignment. I focused on making the UI clean and making sure all required features work properly.

Possible improvements
Add search functionality
Add sorting for timeline
Store data in a database instead of memory
Author

Rudro Biswas