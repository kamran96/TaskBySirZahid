import React, {Component} from "react";
import {connect} from "react-redux";
import { selectBook } from './../actions/index';
import {bindActionCreators} from "redux";
import { ListGroup, ListGroupItem} from "reactstrap";





class BookList extends Component{
    renderBooklist(){
        return this.props.books.map((book) =>{
            return <ListGroupItem 
            onClick={()=>{this.props.selectBook(book)}}
             tag="a" href="#" action
            key={book.title} className="list-group">{book.title}</ListGroupItem>
        })
    }

    render(){
        return(
            <div>
                <ListGroup className="list-group">
                    {this.renderBooklist()}
                </ListGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return{
        books: state.books
    };
    
}

function  mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook : selectBook}, dispatch)
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);