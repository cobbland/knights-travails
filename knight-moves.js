function knightMoves(start, destination, moves = []) {
    // Base case:
    // Make sure the move is allowed.
    if (!inBounds(start) || !inBounds(destination)) {
        return;
    }
    // Check if the knight has arrived.
    if (start === destination) {
        console.log(`You made it in ${moves.length - 1}! Here is your path:`);
        for (const move in moves) {
            console.log(`[${moves[move]}]`);
        }
        return;
    }



    moves.push(start);
    moves.push(destination);

    // Log the results.
    console.log(`You made it in ${moves.length - 1}! Here is your path:`);
    for (const move in moves) {
        console.log(`[${moves[move]}]`);
    }
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
        [-2, -1], [-2, +1],
        [-1, -2], [-1, +2],
        [+2, -1], [+2, +1],
        [+1, -2], [+1, +2]
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

export { knightMoves };