import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBlog } from '../action/action'
// import Details from '../Component/BlogDeatils';
class ListOfBlog extends Component {
    deleteHandler = (event) => {
        let targetId = event.target.id;
        this.props.deleteBlog(targetId);
    }
    render() {
        return (
            <div>
                <h1>Blog List</h1>
                {
                    this.props.list.map((item) => {
                        return (
                            <div>
                                <div>{item.value}</div>
                                <button id={item._id}><Link to={'/listedit/' + item._id}>Edit</Link></button>
                                <button id={item._id}><Link to={'/list/' + item._id}>View</Link></button>
                                <button id={item._id} onClick={this.deleteHandler}>Delete</button>
                            </div>
                        )
                    })
                }
              
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return { list: state };
}

export default connect(mapStateToProps, { deleteBlog })(ListOfBlog);

