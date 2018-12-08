const Jimp = require('jimp');
const file = 'input-pokemon-jakt.png';
// Jimp.read(file)
//     .then(image => {
//         console.log(Image);
//     })
//     .catch(console.log);

createImageBitmap(file)
    .then(res => {
        console.log(res);
    })