import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  };

  handleChange = event => {
    //update fish
    //1 take a copy of current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          value={this.props.fish.name}
          onChange={this.handleChange}
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          value={this.props.fish.price}
          onChange={this.handleChange}
          name="price"
          type="text"
          placeholder="Price"
        />
        <select
          value={this.props.fish.status}
          onChange={this.handleChange}
          name="status"
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          value={this.props.fish.desc}
          onChange={this.handleChange}
          name="desc"
          placeholder="Desc"
        />
        <input
          value={this.props.fish.image}
          onChange={this.handleChange}
          name="image"
          type="text"
          placeholder="Image"
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Rish</button>
      </div>
    );
  };
}

export default EditFishForm;