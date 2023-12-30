// Registering component in box-component.js
AFRAME.registerComponent("move-car", {
  schema: {
    car: { type: "number", default: "../french_car/scene.gltf" },
  },

  tick: function () {

    this.el.setAttribute("gltf-model", this.data.car);

    const position = { x: 0, y: 50, z: 80 };

    const rotation = { x: 0, y: -100, z: 0 };

    this.el.setAttribute("position", position);

    this.el.setAttribute("rotation", rotation);
  }
});
