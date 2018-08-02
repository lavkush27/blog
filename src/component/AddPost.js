import React, { Component } from 'react'
import { connect } from 'react-redux';
import { postAction } from '../action/action';
class BlogPost extends Component {
    addHandler = () => {
        // let textTitle = document.getElementById("title").value;
        // let textArea = document.getElementById("textArea").value;
        // this.props.postAction(textTitle, textArea)
       this.props.dispatch = () => ({
            type: "ADDPOST",
            data: "lav"
        })
    }
    render() {
        return (
            <div>
                <div>
                    <lable>BlogTitle</lable>
                    <input id="title" type="text" name="fname" />
                </div>
                <div>
                    <lable>Write Hear</lable>
                    <textarea id="textArea" rows="4" cols="30" />
                </div>
                <button onClick={this.addHandler}>Add</button>
            </div>
        )
    }
}

export default connect(null, { postAction })(BlogPost)