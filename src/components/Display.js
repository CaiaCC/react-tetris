import React from 'react';

import { StyledDispaly } from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => (
    <StyledDispaly>{text}</StyledDispaly>
);

export default Display;