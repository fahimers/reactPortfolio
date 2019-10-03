import React from 'react';
import ReactDom from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import './index.css';
import { resolve } from 'path';
import Jokes from './components/Jokes'
import { BrowserHistory } from 'react-history'
import Header from './components/Header';


ReactDom.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header> <App /> </Header>} />
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
        </Switch>
    </Router>,
    document.getElementById('root')
);



/* Testar
new Promise(resolve, reject => {

return reject(new Error('Wrong API call'));
setTimeout(() => {

    console.log('Bears');
resolve('Bears, Beets, Battlestar Galactica');
}, 2000);

})
.then(quote => {
    console.log(quote);

})
.catch(error => console.log('error', error));
*/

/*
class Animal{
        constructor(name, age){

        this.name = name;
    this.age =age;
}
    speak(){
        console.log(' I am', this.name, 'and I am ', this.age, 'years old');

}
}

const animal1 = new Animal('Simba', 3);
animal1.speak();

class Lion extends Animal{
        constructor(name, age, furColor, speed){


        super(name, age);

    this.furColor = furColor;
    this.speed = speed;

}

roar(){
        console.log('ROOOR! I have',
            this.furColor,
            'fur and I  can run ',
            this.speed,
            'km an hour!');
}
}
const lion1 = new Lion('Musfasa', 20, 'golden', 25);

lion1.speak();
lion1.roar();
console.log(lion1);*/