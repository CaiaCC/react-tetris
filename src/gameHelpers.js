export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// create the stage: a multi-dimension(nested) array that contains rows and columns(grid)
export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, "clear"])
    );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y++) {
        for (let x = 0; x < player.tetromino[0].length; x++) {
        // 1. check that we're on an actual Tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if (
                // 2. check that our move is inside the stage height (y)
                // we shouldn't go through the bottom of the stage
                !stage[y + player.pos.y + moveY] ||
                // 3. check that our move is inside the stage width (x)
                !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                // 4. check that the cell we're moving to isn't set to clear
                stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
                    "clear"
                ) {
                return true;
                }
            }
        }
    }
    // 5. If everything above is false
    return false;
};
