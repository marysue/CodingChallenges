"""
x mod 3 = Fizz
x mod 5 = Buzz
x mod 15 = FizzBuzz
else print x
"""

for x in range(1,101):
    if x % 15 == 0:
        print ("FizzBuzz") # Catch multiples of both first.
    elif x % 3 == 0:
        print ("Fizz")
    elif x % 5 == 0:
        print ("Buzz")
    else:
        print (x)
