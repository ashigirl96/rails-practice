import * as React from 'react';

interface ISquareProps {
    value: any;
    onClick: () => void;
}

function Square(props: ISquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

// class Square extends React.Component<ISquareProps> {
//     // public handleOnClick = () => this.setState({value: "X"});
//     Square(props: ISquareProps) {
//         return (
//             <button className="square" onClick={props.onClick}>
//                 {props.value}
//             </button>
//         )
//     }
//     public render() {
//         Square(this.props);
//     }
// }

export default Square;