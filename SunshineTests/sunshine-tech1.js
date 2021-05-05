//follow on questions:
//1.  What is the time complexity?  O(2n2) squared.  or O n squared -- dropping constant time.
//2.  How might you make this more time efficient?  Use memos { 0 : 0, 1: 1, 2:1, ... } representing
//    the max height on the left for each position -- and one for min height for each position.
//3.  How might you make this constant time?  It had something to do with sliding pointers around to
//    calculate max and min for each pos.
//4.  Space complexity:  O(n) ... as each memo represents n spaces of storage for each memo.



function findHighestLeft(currentPos, i,height) {
    let highest = 0
    for (let curr = i; curr >= 0; curr--) {
      if ( height[curr] > currentPos && height[curr] > highest) {
        highest = height[curr];
      }
    }

    return highest;
  }

  function findHighestRight(currentPos, i, height) {
    let highest = 0;
    for (let curr = i; curr < height.length; curr++) {
      if (height[curr] > currentPos && height[curr] > highest) {
        highest = height[curr];
      }
    }
    return highest
  }

  function determineMaxBlocks(highestLeft, highestRight, currentPos) {
    //find tallest - left or right;
    let max = Math.min(highestLeft, highestRight);
    let maxBlocks = max - currentPos;
    if (maxBlocks) {
      return maxBlocks;
    } else {
      return 0;
    }
  }

  function calculateBlocks(height) {

    let max = 0;

    for (let i = 1; i < height.length - 1; i++) {
      let currentPos = height[i]

      let highestLeft = findHighestLeft(currentPos, i, height);
      if (highestLeft === 0) { continue }
      let highestRight = findHighestRight(currentPos, i, height);
      let currMax = determineMaxBlocks(highestLeft, highestRight, currentPos);
      if (currMax > 0) {
        max += currMax;
      }
    }
    return max;
  }

  console.log("Max blocks:  " + calculateBlocks([4,2,0,3,2,5]));
