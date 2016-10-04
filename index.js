import React from 'react'

const autoheightTextarea = React.createClass({
    autoResize(e) {
        this.textarea.style.height = 'auto'
        this.textarea.style.height = this.textarea.scrollHeight+'px'
        this.props.onInput && this.props.onInput(e)
    },
    componentDidMount() {
        this.textarea.style.overflowY = 'hidden'
        this.textarea.style.height = this.textarea.scrollHeight+'px'
    },
    render() {
        return <textarea {...this.props} onInput={this.autoResize} ref={(c) => this.textarea = c}></textarea>
    }
})

export default autoheightTextarea