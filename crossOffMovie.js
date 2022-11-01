const {By} = require('selenium-webdriver')


const crossOffMovie = async (driver) => {
    // first add a movie in so we can cross it off
    // first, select the input field and type
    await driver.findElement(By.xpath('//input')).sendKeys('LOTR')

    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//span')).click()
    
}

module.exports = {
    crossOffMovie
}