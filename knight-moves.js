function knightMoves(start, destination, moves = []) {
    // Base case:
    // Make sure the move is allowed.
    if (!inBounds(start) || !inBounds(destination)) {
        return;
    }
    // Check if the knight has arrived.
    if (start[0] === destination[0] && start[1] === destination[1]) {
        youMadeIt(moves);
        return;
    }

    const nextMoves = possibleMoves(start);
    const updatedMoves = moves;
    updatedMoves.push(start);
    for (const move in nextMoves) {
        // Check to make sure the move isn't already in updatedMoves
        // (Maybe use that map method of array?
        // See: https://www.reddit.com/r/learnjavascript/comments/xdp5ga/how_do_i_check_if_one_arrays_element_exist_in/)
        // If it's not:
        knightMoves(nextMoves[move], destination, updatedMoves);
    }

    return updatedMoves;
} // Currently exceeds maximum call stack. Probably because the knight keeps 
  // making the first possible move, which moves it away or moves it back to 
  // where it just was???

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

function youMadeIt(moves) {
    console.log(`You made it in ${moves.length - 1}! Here is your path:`);
    for (const move in moves) {
        console.log(`[${moves[move]}]`);
    }
}

export { knightMoves };