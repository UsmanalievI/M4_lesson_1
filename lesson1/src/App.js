import './App.css';
import Button from './componentss/button/Button';
import User from './componentss/user/User';
import Example from './componentss/example/example';
import Header from './componentss/header/Header';

function App() {
  const navbar=['home', 'about us', 'contacts']
  return (
    <>
      <Header navbar={navbar}/>
      <Button text={'open'}/>
      <Button text={'close'}/>
      <Button text={'redirect'}/>
      <User name={'Bakyt'} age={'18'}/>
      <Example>
        <h1>Hello</h1>
        </Example>
    </>
    
  );
}

export default App;
