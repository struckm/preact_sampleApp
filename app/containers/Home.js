import { h, Component } from 'preact';
import List from '../components/List';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            value: ''
        }
    }

    renderItem = (item) => {
        return '';
    }

    onInput = (event) => {
        this.setState({value: event.target.value});
    }

    render({}, {items, value}) {
        return (
            <div>
                <input placeholder="Search..." style={styles.input} value={value} onInput={this.onInput} />
                <List items={items} renderItem={this.renderItem}/>
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