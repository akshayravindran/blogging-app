import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header title="Blogging App" />
        <Main />
        <Footer title="Blogging App" copyright="&reg; All Rights Reserved" />
      </BrowserRouter>
    </div>
  );
}

export default App;