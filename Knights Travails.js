function knightMoves(start, end) {
    const board = 8;
    const moves = [
      [2, 1],
      [1, 2],
      [-2, 1],
      [-1, 2],
      [2, -1],
      [1, -2],
      [-2, -1],
      [-1, -2],
    ];
    const q = [[start]];
    const vis = [[...start]];
  
    while (q.length > 0) {
      const path = q.shift();
      const currentPos = path[path.length - 1];
  
      if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
        return path;
      }
  
      for (const move of moves) {
        const nextPos = [
            currentPos[0] + move[0],
            currentPos[1] + move[1],
        ];
        const isVis = vis.some((arr) => {
          return (
            Array.isArray(arr) &&
            arr.every((item, index) => item === nextPos[index])
          );
        });
        if (
            nextPos[0] >= 0 &&
            nextPos[0] < board &&
            nextPos[1] >= 0 &&
            nextPos[1] < board &&
          !isVis
        ) {
          q.push([...path, nextPos]);
          vis.push(nextPos);
        }
      }
    }
    return null;
  }
  
  function pathPrinter(pathArray) {
    console.log(
      `You made it in ${pathArray.length - 1} moves!  Here's your path:`
    );
    for (let i = 0; i < pathArray.length; i++) {
      console.log(pathArray[i]);
    }
  }
  

  // Test case 1
const start1 = [0, 0];
const end1 = [2, 1];
const path1 = knightMoves(start1, end1);
pathPrinter(path1);

// Test case 2
const start2 = [3, 3];
const end2 = [6, 6];
const path2 = knightMoves(start2, end2);
pathPrinter(path2);

// Test case 3 
const start3 = [0, 0];
const end3 = [7, 7];
const path3 = knightMoves(start3, end3);
pathPrinter(path3);

// Test case 4 (Starting and ending at the same position)
const start4 = [4, 4];
const end4 = [4, 4];
const path4 = knightMoves(start4, end4);
pathPrinter(path4);

