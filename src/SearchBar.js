import React from 'react';

class SearchBar extends React.Component {
    state = {
        'term': ''
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    onFormChange = (event) => {
        this.setState({'term': event.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onFormChange} />
                </form>
            </div>
        );
    }
}

export default SearchBar;
