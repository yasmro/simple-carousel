class Carousel {
    
    constructor(query) {
      this.element = document.querySelector(query);
      this.maxIndex = Math.round(this.element.scrollWidth / this.element.clientWidth);
    }

    get index() {
      var index = Math.round(this.element.scrollLeft / this.element.clientWidth);
      return index;
    }
    

    goto(index) {
      var i = (index + this.maxIndex) % this.maxIndex;
      this.element.children[i].scrollIntoView({ behavior: "smooth" });
    }

    next() {
      this.goto(this.index+1);
    }

    prev() {
      this.goto(this.index-1);
    }

  }