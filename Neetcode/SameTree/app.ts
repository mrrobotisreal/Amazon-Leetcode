// Getting inconsistent results with this solution, needs word

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

// @ts-ignore
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

function isSameTree(
  p: TreeNode | null, q: TreeNode | null, pStr: string | undefined = "", qStr: string | undefined = ""
): boolean {
  if (!p && !q) {
    return true;
  }
  if ((!p && q) || (p && !q)) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//@ts-ignore
let rootTree: TreeNode = new TreeNode(0, firstLeft, firstRight);
//@ts-ignore
let firstLeft: TreeNode = new TreeNode(1, pLeft, pRight);
//@ts-ignore
let firstRight: TreeNode = new TreeNode(1, qLeft, qRight);
let pLeft: TreeNode = new TreeNode(2, null, null);
let pRight: TreeNode = new TreeNode(4, null, null);
let qLeft: TreeNode = new TreeNode(2, null, null);
let qRight: TreeNode = new TreeNode(4, null, null);

//@ts-ignore
let rootTree2: TreeNode = new TreeNode(0, firstLeft2, firstRight2);
//@ts-ignore
let firstLeft2: TreeNode = new TreeNode(1, pLeft2, pRight2);
//@ts-ignore
let firstRight2: TreeNode = new TreeNode(1, qLeft2, qRight2);
let pLeft2: TreeNode = new TreeNode(2, null, null);
let pRight2: TreeNode = new TreeNode(4, null, null);
let qLeft2: TreeNode = new TreeNode(2, null, null);
let qRight2: TreeNode = new TreeNode(4, null, null);

//@ts-ignore
let rootTree3: TreeNode = new TreeNode(0, firstLeft3, firstRight3);
//@ts-ignore
let firstLeft3: TreeNode = new TreeNode(1, pLeft3, pRight3);
//@ts-ignore
let firstRight3: TreeNode = new TreeNode(1, qLeft3, qRight3);
let pLeft3: TreeNode = new TreeNode(2, null, null);
let pRight3: TreeNode = new TreeNode(4, null, null);
let qLeft3: TreeNode = new TreeNode(2, null, null);
let qRight3: TreeNode = new TreeNode(4, null, null);4
//@ts-ignore
let rootTree4: TreeNode = new TreeNode(0, firstLeft4, firstRight4);
//@ts-ignore
let firstLeft4: TreeNode = new TreeNode(1, pLeft4, pRight4);
//@ts-ignore
let firstRight4: TreeNode = new TreeNode(1, qLeft4, qRight4);
let pLeft4: TreeNode = new TreeNode(8, null, null);
let pRight4: TreeNode = new TreeNode(4, null, null);
let qLeft4: TreeNode = new TreeNode(5, null, null);
let qRight4: TreeNode = new TreeNode(9, null, null);

console.log(isSameTree(rootTree, rootTree2)); // true
console.log(isSameTree(rootTree3, rootTree4)); // false