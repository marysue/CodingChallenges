// #        6
// #       / \
// #      /   \
// #.    4    10
// #.   /     / \
// #.  2     7  11
// #         \
// #          8


class Node {
    constructor (value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }

  class Tree {
    constructor () {
      this.head = null;
    }

    // returns the node where the value is found
    // or returns null;
    find (value) {
       let currentNode = this.head
      while (currentNode != null) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else if (value === currentNode.value) {
          return currentNode;
        }
      }
      //Didn't find the value -- returning null
      return null;
    }

    insert (value) {

        //assume we need a newNode
        let newNode = new Node(value);

        //tree empty - create new head;
        if (this.head === null) {
              this.head = newNode;
        }

        //get ready for our while loop
        let currentNode = this.head;
        let previousNode = null;

        //We have the currentNode and the previous Node;
        while (currentNode) {
          //look left
          if (value < currentNode.value) {
            previousNode = currentNode;
            currentNode = currentNode.left;
            //look right
          } else if (value > currentNode.value) {
            previousNode = currentNode;
            currentNode = currentNode.right;
            //We have a problem - binary search trees
            //don't have duplicate values
            //so just return null;
          } else if (value === currentNode.value) {
            return null;
          }
      }

      if (value < previousNode.value) {
        previousNode.left = newNode;
      } else if (value > previousNode.value) {
        previousNode.right = newNode;
      }
    }
  }

  // our tree:
  // [6, 4, 2, 10, 7, 8, 11]
  let tree = new Tree();
  let nodes = [6, 4, 2, 10, 7, 8, 11];

  for (let i = 0; i < nodes.length; i++) {
    tree.insert(nodes[i]);
  }

  //some debugging statements
  //our problem was an odd one ... we had been passing "head" into the find method ...
  //this somehow caused it to walk into what seemed like an infinite loop which
  //oddly resolved itself and returned null.
  // console.log(tree.head.right.left.right);
  // console.log(14)
  // console.log(tree.head);

  //The actual tests:
  console.log("Expect null, as 3 is not in tree:  ", tree.find(3));
  console.log("Expect the Node object with the value of 8, as this exists in the tree:  ");
  console.log(tree.find(8));
  console.log("Expect the head with a left and right node, as well as value of 6:  ");
  console.log(tree.find(6));
