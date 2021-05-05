/*
This was with Rohit Chandra - sort of dry guy.  Hard to talk with.

Looked around the Cadence app.
	Rohit Chandra : Engr Dir? PHD from stanford;  Talked about what if's on the Cadence app.
    1.  How would you manage the database from the front-end?  Basically Redux store.
	2. How would you manage database down?  Mirror database on AWS ... but then, if you do that you might as well just go with AWS as mirroring DB's are simple.
	3. Do you manage user data?  What would you do for multi-factor authentication?  Put contact info in user account, then if the user select multi-factor set this in the user account and upon login, the fetch to the backend would dispatch the authentication and place it in a queue to process when front end authenticates.
	4. Why are there no prices on one page?  Because that's for the Bicycle's store ... it takes you to the page with all the bicycle inventory.
	5. How do you handle ratings?  Cart?  Wanted to see my db schema -- but it wasn't up to date so it didn't have the Cart on it.


*/
