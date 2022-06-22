/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

function isValidSudoku(board: string[][]): boolean {
  const digits:RegExp = /\d/g;
  let col1:string[] = [];
  let col2:string[] = [];
  let col3:string[] = [];
  let col4:string[] = [];
  let col5:string[] = [];
  let col6:string[] = [];
  let col7:string[] = [];
  let col8:string[] = [];
  let col9:string[] = [];
  let cols:string[][] = [];
  cols.push(col1);
  cols.push(col2);
  cols.push(col3);
  cols.push(col4);
  cols.push(col5);
  cols.push(col6);
  cols.push(col7);
  cols.push(col8);
  cols.push(col9);
  for (let i:number = 0; i < board.length; i++) {
    let nums:string[] = board[i].join('').match(digits);
    let rowSet = new Set<string>(nums);
    if (nums.length > rowSet.size) {
      console.log('FAIL row');
      return false;
    }
    for (let j:number = 0; j < board[i].length; j++) {
      eval(`col${j + 1}.push(board[i][j])`);
    }
  }
  console.log('col1 -> ', col1);

  for (let i:number = 0; i < cols.length; i++) {
    let nums:string[] = cols[i].join('').match(digits);
    let rowSet = new Set<string>(nums);
    if (nums.length > rowSet.size) {
      console.log('FAIL col');
      return false;
    }
  }

  return true;
};

const testBoard = [
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

const failRowBoard = [
 ["5","3","3",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

const failColBoard = [
 ["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(failRowBoard));