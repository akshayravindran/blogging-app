import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header title="Blogging App" />
      </BrowserRouter>
    </div>
  );
}

export default App;