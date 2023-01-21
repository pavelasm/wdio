// const Page = require('../page/Coaching.page.js');
import Page from '../page/Coaching.page.js'
class openURL extends Page {
    open(urlName) {
        return super.open(`${urlName}`);
    }
}
module.exports = new openURL();
