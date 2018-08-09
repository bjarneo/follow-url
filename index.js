const { promisify } = require('util');
const reverse = promisify(require('long-url'));


module.exports = async function followUrl(url) {
    const urls = [url];
    let run = true;

    while (run) {
        try {
            const location = await reverse(url);

            urls.push(location);

            url = location;
        } catch (e) {
            run = false;
        }
    }

    return urls;
};
