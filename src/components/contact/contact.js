import React from 'react';

class Contact extends React.Component {
    onSubmit = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <form>
                <input placeholder="name" type="name" />
                <button onClick={this.onSubmit}>Submit</button>
            </form>
        )
    }
}

export default Contact;