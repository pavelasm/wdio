
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

