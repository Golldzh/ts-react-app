import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
  return (
    <div>
      <Card 
        variant={CardVariant.outlined}
        width='200px' 
        height='200px'
        onClick={()=> console.log('click')}
      >
        <button>Кнопка</button>
        <div>sdfvdf</div>
      </Card>
    </div>
  );
};

export default App;