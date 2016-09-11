import { h } from 'preact';
import { Link } from 'preact-router';

export default () => (
    <header style={styles.container}>
        <h1>Sample App</h1>
        <nav>
            <Link style={styles.link} href="/">Home</Link>
            <Link style={styles.link} href="/about">About</Link>
        </nav>
    </header>
);

let styles = {
    container: {
        background: '#2D3849',
        color: '#FFF',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    link: {
        display: 'inline-block',
        margin: 10,
        textDecoration: 'none',
        color: '#FFF'
    }
};