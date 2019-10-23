module.exports = {
  getCars: async (req, res) => {
    const db = req.app.get("db");
    console.log('hit')
    db.get_cars()
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  },

  addCar: (req, res) => {
    const db = req.app.get("db");
    const { name, img } = req.body;
    db.add_car(name, img)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  },

  deleteCar: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_car(id)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  },

  editCarInfo: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { name, img } = req.body;
    db.edit_car_info(name, img, id)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }
};
