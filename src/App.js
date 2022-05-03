
import './App.css';
import { Noticias } from './componets/noticias';
import { Jkanime } from './routes/jkanime';
import {gql} from '@apollo/client'

function App() {
  const noticias= gql`
  {
    noticias(limit:5){
      nombre
      hora
      img
      href
    }
  }
  `

  return (
    <div className="App">
      <h1>scraping la web de JKANIME</h1>
      <Noticias script={noticias}/>
      <Jkanime/>
    </div>
  );
}

export default App;
