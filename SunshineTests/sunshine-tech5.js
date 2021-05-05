/*
This wasn't a coding exercise, but a thought process.

You have a bridge to cross at night.
Two people at a time MUST cross together.
One person crossing the bridge MUST carry the flashlight.
A flashlight must be carried on ALL trips across the bridge - there is only 1 flashlight.
Each person travels at a different speed.
The speed of the slowest person is the maximum speed you can cross the bridge.

What is the fastest time you can get everyone to the other side of the bridge?

1.  person a & b cross.  Travel time = slowest person.
2.  person <a or b> crosses back to get the next person.  Should be someone who travels fast.
3.  Next person and person with flashlight travel across the bridge again ...


I had :

person[1, 2, 5, 10]

Person[0] + person[1] -> 2 minutes is the slowest to cross.
Person[0] ->  1 minute to return.  Fastest one returns.
Person[2] + person[2] ->  2 or 5 -> 5 slowest.  So 5 mins to cross.
person[2] -> 2 minutes to return.
person[2] + person[3] -> 2 or 10 -> 10 slowest. So 10 minutes to cross.
    2 + 1 + 5 + 2 + 10 = 20 mins ... can do this faster if 5 & 10 cross together.
    but 5 & 10 cannot cross together b/c it will take 5 to return so try this:

1, 2 -> cross;  1 returns;
10, 5 -> cross;  2 returns;
2, 1 -> cross;  no return
   2 + 1 + 10 + 2 + 2 = 17 fastest!
   
*/
