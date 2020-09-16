import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'

class Heroes extends Component {

    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Hero name="batman" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero name="joker" />
                    <Hero name="supermen" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero name="supermen" />
                </ErrorBoundary>
            </div>
        )
    }
}

export default Heroes
