import React, { FC } from 'react';
import {PropsWithChildren} from 'react'; 

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps extends PropsWithChildren{
  width: string;
  height?: string;
  variant: CardVariant,
  onClick: () => void
}
const Card: FC<CardProps> = 
  ({
    width, 
    height, 
    children,
    variant,
    onClick
  }) => {
    return (
      <div 
        style = {{
          width, 
          height, 
          border: variant === CardVariant.outlined ? '10px solid gray' : 'none',
          background: variant === CardVariant.primary ? 'lightgrey' : ''}}
        onClick={onClick}
      >
        {children}
      </div>
    ); 
};

export default Card;