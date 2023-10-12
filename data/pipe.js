import pipes from '../mock/pipe.json'

export function getPipe(_id) {
    return pipes.find(({ id }) => id === _id )
}