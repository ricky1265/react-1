import React from 'react';

class SearchBar extends React.Component {

    state = {term : ''};

    render() {
        //return <div>Search Bar</div>;
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search for Nishaat</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }

    onInputChange(event) {
            console.log(event.target.value);
    }

    onFormSubmit = event =>  {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

}
export default SearchBar;
