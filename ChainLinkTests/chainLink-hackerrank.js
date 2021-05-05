/* fibonacci */
/* I couldn't get this to work.  I'm returning the array, and the array is not summing for fib(1), fib(2), etc ... it
   just comes out as 1, 0, 1, 1, 0, '100111', 1, 0.  There's got to be another way to do this.  Maybe by loading up the
   fib array in one function ... and then summing it in another?  Or using objects???

   Fibonacci

   The Fibonacci numbers are a sequence of numbers where each number after the first two
   is a sum of the prior two.

   As an illustration, here is a short sequence given starting values of (0, 1): Fibonacci series =
   (0, 1, 1, 2, 3, 5, 8, 13)

   Given an integer n, calculate the first n numbers in the Fibonacci sequence given starting elements of
   (0, 1).  Return an array of n integers, including the given (0, 1) in the sequence.

   Function Description
   Complete the function fibonacci in the editor below.

   fibonacci has the following parameter(s):
       int n : the length of the Fibonacci series to return.

    Return:
        int[n]: an array of n Fibonacci numbers starting with (0, 1)

    Constraints:
        1 <= n <= 10

    Sample Case 0

        Sample Input 0

        STDIN   Function
        ------  ---------
        4      ->  n = 4

    Sample Output 0
        0   : Fib(0)
        1   : Fib(1)
        1   : Fib(2)
        2   : Fib(3)   // I don't understand where fib(4) is ...

   */

let fibArr = [];
function fibonacci(n) {
    // Write your code here

    if (n == 1) {
         fibArr.push(0);
         fibArr.push(1);
        console.log("n= "+ n+ ", fibArr: ", fibArr)
         return fibArr  //base case
     } else if (n == 2) {
         fibArr.push(0);
         fibArr.push(1);
         fibArr.push(1);
         return fibArr;
     }
    console.log("Calling fibonnaci(", n - 1, ") + fibonnaci(", n - 2, ")");
    let n1 = fibonacci(n - 1);
    let n2 = fibonacci(n - 2);
    let sum = n1 + n2;
    fibArr.push(sum);
    return fibArr;

}

