import _ from 'lodash';
// import 'index.html';
import printMe from './print.js';
import './components/styles/main.css';

function component() {

    let element = document.createElement('div');
    let btn = document.createElement('button');

    element.innerHTML = _.join([ 'Hello', 'webpack' ], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

let element = component(); // Store the element to re-render on print.js changes


if ( module.hot ) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}

document.body.appendChild(component());