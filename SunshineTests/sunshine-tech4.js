/*
I was unable to code this ... so we talked through it.
The reason? I didn't know MongoDB or other flat-file non-relational db's.

		System & Product Scales for users; works with customer support;
		Yahoo architect on advertising; travel, local, shopping ... enrique & marissa met

		Problem:  You have 100M customers, who each have 100K product; You have a relational database that is more hierarchical:  customers -> products -> productDetails.  How would you replicate that into a non-normalized flat file?

		We talked about working with triggers; everytime an insert or update or deletion cam about, trigger the write.  Too expensive;

		We talked about doing this at the endpoint.  Send off the query.  Start an async process to update the flat file.  Return immediately from the query.

		This was the best case solution, but then we talked about the fact that this flat file would be indexed.  So now we want to get all customers who use this particular lamp.  We need to figure out how to update 100M * 100K rows (worst case) to update the price of the lamp.

		I mentioned mark the rows dirty, and accumulate the changes in another file; Then eventually merge the changes in.

		Vishal mentioned that this was a complex problem, and the likely we could have a queue with a subscriber.   As we have updates, we store them in a different area.  Then periodically we merge the changejs.  Then, if we have a query, we look at the changes datestamp, and look at the file's date stamp on the individual rows and return the most recent row.

        
*/
