/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function maxDepth(root: TreeNode | null): number {
  // let max: number = 0;
  // let depth: number = 0;

  // function traverse(root: TreeNode | null, depth: number): number {
  //   if (root.left)
  // }
  if (!root) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

let thirdLeft: TreeNode = new TreeNode(6, null, null);
let secondRight: TreeNode = new TreeNode(7, null, null);
let secondLeft: TreeNode = new TreeNode(8, null, null);
let firstRight: TreeNode = new TreeNode(4, thirdLeft, null);
let firstLeft: TreeNode = new TreeNode(1, secondLeft, secondRight);
let rootTree: TreeNode = new TreeNode(0, firstLeft, firstRight);

console.log(maxDepth(rootTree));