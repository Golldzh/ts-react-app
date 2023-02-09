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
          border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
          background: variant === CardVariant.primary ? 'lightgrey' : '',
          display: "flex",
          justifyContent: 'space-around',
          margin:'0 auto',
          alignItems: 'center',
          marginBottom: 20,
        }}
        onClick={onClick}
      >
        {children}
      </div>
    ); 
};

export default Card;