import { attachAccessoryTo } from "../data/accessory";
import { getPipe } from "../data/pipe";
import Product from "./product";

export default class Accessory extends Product {
    constructor(id, weight, pipeId) {
        this.id = id;
        this.weight = weight;
        this.pipe = getPipe(pipeId);
    }

    attachToPipe(pipeId) {
        attachAccessoryTo(this.id, pipeId)
        this.pipe = getPipe(pipeId);
    }

    describeProduct() {
        const pipeDescription = this.pipe ? ` It is attached to the pipe with id ${this.pipe.id}` : '';
        return `This accessory weighs ${this.weight} pounds.${pipeDescription}`
    }
}