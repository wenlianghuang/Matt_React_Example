import React from 'react';

class Car extends React.Component {
    constructor(props){
        super(props);
        this.createMarkup = this.createMarkup.bind(this);
    }
    createMarkup(){
        return {__html: 'First &middot; Second'}
    }
    render(){
        return <div dangerouslySetInnerHTML={this.createMarkup()}/>
    }
}

export default Car;