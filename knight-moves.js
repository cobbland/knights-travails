function knightMoves(start, destination, moves = []) {
    // Base case:
    // Make sure the move is allowed.
    if (!inBounds(start) || !inBounds(destination)) {
        return null;
    }

    const currentPath = [...moves, start];

    // Check if the knight has arrived.
    if (start[0] === destination[0] && start[1] === destination[1]) {
        youMadeIt(currentPath);
        return currentPath;
    }

    const nextMoves = possibleMoves(start).filter(move => {
        return !currentPath.some(visited =>
            visited[0] === move[0] && visited[1] === move[1]
        );
    });

    for (const move of nextMoves) {
        const result = knightMoves(move, destination, currentPath);
        if (result) {
            return result;
        }
    }

    return null;
} 

function inBounds(location) {
    let isInBounds = 0;
    for (const number in location) {
        if (location[number] < 8 && location[number] >= 0) {
            ++isInBounds;
        }
    }
    if (isInBounds === 2) {
        return true;
    } else {
        return false;
    }
}

function possibleMoves(start) {
    const movesList = [];
    const possibleMovesArr = [
        [-2, -1], [-2, 1],
        [-1, -2], [-1, 2],
        [2, -1], [2, 1],
        [1, -2], [1, 2]
    ];
    for (const move in possibleMovesArr) {
        const thisMove = [
            start[0] + possibleMovesArr[move][0],
            start[1] + possibleMovesArr[move][1]
        ];
        if (inBounds(thisMove)) {
            movesList.push(thisMove);
        }
    }
    return movesList;
}

function youMadeIt(moves) {
    console.log(`You made it in ${moves.length - 1}! Here is your path:`);
    for (const move in moves) {
        console.log(`[${moves[move]}]`);
    }
}

export { knightMoves };