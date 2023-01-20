
describe('Text Box Challenge', () => {

    beforeEach(async () => {
        await browser.url('https://software-testers.gitlab.io/challenges/automation-challenges/text-box.html')
        console.log('Link was opened')
    });

    it('1 - Verify Error Message when nothing is entered! (0.2 pts)', async () => {
        const verifyButton = await $('#verify-btn=VERIFY')
        console.log(await verifyButton.getText())

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())

        await verifyButton.click()
        await expect(confMessage).toHaveTextContaining('No value entered in Name field!')
    })

    it('2 - Verify Error Message when less than 2 letters are entered! (0.2 pts)', async () => {
        const verifyButton = await $('#verify-btn=VERIFY')
        console.log(await verifyButton.getText())

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())

        const firstName = await $('#first-name')
        console.log(await firstName.getText())
        await expect(firstName).toHaveValue(null)
        await firstName.addValue('a')

        await verifyButton.click()
        await expect(confMessage).toHaveTextContaining('Name has to have at least 2 letters!')

    });

    it('3 - Verify Error Message when non letters are entered! (0.2 pts)', async () => {
        const verifyButton = await $('#verify-btn=VERIFY')
        console.log(await verifyButton.getText())

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())

        const firstName = await $('#first-name')
        console.log(await firstName.getText())
        await expect(firstName).toHaveValue(null)
        await firstName.addValue('666')

        await verifyButton.click()
        await expect(confMessage).toHaveTextContaining('Name can only have letters!')

    });

    it('4 - Verify Error Message when more than 30 letters are entered! (0.2 pts)', async () => {
        const verifyButton = await $('#verify-btn=VERIFY')
        console.log(await verifyButton.getText())

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())

        const firstName = await $('#first-name')
        console.log(await firstName.getText())
        await expect(firstName).toHaveValue(null)

        str = 'a'.repeat(31)
        await firstName.addValue(str)
        await verifyButton.click()
        await expect(confMessage).toHaveTextContaining('Name cannot have more than 30 letters!')

    });

    it('5 - To solve a challenge simply write your name and click VERIFY! (0.2 pts)', async () => {
        const verifyButton = await $('#verify-btn=VERIFY')
        console.log(await verifyButton.getText())

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())

        const firstName = await $('#first-name')
        console.log(await firstName.getText())
        await expect(firstName).toHaveValue(null)

        await firstName.addValue('Pavelas')
        await verifyButton.click()

        const successMessage = await $('h1=Wohoo! 🥳')
        console.log(await successMessage.getText())

        const successMessageSecond = await $('p=You have solved the challenge!')
        console.log(await successMessageSecond.getText())

    });
})

describe('Number Box Challenge', () => {
    beforeEach(async () => {
        await browser.url('https://software-testers.gitlab.io/challenges/automation-challenges/input-number.html')
        console.log('Link was opened')
    });

    it('1 - Verify Error Message when nothing is entered! (0.25 pts)', async () => {
        const verifyButton = await $('#number-verify=VERIFY')
        console.log(await verifyButton.getText())

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())

        await verifyButton.click()
        await expect(confMessage).toHaveTextContaining('No number is entered!')
    });

    it('2 - Verify Error Message when entered number is more than 100! (0.25 pts)', async () => {
        const verifyButton = await $('#number-verify=VERIFY')
        console.log(await verifyButton.getText())

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())

        const numberBox = await $('#number-box')
        console.log(await numberBox.getText())
        await numberBox.addValue('101')

        await verifyButton.click()
        await expect(confMessage).toHaveTextContaining('Entered number is NOT in range of 0-100!')
    });

    it('3 - Verify Error Message when entered number is less than 0! (0.25 pts)', async () => {
        const verifyButton = await $('#number-verify=VERIFY')
        console.log(await verifyButton.getText())

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())

        const numberBox = await $('#number-box')
        console.log(await numberBox.getText())
        await numberBox.addValue('-10')

        await verifyButton.click()
        await expect(confMessage).toHaveTextContaining('Entered number is NOT in range of 0-100!')
    });

    it('4 - To solve a challenge enter the number between 0 - 100 & click VERIFY! (0.25 pts)', async () => {
        const verifyButton = await $('#number-verify=VERIFY')
        console.log(await verifyButton.getText())

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())

        const numberBox = await $('#number-box')
        console.log(await numberBox.getText())
        await numberBox.addValue('25')
        await verifyButton.click()

        const successMessage = await $('h1=Wohoo! 🥳')
        console.log(await successMessage.getText())

        const successMessageSecond = await $('p=You have solved the challenge!')
        console.log(await successMessageSecond.getText())
    });
});

describe('Button Challenge', () => {
    beforeEach(async () => {
        await browser.url('https://software-testers.gitlab.io/challenges/automation-challenges/button.html')
        console.log('Link was opened')
    });

    it('1 - Verify that Green button is disabled by default! (0.25 pts)', async () => {
        const greenButton = await $('#simple-button-2=Green')
        console.log(await greenButton.getText())

        await expect(greenButton).toHaveAttribute('disabled')
    });

    it('2 - Verify that Red button is disabled by default! (0.25 pts)', async () => {
        const redButton = await $('#simple-button-3=Red')
        console.log(await redButton.getText())

        await expect(redButton).toHaveAttribute('disabled')
    });

    it('3 - To solve a challenge light up Lithuanian flag by clicking on all buttons starting from Yellow! (0.5 pts)', async () => {
        const yellowButton = await $('#simple-button-1=Yellow')
        console.log(await yellowButton.getText())
        await yellowButton.click()

        const greenButton = await $('#simple-button-2=Green')
        console.log(await greenButton.getText())
        await expect(greenButton).not.toHaveAttribute('disabled')
        await greenButton.click()


        await (greenButton).getCSSProperty('background-color')
        console.log(greenButton)
        await expect(greenButton).toBeDisplayed('rgba(124, 177, 89, 1)')

        const redButton = await $('#simple-button-3=Red')
        console.log(await redButton.getText())
        await expect(redButton).not.toHaveAttribute('disabled')
        await redButton.click()

        const successMessage = await $('h1=Wohoo! 🥳')
        console.log(await successMessage.getText())

        const successMessageSecond = await $('p=You have solved the challenge!')
        console.log(await successMessageSecond.getText())
    });
});