console.log(fibonacci(4));
    /* Minimum Amount */
  /* time limit exceeded   passed 11 of 13 cases!!! */
    function calculateAmount(prices) {
        // Write your code here
        let cost = 0;
        let prev = [prices[0]];
        cost += prices[0];
        for (let i = 1; i < prices.length; i++) {
            let price = prices[i];
            prev.push(prices[i])
            let discount = Math.min(...prev);
            let totalCost = price - discount
            if (totalCost < 0) {
                cost += 0;
            } else {
                cost += totalCost
            }
        }

        return cost;

    }

    /* University Career Fair */

    /*
    A team organizing a university career fair has a list of companies along with their respective arrival times and
    their duration of stay.  Only one company can present at any time. Given each company's arrival time and the
    duration they will stay, determine the maximum number of presentations that can be hosted during the career fair.

    [ I figured out that the best way to do this is to sort the arrival and duration arrays by arrival times, then if
      there's two or more arrival times, sort those by the shortest duration first.  That way, the shortest duration
      of presentations for that arrival time is chosen, making room for more presentations.  ]

    */
    //end of fair:  last arrival time + duration;  --> so both arrays need to be sorted or put an object in place.
    //need fair slots:  one hour slots from the first arrival through the last departure

    // Example:
    // n = 5
    // arrival:  [1, 3, 3, 5, 7]
    // duration: [2, 2, 1, 2, 1]

    // 5   |     |     |     |     |     |     |-----|
    // 4   |     |     |     |     |-----|-----|     |
    // 3   |     |     |-----|     |     |     |     |
    // 2   |     |     |-----|-----|     |     |     |
    // 1   |-----|-----|     |     |     |     |     |
    //------------------------------------------------
    // Co# 1PM   2PM   3PM    4PM  5PM   6PM  7PM   8PM
    //                   Time

    /*  The first company arrives at time 1 and stays for 2 hours.  At time 3, two companies
        arrive, but only 1 can stay for either 1 or 2 hours. The next companies arrive at times
        5 and 7 and do not conflict with any others. In total, there can be a maximum of 4
        promotional events.  See the graph above for this representation.

        Function Description:
        Complete the function maxEvents in the editor.

        maxEvents has the following parameter(s):
            int arrival[n]: an array of integers where the ith element is the arrival time of the ith company

            int duration[n]: an array of integers where the ith element is the duration of the ith company's
            stay at the career fair.

        Returns:
        int: the maximum number of promotional events that can be hosted.

        Constraints:
            1 <= n <= 50
            1 <= arrival[i] <= 1000
            1 <= duration[i] <= 1000
            Both the 'arrival' array and 'duration' array will have an equal number of elements

        Sample Case 0:
            Sample Input for Custom Testing

            STDIN   Function
            ------  -----------
            3   ->  arrival[] size n=3
            1   ->  arrival = [1, 3, 5]
            3
            5
            3   -> duration[] size n = 3
            2   -> duration = [2, 2, 2]
            2
            2

            Sample Output
            3

            Explanation

            arrival:  [1, 3, 5] //only one can come.
            duration: [2, 2, 2]

            5   |     |     |     |     |     |     |     |     |     |
            4   |     |     |     |     |     |     |     |     |     |
            3   |     |     |     |     |-----|-----|     |     |     |
            2   |     |     |-----|-----|     |     |     |     |     |
            1   |-----|-----|     |     |     |     |     |     |     |
            ------------------------------------------------------------
            Co# 1PM   2PM   3PM    4PM  5PM   6PM    7PM   8PM
                              Time

    Sample Case 1:

        Sample Input for Custom Testing

        STDIN   Function
        ------  --------
        1   ->  arrival[] size = 1
        1   ->  arrival = [1]
        1   ->  duration[] size = 1
        5   ->  duration = [1]

        Sample Output
        1

        Explanation
            arrival:  [1] //only one can come.
            duration: [1]

            5   |     |     |     |     |     |     |     |     |     |
            4   |     |     |     |     |     |     |     |     |     |
            3   |     |     |     |     |     |     |     |     |     |
            2   |     |     |     |     |     |     |     |     |     |
            1   |-----|     |     |     |     |     |     |     |     |
            ------------------------------------------------------------
            Co# 1PM   2PM   3PM    4PM  5PM   6PM    7PM   8PM
                              Time

            Only 1 company is present at the fair and its event can be hosted with no conflicts.

    */
    // arrival:  [1, 2] //only one can come.
    // duration: [7, 3]

    // 5   |     |     |     |     |     |     |     |     |     |
    // 4   |     |     |     |     |     |     |     |     |     |
    // 3   |     |     |     |     |     |     |     |     |     |
    // 2   |     |-----|-----|-----|     |     |     |     |     |
    // 1   |-----|-----|-----|-----|-----|-----|-----|     |     |
    //------------------------------------------------------------
    // Co# 1PM   2PM   3PM    4PM  5PM   6PM    7PM   8PM
    //                   Time

   // arrival = [1, 3, 4, 6]  // 2
  //  duration = [4, 3, 3, 2] //

    // 5   |     |     |     |     |     |     |     |     |     |
    // 4   |     |     |     |     |     |-----|-----|     |     |
    // 3   |     |     |     |-----|-----|-----|     |     |     |
    // 2   |     |     |-----|-----|-----|     |     |     |     |
    // 1   |-----|-----|-----|-----|     |     |     |     |     |
    //------------------------------------------------------------
    // Co# 1PM   2PM   3PM  4PM  5PM   6PM    7PM   8PM
    //                   Time

    //max 4 promotional events
    //first company arrives at time 1; stays for 2 hours
    //time 3  two companies arrive; only 1 can stay for either 1 or 2 hours;
    //next companies arrive at times 5 and 7 and do not conflict with each other

    function findMaxEvents(arrival, duration) {
        //assumption:  arrival is sorted from earliest to latest.
        //             duration[i] = arrival[i] = company[i];
        let end = 0;
        let ans = 0;
        for (let i = 0; i < arrival.length; i++) {
            if (arrival[i] >= end) {
                ans += 1;
                end = arrival[i] + duration[i];
            }
        }
        return ans;
    }
    let arrival = [1, 3, 3, 5, 7]   // answer: 4 companies -- these are arrival times;  co1 = idx0; co2 = idx1
    let duration = [2, 2, 1, 2, 1]
    console.log("Expect:  4");
    console.log(findMaxEvents(arrival, duration));
    arrival = [1, 2] //1
    duration = [7, 3] //
    console.log("Expect:  1");
    console.log(findMaxEvents(arrival, duration));
    arrival = [1, 3, 4, 6]  // 2
    duration = [4, 3, 3, 2] //
    console.log("Expect:  2");
    console.log(findMaxEvents(arrival, duration));

    // tried to modify:  https://beizhedenglong.github.io/leetcode-solutions/docs/maximum-number-of-events-that-can-be-attended

    /*
        Minimum Amount

        Alex has a list of items to purchase at a market. The owner offers to discount each item after the first one by the
        lowest marked price among the prior items. No item's price can be discounted below 0, and the list of items may
        not be reordered. Calculate the payable amount.

        Example:
            prices = [2, 5, 1, 4]

            Alex pays 2 for the first item since there are no previous items to compare to.

            The second item costs 5 - 2 = 3.

            The third item is free:  max(1-min(2, 5), 0) = max(-1, 0) = 0.

            The fourth item costs 4 - 1 = 3.

            The total cost to purchase all items is 2 + 3 + 0 + 3 = 8
            The first item is never discounted and the minimum cost of any item is 0.

        Function Description:
            Complete the function calculateAmount in the editor below. The function must return Alex's total
            cost to purchase all the items.

            calculateAmount has the following parameter(s):
                int prices[n]: the original prices of each of the items selected

        Returns:
            int: the total cost to purchase the items after any discounts are applied.

        Constraints
            1 <= n <= 10^5
            1 <= prices[i] <= 10^7, where 0 <= i < n

    Input Format for Custom Testing
        Input from stdin will be processed as follows and passed into the function.

        The first line contains an integer n, the size of the array prices.

        The next n lines each contain an element prices[i] where 0 <= i < n.

    Sample Case 0
        Sample Input 0

        STDIN   Function
        ------  ----------
        4   ->  prices[] size n = 4
        4   ->  Prices = [4, 9, 2, 3]
        9
        2
        3

    Sample Output 0
        10

    Explanation 0
        n = 4, prices = [4, 9, 2, 3]
        prices[0] =4    d[0] = 0;               cost[0] = 4              : because the first item is never discounted.
        prices[1] = 9;  d[1] = 4;               cost[1] = 9 - 4 = 5
        prices[2] = 2   d[2] = min(4, 9) = 4;   cost[2] = 2 - 4 = -2 = 0 : because you cannot discount below 0;
        prices[3] = 3   d[3] = min(4, 9, 2) = 2 cost[3] = 3 - 2 = 1

        The total cost returned is 4 + 5 + 0 + 1 = 10.

    Sample Case 1

        Sample Input 1

            STDIN   Function
            ------  -----------
            4   ->  prices[] size n = 4
            1   ->  prices = [1, 2, 3, 4]
            2
            3
            4

            Sample Output 1
                7

            Explanation 1
                n = 4, prices = [1, 2, 3, 4]

                prices[0] = 1;  d[0] = 0                cost[0] = 1;
                prices[1] = 2   d[1] = 1                cost[1] = 2 - 1 = 1
                prices[2] = 3   d[2] = min(1, 2) = 1    cost[2] = 3 - 1 = 2
                prices[3] = 4   d[3] = min(1, 2, 3) = 1 cost[3] = 4 - 1 = 3

                Total cost returned is 1 + 1 + 2 + 3 = 7

    */
