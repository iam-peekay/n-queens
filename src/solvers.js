/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// Returns a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
    return NSolver(n, true, true);
};

window.countNRooksSolutions = function(n) {
  return NSolver(n, true);
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  return NSolver(n, false, true);

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  return NSolver(n, false);
};

var NSolver = function(n, isRooks, singleSolution) {
  // variable to hold an array of the solution
  var solution = [];
  // counter variable for # of solutions
  var solutionCount = 0;
  // variable to hold temp solution array if we need to build a matrix
  var solutionArr ;

  // function to determine if a conflict exists in the current row count (check all previous rows placed)
  var noConflicts = function(row) {
    var testU = row;
    var testD = row;
    for (var i = solution.length - 1; i >= 0; i--) {
      testU++;
      testD--;
      if (solution[i] === testD || solution[i] === testU) {
        return false;
      }
    }
    return true;
  };

  // Helper function to build up the board as an array of arrays
  var buildMatrix = function(arr) {
    var board = new Array(n) ;
    for (var j = 0; j < n; j++) {
      board[j] = new Array(n);
      for (var k = 0; k < n; k++) {
        board[j][k] = 0;
      }
    }
    if (arr) {
      for (var i = 0; i < n; i++) {
        board[arr[i]][i] = 1;
      }
    }
    return board;
  };

  // We use a backtracking approach
  // Since we know that each row can at most have 1 item, we can use the approach below of just going through each row once and placing an item, then moving onto the next row and so on until there is a conflict (in which case you exit) or you reach the last row without conflicts (in which case you have one solution)
  var recursive = function() {
    // if we have an array of length n
    if (solution.length === n) {
      // if we need a output matrix single solution, we turn the current solution into an array
      if(singleSolution){
        solutionArr = solution.slice();
      }else{ // else, if we only need to keep track of the count, we increment count
        solutionCount++;
      }
      return;
    }

    // loop to all rows in next column
    for (var i = 0; i < n; i++) {
      // check for collisions AND check if it's EITHER rooks (i.e. in which case we don't need diagonal conflict check)
      // OR if it's not rooks we do need to check diagonal (i.e. noConflicts function check)
      if (!solutionArr && !_.contains(solution, i) && (isRooks || noConflicts(i))) {
        // if all above pass, push the current i into solution and recurse to go to next i
        solution.push(i);
        recursive();
        solution.pop();
      }

    }
  };
  recursive();

  return singleSolution? buildMatrix(solutionArr):solutionCount;
};
