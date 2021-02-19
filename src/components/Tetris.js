import React from 'react'

// Styles
import { creatStage } from '../gameHelpers';
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton'

const Tetris = () => {
    return (
      <StyledTetrisWrapper>
        <StyledTetris>
            <Stage stage={creatStage()} />
            <aside>
                <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
                </div>
                <StartButton />
            </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    );
};

export default Tetris;