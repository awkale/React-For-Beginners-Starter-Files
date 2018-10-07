import React from 'react';

class EditFishForm extends React.Component {
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
      </div>
    );
  };
}

export default EditFishForm;