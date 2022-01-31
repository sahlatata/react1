import logo from './logo.svg';
import './App.css';
import Navbarblanc from './component/Navbarblanc';
import Formulaire from './component/Formulaire';

function App() {
  return (
<div>
            <Navbarblanc/>
            
  
       <div class="container overflow-hidden">
        <div class="row gx-5">
        <div class="col">
        <div class="p-3 border bg-light"><Formulaire/>
        </div>
        </div>
          
        </div>
      </div>

</div>
  );
}

export default App;
