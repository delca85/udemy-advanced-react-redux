import React, { useCallback } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import * as actions from 'actions'

const App = ({ auth, changeAuth }) => {
    const renderButton = useCallback(
        () =>
            auth ? (
                <button onClick={() => changeAuth(false)}>Sign Out</button>
            ) : (
                <button onClick={() => changeAuth(true)}>Sign In</button>
            ),
        [auth]
    )
    const renderHeader = useCallback(
        () => (
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/post'>Post a Comment</Link>
                </li>
                <li>
                    <Link to='/'>{renderButton()}</Link>
                </li>
            </ul>
        ),
        [auth]
    )

    return (
        <div>
            {renderHeader()}
            <Route path='/post' component={CommentBox} />
            <Route path='/' exact component={CommentList} />
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps,
    actions
)(App)
