AFRAME.registerComponent("base", {
    schema: {
      radius:{type:'number',default:150},
      height:{type:'number',default:3}
    },
    init: function() {
      this.el.setAttribute("geometry", {primitive:'cylinder',height:this.data.height,radius:this.data.radius});
      
      
      this.el.setAttribute("material",{color:"#1769aa"});
    }
  });