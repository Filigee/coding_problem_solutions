// https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript

function mazeRunner(maze, directions) {
    var path = Array(), curX, curY;
    for (var i = 0; i < maze.length; i++) {
      for (var j = 0; j < maze[i].length; j++) {
        if (maze[i][j] == 2) {
          curX = j;
          curY = i;
        }
      }
    }
    for (var i = 0; i < directions.length; i++) {
      if (directions[i] == 'N') curY--;
      if (directions[i] == 'S') curY++;
      if (directions[i] == 'W') curX--;
      if (directions[i] == 'E') curX++;
      
      // path.push(maze[curY][curX]);
      if (!maze[curY]) return 'Dead';
      if (maze[curY][curX] == 3) return 'Finish';
      if (maze[curY][curX] == undefined || maze[curY][curX] == 1) return 'Dead';
    }
    return 'Lost';
  }