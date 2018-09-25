import React, {Component} from "react";
import {connect} from "react-redux";
import { RenderBody } from './bookListStyles';
import {Container, Row, Col} from 'styled-components';

class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return(
                <RenderBody>Please Select Book For Details...</RenderBody>
            )
        }
        return(
            <RenderBody>
                <h2 className="DetailHead">Details:</h2>
                <div>
                    <h4>Title: &nbsp;
                        <span>
                            {this.props.book.title}
                        </span> 
                    </h4>
                    <h4>Author: &nbsp;
                        <span>
                            {this.props.book.author}
                        </span> 
                    </h4>
                    <h4>Pages: &nbsp;
                        <span>
                            {this.props.book.pages}
                        </span> 
                    </h4>
                </div>
            </RenderBody>
        )
    }
}
function mapStateToProps(state) {
    return{
        book: state.activeBook
    }
    
}

export default connect(mapStateToProps)(BookDetail);