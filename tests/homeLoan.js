var hLObjects = {}
let testEdit = require('../testAssets/homeLoanAssets')
module.exports = {
    beforeEach: browser => {
     hLObjects = browser.page.homeLoanObjects()
     hLObjects.navigate()
},
    afterEach: browser => {
        browser.end

    },
    'Test': browser =>{
        testEdit.forEach(test => {
            hLObjects.completeForm(test)
            console.log(test.in)
            console.log(test.res)
        })
    }

}
