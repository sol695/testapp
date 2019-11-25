import * as React from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
    comp: string;
    firstName: string;
    lastName: string;
    age: number;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}! and {this.props.comp}Hi my name is {this.props.firstName} and lastname {this.props.lastName} and age : {this.props.age}</h1>;
    }
}
