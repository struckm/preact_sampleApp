import { h, Component } from 'preact';
import List from '../components/List';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    renderItem() {
        return '';
    }

    render() {
        return (
            <div>
                <input style={styles.input} />
                <List items={[]} renderItem={this.renderItem}/>
            </div>
        );
    }
}

const styles = {
    input: {
        width: '100vw',
        height: 60,
        padding: 20,
        fontSize: '1.2em'
    }
}

export default Home;