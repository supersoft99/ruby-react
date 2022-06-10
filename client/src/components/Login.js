import * as React from 'react';

import '../Login.scss';

const mode = 'login';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.mode
        }
    }
    toggleMode() {
        var newMode = this.state.mode === 'login' ? 'signup' : 'login';
        this.setState({ mode: newMode});
    }

    onSubmit() {
        console.log(`submitting login form to backend..`);
        console.log(`STATE: ${JSON.stringify(this.state)}`);
    }

    render() {
        return (
            <div>
                <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
                <section className={`form-block form-block--is-${this.state.mode}`}>
                    <header className="form-block__header">
                        <h1>{this.state.mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
                        <div className="form-block__toggle-block">
                            <span>{this.state.mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
                            <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
                            <label htmlFor="form-toggler"></label>
                        </div>
                    </header>
                    <LoginForm mode={this.state.mode} onSubmit={this.onSubmit.bind(this)} />
                </section>
            </div>
        )
    }
}

class LoginForm extends React.Component {
    // onSubmit() {
    //     console.log(`submitting login form to backend..`);
    //     console.log(`STATE: ${JSON.stringify(this.state)}`);
    // }

    onSubmit() {
    
        const data = {
            "username": 'doctor3',
            "password": 'pass',
            "user_type": 'doctor',
        }
    
        fetch(`http://localhost:3000/login`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(user => {
              console.log(`Logged In as: ${JSON.stringify(user)}`);
          })
      }

    render() {
        return (
        <form onSubmit={this.onSubmit()}>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">
                    <Input type="text" id="username" label="user name" disabled={this.props.mode === 'signup'}/>
                    <Input type="password" id="password" label="password" disabled={this.props.mode === 'signup'}/>
                </div>
                <div className="form-group form-group--signup">
                    <Input type="text" id="fullname" label="full name" disabled={this.props.mode === 'login'} />
                    <Input type="username" id="username" label="user name" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="createpassword" label="password" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="repeatpassword" label="repeat password" disabled={this.props.mode === 'login'} />
                </div>
            </div>
            <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Log In 12' : 'Sign Up'}</button>
        </form>
        )
    }
}

const Input = ({ id, type, label, disabled }) => (
    <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
);

export default function App(){
   return <div className={`app app--is-${mode}`}>
        <LoginComponent
            mode={mode}
        />
    </div>
};


