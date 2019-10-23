import React, { Component } from "react";
import { connect } from "react-redux";
import { getCars, addCar, deleteCar, editCar } from "../ducks/carReducer";

class Cars extends Component {
  constructor() {
    super();

    this.state = {
      cars: [],
      carName: "",
      imgUrl: ""
    };
  }

  componentDidMount = () => {
    this.props.getCars();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.cars !== this.props.cars) {
      this.setState({
        cars: this.props.cars.cars
      });
    }
  };

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleAdd = (name, img) => {
    this.props.addCar(name, img);
    this.setState({
      carName: "",
      imgUrl: ""
    });
  };

  editCar = id => {
    const { carName, imgUrl } = this.state;
    this.props.editCar(carName, imgUrl, id);
    this.setState({
      carName: "",
      imgUrl: ""
    });
  };

  render() {
    const { cars, carName, imgUrl } = this.state;
    return (
      <section>
        <input
          name="carName"
          value={carName}
          placeholder="car name"
          onChange={e => this.handleInputs(e)}
        />
        <input
          name="imgUrl"
          value={imgUrl}
          placeholder="image url"
          onChange={e => this.handleInputs(e)}
        />
        <button onClick={() => this.handleAdd(carName, imgUrl)}>Add Car</button>

        <div className="mapper">
          {cars.map(car => {
            return (
              <div>
                <div>{car.name}</div>
                <img src={car.img} />
                <button onClick={() => this.props.deleteCar(car.car_id)}>
                  DELETE
                </button>
                <button onClick={() => this.editCar(car.car_id)}>EDIT</button>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.carReducer };
}

export default connect(
  mapStateToProps,
  { getCars, addCar, deleteCar, editCar }
)(Cars);
