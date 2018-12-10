import React, { useEffect } from 'react'
import { connect } from 'react-redux'

export default ChildComponent => {
    const ComposedComponent = props => {
        const {
            auth,
            history: { push }
        } = props

        useEffect(
            () => {
                !auth && push('/')
            },
            [auth]
        )

        return <ChildComponent {...props} />
    }

    const mapStateToProps = state => ({
        auth: state.auth
    })

    return connect(mapStateToProps)(ComposedComponent)
}
