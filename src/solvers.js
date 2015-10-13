/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
    // build the board
  var board = new Board({'n': n});
  var count = 0;

  // helper function takes in current board
  var backTracker = function(board, n) {
      // we randomly generate a new [row, index]
    // debugger;
    var randCol = Math.floor(Math.random() * n);
    var randRow = Math.floor(Math.random() * n);
    // add the new tester rook to the board
    if (!board.get(randRow)[randCol] ) {
    board.get(randRow)[randCol] = 1;
    // test for row or column collision
    if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
      // else, backtrack  
      board.get(randRow)[randCol] = 0;
    } else {
      // if none, keep the current rook
      // increment count
      count++;
    }
  }
};

  while(count < n) {
    backTracker(board, n);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //     // build the board
  //   var board = new Board({'n': n});
  //   var count = 0;
  //   var runCount = 0;

  //   // helper function takes in current board
  //   var backTracker = function(board, n) {
  //     runCount++;
  //       // we randomly generate a new [row, index]
  //     // debugger;
  //     var randCol = Math.floor(Math.random() * n);
  //     var randRow = Math.floor(Math.random() * n);
  //     // add the new tester rook to the board
  //     if (!board.get(randRow)[randCol] ) {
  //     board.get(randRow)[randCol] = 1;
  //     // test for row or column collision
  //     if (board.hasAnyRowConflicts() || board.hasAnyColConflicts() || board.hasAnyMajorDiagonalConflicts() || board.hasAnyMinorDiagonalConflicts()) {
  //       // else, backtrack  
  //       board.get(randRow)[randCol] = 0;
  //     } else {
  //       // if none, keep the current rook
  //       // increment count
  //       count++;
  //     }
  //   }
  // };

  //   while(count < n) {
  //     backTracker(board, n);
  //     if(runCount > 20){
  //       board = new Board({'n':n});
  //       count = 0;
  //       runCount = 0;
  //     }
  //   }

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
  // return board.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n: n});
  var solutionCount = 0;

  var looper = function(row) {
    if (hasConflicts(board)) {
      return;
    }
    
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.get(row)[i] = 1;
      looper(row + 1);
      board.get(row)[i] = 0;
    }
  };

  looper(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  
  return solutionCount;
};

var hasConflicts = function(board) {

  if (board.hasAnyRowConflicts() || board.hasAnyColConflicts() || board.hasAnyMajorDiagonalConflicts() || board.hasAnyMinorDiagonalConflicts()) {
    return true;
  }
  return false;
}
// find all available space

//  return all numbers (1 to n) to 1

// test for duplicates

//count success cases

// RECURSIVE function
// base case: if n === 1 { return true }
// for (var i = 0; i < n; i++) {
//  current = i
//    for (var j < current) {
//      prev = current[j]
//       if (j === i) { return }
//       place a queen, check if it's valid with no collisions
//      if it is, you let the loop run to the next column
//      if not, then re
//        
// }
//          
// }

// //solving for nrooks first
// var NSolver = function(n, queens){
//   var solutions = [];
//   var usedRow = [];

//   // var sortFn = function (a, b) {
//   //   return a-b;
//   // };

//   // recursive fn
//   var recursive = function (solution, row) {
//     // body...
//     var col = solution.length;
  
//     //take next row 

//     // if n queens, return.

//     //else kill recursion if remaining possible spots < no queens left

//     // loop to all rows in next col
//     for (var i = 0; i < n; i++) {
//       if(_.indexOf(usedRow, i, false) === -1 ){

//         recusive(solution, ??col??)

       
//       }
//       // only recurse if no collisions
//   };

//   recusive([],0)


//   //call recusive fn on the smallest unit

// }
