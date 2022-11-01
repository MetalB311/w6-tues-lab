const {By} = require('selenium-webdriver')

const deleteMovie = async (driver) => {
    // first, select the input field
    await driver.findElement(By.xpath('//input')).sendKeys('back to the future')

    // select the add button
    await driver.findElement(By.xpath('//button')).click()
    
    await driver.sleep(1000)

    const movie=await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()

    await driver.findElement(By.xpath('//button[text()="x"]')).click()

    const deleted = await driver.findElement(By.xpath('//li')).isDisplayed()
    expect(deleted).toBeFalsy()
    
}


module.exports = {
    deleteMovie
}