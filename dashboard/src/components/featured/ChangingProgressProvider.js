import React from 'react'

export default class ChangingProgressProvider extends React.Component {
    static defaultProps = {
        interval: 1000
    };

    state = {
        valueIndex: 0,
    };

    componentDidMount(){
        setInterval(() => {
            this.setState({
                valueIndex: (this.state.valueIndex + 1)% this.props.values.length
            });
        }, this.props.interval);
    }
  render() {
    return (
        this.props.children(this.props.values[this.state.valueIndex])
    )  
    
  }
}
