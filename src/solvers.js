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

return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  return NSolver(n, true);
  };

  looper(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  
  return solutionCount;
};

var hasRooksConflicts = function(board) {

  if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
    return true;
  }
  return false;
};
// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solution;
  var looper = function(row) {
    if (hasQueensConflicts(board)) {
      return;
    }
    if (row === n) {
      solution = board.rows().slice();
      return;
    }

    for (var i = 0; i < n; i++) {
      board.get(row)[i] = 1;
      looper(row + 1);
    if (solution) {  return; }
      board.get(row)[i] = 0;
    }
  };

  looper(0);
  return solution;

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n: n});
  var solutionCount = 0;
  debugger;
  var looper = function(row) {
    if (hasQueensConflicts(board)) {
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

var hasQueensConflicts = function(board) {

  if (board.hasAnyRowConflicts() || board.hasAnyColConflicts() || board.hasAnyMajorDiagonalConflicts() || board.hasAnyMinorDiagonalConflicts()) {
    return true;
  }
  return false;
};


var NSolver = function(n, isRooks) {
  var solution = [];
  var solutionCount = 0;

  var noConflicts = function (row) {
    var testU = row;
    var testD = row;
    for (var i = solution.length - 1; i >= 0; i--) {
      testU++;
      testD--;
      if(solution[i] === testD || solution[i] === testU){
        return false;
      }
    }
     return true;
   };

  // recursive fn
 
  var recursive = function() {
    if (solution.length === n) {
      solutionCount++;
      return;
    }
    // loop to all rows in next col
    for (var i = 0; i < n; i++) {
    // check for collisions
    if (!_.contains(solution, i) && (isRooks || noConflicts(i))) {
      solution.push(i);
      recursive();
      solution.pop();
    }
  }
  };
  recursive();

  return solutionCount;
};


NSolver(5, false);
