import { getCustomer } from "../data/customer";
import { sellProductTo } from "../data/product";

export class Location {
    constructor(lat, long) {
        this.lat = lat;
        this.long = long;
    }

    setName(name) {
        this.name = name;
    }
}
export default class Product {
    constructor(id, name, price, customerId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.purchasedBy = getCustomer(customerId);
    }

    setLoc(location) {
        this.location = location;
    }

    sellTo(id) {
        sellProductTo(this.id, id);
        this.purchasedBy = getCustomer(id);
    }

    describeProduct() {
        throw new Error('function has not been implemented in extended class')
    }
}