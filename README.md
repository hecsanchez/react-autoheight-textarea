# react-autoheight-textarea
React textarea component which automatically reset the height of textarea as content changes.

### Use it in this way:
```
npm install react-autoheight-textarea --save
```
```
import autoheightTextarea from 'react-autoheight-textarea'

React.renderComponent(
    <autoheightTextarea defaultValue="Type your content"></autoheightTextarea>,
    document.getElementById('root')
)
```

### Or in this way:
```
//Copy and paste the following codes in your file

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
```
