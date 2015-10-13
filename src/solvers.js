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
  var solution = [];
  var solutionCount = 0;
  var solutionArr ;

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

  var recursive = function() {
    if (solution.length === n) {
      if(singleSolution){
        solutionArr = solution.slice();
      }else{
        solutionCount++;
      }
      return;
    }
    // loop to all rows in next col
    for (var i = 0; i < n; i++) {
      // check for collisions
      if (!solutionArr && !_.contains(solution, i) && (isRooks || noConflicts(i))) {
        solution.push(i);
        recursive();
        solution.pop();
      }

    }
  };
  recursive();

  return singleSolution? buildMatrix(solutionArr):solutionCount;
};

