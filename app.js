let tree = [1, -1, 0, 0, 0, 4, 5];
//let tree = [-1, 6, 0, 0, 0, 4, 5];
let heights = new Array(tree.length);
let visited = new Array(tree.length);

let max = 0;

function visitParent(parentIndex) {

    if (visited[parentIndex]) {

        return heights[parentIndex];

    } else if (tree[parentIndex] === -1) {

        return 1;

    } else {
        heights[parentIndex] = visitParent(tree[parentIndex]) + 1;
        visited[parentIndex] = true;

        return heights[parentIndex];
    }

}

tree.forEach((node, index) => {

    if (node === -1) {

        heights[index] = 1;

    } else {

        heights[index] = visitParent(node) + 1;

    }

    visited[index] = true;

    if (heights[index] > max) {
        max = heights[index];
    }


});

console.log('height', heights);