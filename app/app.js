import { h, render } from 'preact';
import Router from 'preact-router';
import Header from './components/Header';
import Home from './containers/Home';
import About from './containers/About';

const App = () => (
    <div>
        <Header />
        <Router>
            <Home path="/" />
            <About path="/about" />
        </Router>
    </div>
);

render( <App />, document.getElementById('app'));