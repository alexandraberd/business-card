import React from 'react';
import Sprite from '../assets/sprite.svg';

const SpriteSvg = ({ id, color, size }) => (
    <svg className="sprite__icon" fill={color} width={size} height={size}>
        <use href={`${Sprite}#${id}`} />
    </svg>
);

export default SpriteSvg;
