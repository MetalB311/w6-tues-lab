const {Builder, Capabilities, By} = require('selenium-webdriver')

const {deleteMovie} = require('./functions')
const {crossOffMovie} = require('./crossOffMovie')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()




beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})



test('delete movie', async () => {
   
        await deleteMovie(driver)
        await driver.sleep(5000)
    })

test('cross off a movie', async () => {
        await crossOffMovie(driver)
        await driver.sleep(2000)
    })


