import './App.css';
import {Form} from "./components";
import {EmailInput, Label, PasswordInput, TextInput} from "./components/inputs";
import {useState} from "react";

function App() {
      return (
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor:'red', height: '100vh', alignItems:'center'}}>
            <Form containerColor='#ddd'>
                <Label
                    value='Register'
                    className='login-label'
                />
                <TextInput
                    textLabel={'Chala'}
                    minLength={5}
                    onChange={e => console.log(e)}
                />
                <EmailInput
                    onChange={e => console.log(e)}
                />
                <PasswordInput
                    onChange={e => console.log(e)}
                />
            </Form>
        </div>
      );
}

export default App;
