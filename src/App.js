import React, { Component } from 'react';
import Projects from './Projects';
import Socials from './Socials';
import eli from './assets/Eli.jpg';
/*
class RegularClass{}

class ComponentClass extends Component{}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);*/

class App extends Component {

    state = { displayBio: false }; //<-- detta gör så vi sliper ha med det i kontruktorn 


    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
        // this.state.displayBio = !this.state.displayBio; gör inte så eftersom man måste använda sig av setstate
    }
    render() {

        return (
            <div>
                <img src={eli} alt='profile' className='profile' />
                <h1> Hello</h1>
                <p> My name is Elias, I am a front end developer.</p>
                <p>I always strive to be highly dedicated and ambitious as a developer. I love to solve new and exciting challenges and I have an eye for desgin, my favorite languages are Javascript,react, Java, HTML, CSS and SQL .
               My former employer would describe me as a fast-paced, stress-resistant and ambitious guy. I work well in groups and have a big interest in IT.</p>

                {

                    this.state.displayBio ? (
                        <div>
                            <p>I live in Sweden, Stockholm</p>
                            <p>Besides coding everyday I also love gaming and anime.</p>

                            <button onClick={this.toggleDisplayBio}>Show Less </button>
                        </div>

                    ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read more</button>
                            </div>
                        )

                }



                <hr />
                <Projects />
                <hr />
                <Socials />
            </div>

        )
    }
}

export default App;