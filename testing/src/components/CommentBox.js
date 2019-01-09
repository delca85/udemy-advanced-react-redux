import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

import requireAuth from 'components/requireAuth'

function CommentBox({ saveComment, fetchComments }) {
    const [comment, setComment] = useState('')

    const handleChange = event => setComment(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()
        saveComment(comment)
        setComment('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={handleChange} value={comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button className='fetch-comments' onClick={fetchComments}>
                Fetch Comments
            </button>
        </div>
    )
}

export default connect(
    null,
    actions
)(requireAuth(CommentBox))
