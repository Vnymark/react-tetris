export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player. tetromino[y].length; x += 1) {
            // 1. Check that actual tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if (
                // 2. Check that the player move is inside the game areas height (y)
                // Player shouldn't go through the bottom of the play area.
                !stage[y + player.pos.y + moveY] ||
                // 3. Check that the player move is inside the game area width (x)
                !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                // 4. Check if the cell the player is moving to, is set to clear.
                stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
};