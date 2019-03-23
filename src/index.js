module.exports = function solveSudoku(matrix) {
  mainFunction(matrix);
  return matrix;
}

function mainFunction(matrix) {
  var init = [1,2,3,4,5,6,7,8,9];
  for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
          if (matrix[i][j] == 0) {
            var bufer = [];
            var finish = [];
            for (var k = 0; k < 9; k++){
              if ((matrix[i][k] != 0) && bufer.indexOf(matrix[i][k]) == -1) bufer.push(matrix[i][k]);
              if ((matrix[k][j] != 0) && bufer.indexOf(matrix[k][j]) == -1) bufer.push(matrix[k][j]);
            }
            for (var m = i-i%3; m < i-i%3+3; m++){
              for (var p = j-j%3; p < j-j%3+3; p++){
              if ((matrix[m][p] != 0) && bufer.indexOf(matrix[m][p]) == -1) bufer.push(matrix[m][p]);
              }
            }
            finish = init.filter(function(item) {
              if (bufer.indexOf(item) == -1) {return true;}
              else {return false;}
            })
            for (var q = 0; q < finish.length; q++) {
              matrix[i][j] = finish[q];
              if (mainFunction(matrix)) return true;
              matrix[i][j] = 0;
            }
            return false;
          }
        }
      }
     return true;
}
