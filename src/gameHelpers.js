export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// create the stage: a multi-dimension(nested) array that contains rows and columns(grid)
export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )
