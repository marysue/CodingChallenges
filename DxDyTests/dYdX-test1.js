/*
1.  Product Defects  -- 1 hour

A quality agent is responsible for inspecting samples of the finished products in the production line.
Each sample contains defective and non-defective products represented by 1 and 0 respectively.
After placing the product samples sequentially in a two-dimensional square matrix of product samples
determine the size of the largest square of defective products.

Example
n x n = 5 x 5 matrix of product samples
samples = [[1,1,1,1,],[1,1,1,0,0],[1,1,1,0,0], [1,1,1,0,0],[1,1,1,1,1]]

Looks like:
1 1 1 1 1
1 1 1 0 0
1 1 1 0 0
1 1 1 0 0
1 1 1 1 1

The first square area of defective products is a sub-matrix 3 x 3 starting at (0,0) and ending at (3,3)
The second square area of defective products is also a sub-matrix 3 x 3 starting at (1, 0) and ending at (4,3)
The third square area of defective products is also a sub-matrix 3 x 3 starting at (2,0) and ending at (5,3)

Function Description
Complete the function largestArea in the editor below.

largestArea has the following parameter:
    int samples[n][n]:  a two-dimensional array of integers

    Returns:
    int: an integer that represents the size of the largest square sub-matrix of defective products.

    Constraints:
    0 <= n <= 500
    samples[i][j] is in the set {0,1} (0 denotes a non-defective product and 1 denotes a defective product)

Input Format for Custom Testing
The first line contains an integer n, the number of rows (the number of samples).
The second line contains the integer, n, the number of columns (the number of products in a sample)
Each line i of the n subsequent lines (where 0  <= i < n) contains n space-separated integers that describe samples[i].

Sample Case 0:
Sample Input for Custom Testing

STDIN       FUNCTION
--------    -----------
3       ->  samples[] size n = 3
3       ->  samples[i][] size n = 3
1 1 1   ->  samples[[1,1,1],[1,1,0],[1,0,1]]]
110
101

Sample Output
  2

Explanation
1 1 1
1 1 0
1 0 1

Starts at (0,0), ends at (1, 1) -- a 2 x 2 sub-matrix
*/
//The function is expected to return an INTEGER.
//The function accepts 2D_INTEGER_ARRAY samples as parameter


function largestArea(samples) {

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const samplesRows = parseInt(readLine().trim(), 10);
    const samplesColumns = parseInt(readLine().trim(), 10);
    let samples = ARray(samplesRows);

    for (let i = 0; i < samplesRows; i++) {
        samples[i] = readLine().replace(/\s+$/g, '').split(' ').map(samplesTemp => parseInt(samplesTemp, 10));
    }

    console.log("Samples: ", samples);
    //prints out [ [1, 1, 1], [1, 1, 0], [1, 0, 1]]

    const result = largestArea(samples);

    ws.write(result + '\n');

    ws.end();
}

