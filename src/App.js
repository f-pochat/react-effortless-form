import './App.css';
import {Form} from "./components";
import {Email} from "./components/inputs";

function App() {
  return (
    <Form
        backgroundColor={'#f00'}
        backgroundImage='https://images.freeimages.com/images/large-previews/d0f/nuclear-power-plant-1314782.jpg'
    >
        <Email/>
    </Form>
  );
}

export default App;
