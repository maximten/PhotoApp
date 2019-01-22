import React from 'react'
export default class Photo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          index:0,
        }
    }

    componentDidMount(){
        var c = this.props.match.params.id - 1;
        console.log(c);
        this.setState({
            index:c
        })
    }

    render(){
        return (
            <p> {this.state.index}</p>
        )
     }
}
