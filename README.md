# React-Effortless-Form

Create an effortless, styled form in a few lines!

Live demos in progress, coming soon...

Features include:

- Easy inputs
- Create a styled form container
- Labels, Button and Wrappers
- More inputs coming soon!

## Installation and Usage

The easiest way to install is with npm
```
npm i react-effortless-form
```

#### With React Hooks

```jsx
import {Form, EmailInput, Wrapper, Label, PasswordInput, SubmitButton} from 'react-effortless-form';
import {useState} from "react";

const App = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div
            style={{
                backgroundImage: 'url(https://wallpaperaccess.com/full/6854780.jpg)',
                backgroundSize: '50%',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Form
            >
                <Label
                    style={{
                        fontSize: 50,
                        fontWeight: 'bold',
                    }}
                >
                    Login
                </Label>
                <Wrapper>
                    <EmailInput
                        onChange={(val) => setEmail(val)}
                        size={2}
                    />
                    <PasswordInput
                        onChamge={(val) => setPassword(val)}
                        size={2}
                    />
                </Wrapper>
                <SubmitButton
                    style={{width: '300px', textAlign: 'center'}}
                    submitMessage='Log In'
                    onSubmit={() => console.log({email: email, password: password})}
                />
            </Form>
        </div>
    );
}

export default App;
```

<a href="https://ibb.co/sjZ6K6j"><img src="https://i.ibb.co/WnLPkPn/Screenshot-from-2022-08-30-16-50-20.png" alt="Screenshot-from-2022-08-30-16-50-20" border="0"></a>
## Props

### Form

| **Prop**       | **Type**                               | **Default**               | **isRequired** | **Description**                                        |
|----------------|----------------------------------------|---------------------------|----------------|--------------------------------------------------------|
| containerColor | color                                  | 'white'                   | no             | Given a form a container is created with a plain color |
| containerSize  | object (width: string, height: string) | width:'50%' height: '75%' | no             | Sets the size for the form container                   |
| boxShadow      | bool                                   | true                      | no             | Whether there is a shadow below the container or not   |

### TextInput

| **Prop**        | **Type**                 | **Default** | **isRequired** | **Description**                                            |
|-----------------|--------------------------|-------------|----------------|------------------------------------------------------------|
| textLabel       | string                   | -           | yes            | Sets the label for the input (username, fullname, etc.)    |
| labelColor      | color                    | 'white'     | no             | Sets the color for the label when not selected             |
| textInputColor  | color                    | 'white'     | no             | Sets the color for the input text and the cursor           |
| errorColor      | color                    | 'red'       | no             | Sets the color for when the field is not valid             |
| successColor    | color                    | 'green'     | no             | Sets the color for when the field is valid                 |
| onChange        | function                 | -           | yes            | The function to set what happens when the input is changed |
| regexValidation | regex                    | /\w+/       | no             | Regex to validate field and change color                   |
| inputType       | ['number','text','password'] | 'text'      | no             | Sets the input type for keyboard and how it is shown       |
| minLength       | number                   | 0           | no             | Minimum length required for the field for validation       |
| maxLength       | number                   | 255         | no             | Maximum length required for the field for validation       |
| size            | [1,2,3]                  | 1           | no             | Sets the input size                                        |

### EmailInput

It contains the same props as TextInput except the regexValidation is for email validation
and `textLabel` is now called `emailLabel`, it is not required and the default value is `'Email'`

### PasswordInput

It contains the same props as TextInput except the `inputType` is `'password'` and
the `textLabel` is now `passwordLabel`, it is not required, and the default value is `'Password'`

### SubmitButton

| **Prop**              | **Type** | **Default**           | **isRequired** | **Description**                             |
|-----------------------|----------|-----------------------|----------------|---------------------------------------------|
| submitText            | string   | 'Submit'              | no             | The text for the button                     |
| submitButtonColor     | color    | 'black'               | no             | The background color of the button          |
| submitButtonTextColor | color    | 'white'               | no             | The color of the button text                |
| className             | string   | 'submit-button-class' | no             | Sets the classname for styling the button   |
| style                 | object   | {}                    | no             | Styling the button with inline react styles |

### Label

| **Prop**        | **Type** | **Default** | **isRequired** | **Description**                            |
|-----------------|----------|-------------|----------------|--------------------------------------------|
| submitTextvlaue | string   | ''          | no             | The text for the label                     |
| className       | string   | ''          | no             | Sets the classname for styling the label   |
| style           | object   | {}          | no             | Styling the label with inline react styles |

## License

MIT Licensed. Copyright (c) 2022 Federico Pochat