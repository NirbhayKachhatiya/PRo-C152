AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "../assets/car/scene.gltf" }
    },
    init: function() {
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x: 0, y: 0, z: 80 };
      const rotation = { x: 0, y: 0, z: 0 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
      this.el.setAttribute("scale",{x:0.5,y:0.5,z:0.5})
    },
    tick: function(){
      window.addEventListener("click",(e)=>{
        this.data.clickCounter =  this.data.clickCounter+1;
        if (this.data.clickCounter === 1) {
          const rotation = { x: 0, y: 20, z: 0 };
          this.el.setAttribute("rotation", rotation);
        } else if (this.data.clickCounter === 2) {
          const rotation = { x: 0, y: 100, z: 0 };
          this.el.setAttribute("rotation", rotation);
        } 
      })
    }
  });