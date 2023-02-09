import { NavLink } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Card, { CardVariant } from './components/Card';

const App = () => {
  return (
    <BrowserRouter>
      <Card 
          variant={CardVariant.outlined}
          width='500px' 
          height='50px'
          onClick={()=> console.log('click')}
      >
        <NavLink to = '/users'>Пользователи</NavLink>
        <NavLink to = '/todos'>Список дел</NavLink>
      </Card>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;