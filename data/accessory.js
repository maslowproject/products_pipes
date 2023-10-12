import fs from 'fs';

export function attachAccessoryTo(accessoryId, pipeId) {
    fs.readFile('../mock/accessory.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const accessories = JSON.parse(data);
        
        const accessoryIndex = accessories.findIndex(({ id }) => accessoryId === id);
        const accessory = accessories[accessoryIndex];

        accessories.splice(accessoryIndex, 1);

        accessory.pipeId = pipeId;

        accessories.push(accessory);

        json = JSON.stringify(accessories);
        fs.writeFile('../mock/accessory.json', json, 'utf8');
    }});
}