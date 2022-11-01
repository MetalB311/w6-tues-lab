const {By} = require('selenium-webdriver')


const revealMessage = async (driver) => {
    await driver.findElement(By.xpath('//inpute')).sendKeys('Chicken')
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//span')).click()

    expect()
}