import Product from "./product";

export default class Pipe extends Product {
    constructor(id, type, length, outerDiameter, innerDiameter, material, weight) {
        this.id = id;
        this.type = type;
        this.length = length;
        this.outerDiameter = outerDiameter;
        this.innerDiameter = innerDiameter;
        this.material = material;
        this.weight = weight;
    }

    alterLength(increase, amount) {
        this.length += ((increase ? 1 : -1) * amount);
    }

    describeProduct() {
        return `This pipe is ${this.length} feet long and has a thickness of ${this.outerDiameter -this.innerDiameter} feet`
    }
}