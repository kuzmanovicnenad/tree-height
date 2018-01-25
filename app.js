
/**
 * Check for parents height
 *
 * @param parentIndex
 * @returns {*}
 */
function visitParent(parentIndex) {

    if (heights[parentIndex]) {

        return heights[parentIndex];

    } else if (tree[parentIndex] === -1) {

        return 1;

    } else {

        heights[parentIndex] = visitParent(tree[parentIndex]) + 1;
        return heights[parentIndex];

    }

}

/**
 * Find tree height
 *
 * @param tree
 * @returns {number}
 */
function treeHeight(tree) {

    try {

        let height = 0;

        tree.forEach((node, index) => {

            if (node === -1) {

                heights[index] = 1;

            } else {

                heights[index] = visitParent(node) + 1;

            }

            if (heights[index] > height) {
                height = heights[index];
            }

        });

        return height;

    } catch (err) {
        console.log('Invalid data in tree array. Probably circular dependencies\n');
        console.log(err);
    }
}

// Each node shows parents index
// App will break if data is invalid
let tree = [1, -1, 0, 0, 0, 4, 5];
let heights = new Array(tree.length);

console.log('Tree:', tree);
console.log('Height:', treeHeight(tree));