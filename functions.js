const {By} = require('selenium-webdriver')

const deleteMovie = async (driver) => {
    // first, select the input field
    await driver.findElement(By.xpath('//input')).sendKeys('back to the future')

    // select the add button
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button[text()="x"]')).click()
}





module.exports = {
    deleteMovie
}