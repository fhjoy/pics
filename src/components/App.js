import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { imgs: [] };

  onSearchSubmit = async (term) => {
    const res = await unsplash.get("search/photos", {
      params: { query: term },
    });

    this.setState({ imgs: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar handleSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.imgs} />
        {/* Total: {this.state.images.length} images found */}
      </div>
    );
  }
}

export default App;
