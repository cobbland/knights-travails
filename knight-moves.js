function knightMoves(start, destination) {
    // Make sure the move is allowed.
    if (!inBounds(start) || !inBounds(destination)) {
        return null;
    }

    // Make sure start and destination aren't the same.
    if (start[0] === destination[0] && start[1] === destination[1]) {
        console.log("started at destination");
        return youMadeIt([start, destination]);
    }

    // Find the shortest path.
    const moveQueue = [[start, [start]]];
    while (moveQueue.length > 0) {
        const current = moveQueue.shift();
        const currentLocation = current[0];
        const currentPath = current[1];
        const nextMoves = possibleMoves(currentLocation);
        for (const move of nextMoves) {
            const newPath = [...currentPath, move];
            if (move[0] === destination[0] && move[1] === destination[1]) {
                return youMadeIt(newPath);
            }
            moveQueue.push([move, newPath]);
        }
    }

    // If for some reason a path isn't found.
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
    console.log(`You made it in ${moves.length - 1} moves! Here is your path:`);
    for (const move in moves) {
        console.log(`[${moves[move]}]`);
    }
}

export { knightMoves };