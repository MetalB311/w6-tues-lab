const {By} = require('selenium-webdriver')


const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('LOTR')
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//span')).click()
}

module.exports = {
    crossOffMovie
}