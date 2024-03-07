import React from 'react';
export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Hello From Class Comppnent State",
            obj: {
                name: "Yacine",
                age: 22,
            }
        };

    }
    render() {
        return <><h1>{this.state?.name}, {this.state.obj.name}</h1></>;
    }
}