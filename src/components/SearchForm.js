import React, {Component} from 'react';

class SearchForm extends Component {
    render() {
        return (
            <div>
                <form className="search-form" role="search">
                    <div className="form-group waves-light waves-effect waves-light">
                        <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchForm;