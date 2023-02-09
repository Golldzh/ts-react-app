import React, { FC, useState } from 'react';
interface EventValueProps {
  value: boolean;
  setValue: (value: boolean) => void;
}
const EventsExample: FC<EventValueProps> = ({value, setValue}) => {
  const clickHandler =(e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(!value)
  }
  return (
    <div>
      <button style={{}} onClick={clickHandler}>Показать ToDo</button>
    </div>
  );
};

export default EventsExample;