import MyNameIs from './MyNameIs';
import React from 'react';
//import style from '../styles/main.scss';

class InputName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '?????'};
    }

    render() {
        return (
          <div className="input-name">
            <input
              type="text"
              onChange={this.onUpdate.bind(this)} />
            <MyNameIs name={this.state.name} />
          </div>
        );
    }

    onUpdate(e) {
        this.setState({
            name: e.target.value
        });
    }
}

export default InputName;
