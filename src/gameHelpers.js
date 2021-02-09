export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// create the stage using a multi-dimension(nested) array contains rows and columns(grid)
export const creatStage = () => Array.from(Array(STAGE_HEIGHT), () => new Array(STAGE_WIDTH).fill([0, 'clear']))
