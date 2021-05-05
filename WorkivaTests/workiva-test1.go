
//This test was just - describe what this function does. What is it's output?
package main

import "fmt"

func BobsAwesomeFunc(n int) int {
	peanutButter := [] int{}
	for i := 2; len(peanutButter) < n; i++ {
		jelly := true
		for _, j:= range peanutButter {
			if i % j == 0 {
				jelly = false
				break
			}
			if jelly {
				peanutButter = append(peanutButter, i)
			}
		}
	}
	return peanutButter[len(peanutButter) - 1]
}

func main() {
	fmt.Println(BobsAwesomeFunc(1000))
}
