import React from 'react';

export interface ButtonProps {
    title: string,
}

export const Button:React.FC<ButtonProps> = (props) => {
    const { title } = props;
    return (
        <input type={'button'} value={title} />
    );
  };