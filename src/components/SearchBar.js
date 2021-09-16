import React from "react";

class SearchBar extends React.Component {
  // onInputChange(e) {
  //   e.preventDefault();
  //   console.log (e.target.value);
  // }
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Search Image </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
