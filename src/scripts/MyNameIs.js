import React from 'react';

class MyNameIs extends React.Component {
    render() {
        return (<p>Hello {this.props.name}!</p>);
    }
}

export default MyNameIs;
