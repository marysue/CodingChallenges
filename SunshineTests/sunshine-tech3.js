const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("node:constants");

/*
	Jeff Budzinski (Tech Interview 3)
		//given a URL:
		www.amazon.com/books/history/foobar
		break the url down into components and return the list:

			books/history/foobar
			books/history
			books
			www.amazon.com
			amazon.com
			com


			store in array
			1. lastIndexOf to find the index of the last slash - then substring from first slice to last slice
			2. repeat until no more slashes
			3. take the substring of the URL:  www.amazon.com based on the indexOf the ., then sliced off the first, and continue until there are no more ".".s

			Jeff had information about what we were ultimately going to do with  the information when we did this -- but that only confused me, because I thought he -- in addition -- wanted me to parse it and make some determinations.



*/
var orders1 = ["fish", "fish", "chips", "fish", "burger"];
var orders2 = ["fish", "fish", "fixh", "chips", "chips", "burger", "chips"];
var orders3 = ["fixh", "fixh", "chips", "burger", "fish"];

function timeToCook(orders, cooldown) {
    var time = 0;
    // {fish: 178} input
    // for each item, create a structure with cannotCook
    // [], [fish, chips, chips, chips, chips, chips, fish], [fish]
    // time = 0: {}
    // time = 1: {fish: time + cooldown}
    // time = 2: {fish: 3}
    //time = 3: {fish: 3} => {}

    var cannotCook = {}
    //for each time to cook
    for (let i = 0; i < orders.length; i++) {
        let item = orders[i];
        //optimal solution:
        //time = Math.max(time, cannotCook[time] || time) + 1;
        //cannotCook[item] = time + cooldown;
        //then just return time;
        if (item in cannotCook && time < cannotCook[item]) {
            time = cannotCook[item];
        }

        //  My solution was O(2n) -- above solution was John's suggestion
        //which changed it to O(n);
/*
        while (item in cannotCook && time < cannotCook[item]) {
            time = 40;
            cannotCook = {fish: 3}
            increment time
            time++;
            if time === object's time ... remove the time from the object
            if (cannotCook[item] === time) {
                delete(cannotCook[item]);
            }
        }
        cook?

        */
        time++;
        cannotCook[item] = time + cooldown;
        //add the item to the object with the computer time before it can be cooked SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION.
    }
    return time;
}

    console.log(timeToCook(orders1, 3));
    console.log(timeToCook(orders2, 3));
    console.log(timeToCook(orders3, 5));
