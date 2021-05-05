//What does someFunction() perform?


public Node someFunction(Node root, int key) {
    if (root == null || root.key == key) {
        return root;
    }

    if (root.key > key) {
        return someFunction(root.left, key);
    }

    return someFunction(root.right, key);
}

// Checks to find null values in a binary tree;
// Throws an uncaught exception on all calls
// Builds out a binary tree
// Sorts values of a binary tree
// --> I chose:  Searches through a binary tree for a value
