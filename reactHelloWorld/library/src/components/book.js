import React from 'react';
import axios from 'axios';

class Book extends React.Component{

    // constructor(props){
    //     super(props);
    // }

    state = {
        info : ""
    }

    emptyState(info){
        if(info === ''){
            return (<div>cargando ...</div>)
        }else{
            return (
                <div>
                    <h4>{info.tittle}</h4>
                    <h4>{info.desc}</h4>
                </div>
            )
        }
    }

    componentWillMount(){
        setTimeout(()=>{
        axios.get('http://localhost:4000/book/'+ this.props.match.params.bookId)
            .then((res)=>{
                this.setState({info: res.data});
            })
            .catch((err)=>{
                console.log(err);
            })
        },5000)
    }

    render () {

        return(
            <div>
                {this.emptyState(this.state.info)}
            </div>
    )}
}

export default Book;