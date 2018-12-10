import React from 'react'
import { connect } from 'react-redux'

const CommentList = props => (
    <div>
        <h4>Comment List</h4>
        <ul>
            {props.comments.map((comment, i) => (
                <li key={i}>{comment}</li>
            ))}
        </ul>
    </div>
)

const mapStateToProps = state => ({ comments: state.comments })

export default connect(mapStateToProps)(CommentList)
