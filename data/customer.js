import customers from '../mock/customer.json'

export function getCustomer(_id) {
    return customers.find(({ id }) => id === _id )
}