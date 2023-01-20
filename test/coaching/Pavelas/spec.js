
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

describe('Checkbox Challenge', () => {
    beforeEach(async () => {
        await browser.url('https://software-testers.gitlab.io/challenges/automation-challenges/check-box.html')
        console.log('Link was opened')
    });

    it('1 - Verify that 1, 3, 5 checkboxes are checked by default! (0.2 pts)', async () => {
        const firstDefaultCheckedCheckbox = await $('#checkbox1')
        console.log(await firstDefaultCheckedCheckbox.getText())
        await expect(firstDefaultCheckedCheckbox).toHaveAttribute('checked')

        const thirdDefaultCheckedCheckbox = await $('[name="checkbox3"]')
        console.log(await thirdDefaultCheckedCheckbox.getText())
        await expect(thirdDefaultCheckedCheckbox).toHaveAttribute('checked')

        const fifthDefaultCheckedCheckbox = await $('#ba')
        console.log(await fifthDefaultCheckedCheckbox.getText())
        await expect(fifthDefaultCheckedCheckbox).toHaveAttribute('checked')

    });

    it('2 - Verify that 2, 4 checkboxes are NOT checked by default! (0.2 pts)', async () => {
        const secondCheckedCheckbox = await $('[name="checkbox2"]')
        console.log(await secondCheckedCheckbox.getText())
        await expect(secondCheckedCheckbox).not.toHaveAttribute('checked')

        const fourthCheckedCheckbox = await $('//body/section/div[2]/div[2]/input[4]')
        console.log(await fourthCheckedCheckbox.getText())
        await expect(fourthCheckedCheckbox).not.toHaveAttribute('checked')

    });

    it('3 - Verify Error Message when NO checkbox is selected! (0.2 pts)', async () => {
        const firstDefaultCheckedCheckbox = await $('#checkbox1')
        console.log(await firstDefaultCheckedCheckbox.getText())
        await expect(firstDefaultCheckedCheckbox).toHaveAttribute('checked')
        await firstDefaultCheckedCheckbox.click()

        const thirdDefaultCheckedCheckbox = await $('[name="checkbox3"]')
        console.log(await thirdDefaultCheckedCheckbox.getText())
        await expect(thirdDefaultCheckedCheckbox).toHaveAttribute('checked')
        await thirdDefaultCheckedCheckbox.click()

        const fifthDefaultCheckedCheckbox = await $('#ba')
        console.log(await fifthDefaultCheckedCheckbox.getText())
        await expect(fifthDefaultCheckedCheckbox).toHaveAttribute('checked')
        await fifthDefaultCheckedCheckbox.click()

        const confirmButton = await $('#confirm-btn')
        console.log(await confirmButton.getText())
        await confirmButton.click()

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())
        await expect(confMessage).toHaveTextContaining('No checkbox is selected!')
    });

    it('4 - Verify Error Message when checkbox combination is not correct! (0.2 pts)', async () => {
        const confirmButton = await $('#confirm-btn')
        console.log(await confirmButton.getText())
        await confirmButton.click()

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())
        await expect(confMessage).toHaveTextContaining('The combination of selected profession(s) is NOT correct!')
    });

    it('5 - To solve a challenge select only checkboxes related to software testing roles + Confirm (0.2 pts)', async () => {
        const confirmButton = await $('#confirm-btn')
        console.log(await confirmButton.getText())
        await confirmButton.click()

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())
        await expect(confMessage).toHaveTextContaining('The combination of selected profession(s) is NOT correct!')

        const firstDefaultCheckedCheckbox = await $('#checkbox1')
        console.log(await firstDefaultCheckedCheckbox.getText())
        await expect(firstDefaultCheckedCheckbox).toHaveAttribute('checked')
        await firstDefaultCheckedCheckbox.click()

        const secondCheckedCheckbox = await $('[name="checkbox2"]')
        console.log(await secondCheckedCheckbox.getText())
        await secondCheckedCheckbox.click()

        const fifthDefaultCheckedCheckbox = await $('#ba')
        console.log(await fifthDefaultCheckedCheckbox.getText())
        await expect(fifthDefaultCheckedCheckbox).toHaveAttribute('checked')
        await fifthDefaultCheckedCheckbox.click()

        const fourthCheckedCheckbox = await $('//body/section/div[2]/div[2]/input[4]')
        console.log(await fourthCheckedCheckbox.getText())
        await fourthCheckedCheckbox.click()

        console.log(await confirmButton.getText())
        await confirmButton.click()

        const successMessage = await $('h1=Wohoo! 🥳')
        console.log(await successMessage.getText())

        const successMessageSecond = await $('p=You have solved the challenge!')
        console.log(await successMessageSecond.getText())

    });
});

describe('Radio-button Challenge', () => {
    beforeEach(async () => {
        await browser.url('https://software-testers.gitlab.io/challenges/automation-challenges/radio-button.html')
        console.log('Link was opened')
    });

    it('1 - Verify Error Message when NO option is selected! (0.2 pts)', async () => {
        const confirmButton = await $('#confirm-radio-challenge')
        console.log(await confirmButton.getText())
        await confirmButton.click()

        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())
        await expect(confMessage).toHaveTextContaining('No option is selected!')


    });

    it('2 - Select each role + Confirm & verify text in message "[Role] is selected!"(0.4 pts)', async () => {
        const QaTestEngineerRole = await $('#profession-tester')
        console.log(await QaTestEngineerRole.getText())
        await QaTestEngineerRole.click()
        const confirmButton = await $('#confirm-radio-challenge')
        console.log(await confirmButton.getText())
        await confirmButton.click()
        const confMessage = await $('#conf-msg')
        console.log(await confMessage.getText())
        await expect(confMessage).toHaveTextContaining('QA Test Engineer is selected!')

        const softwareDeveloperRole = await $('#profession-developer')
        console.log(await softwareDeveloperRole.getText())
        await softwareDeveloperRole.click()
        console.log(await confirmButton.getText())
        await confirmButton.click()
        console.log(await confMessage.getText())
        await expect(confMessage).toHaveTextContaining('Software Developer is selected!')

        const businessAnalystRole = await $('#profession-analyst')
        console.log(await businessAnalystRole.getText())
        await businessAnalystRole.click()
        console.log(await confirmButton.getText())
        await confirmButton.click()
        console.log(await confMessage.getText())
        //need to fix typo in the message "Analystic" on the front end
        await expect(confMessage).toHaveTextContaining('Business Analystic is selected!')

        browser.refresh()

        const technicalWriterRole = await $('#profession-writer')
        console.log(await technicalWriterRole.getText())
        await technicalWriterRole.click()
        console.log(await confirmButton.getText())
        await confirmButton.click()
        console.log(await confMessage.getText())
        await expect(confMessage).toHaveTextContaining('Technical Writer is selected!')

    });

    it('3 - To solve a challenge Confirm all professions at least once! (0.4 pts)', async () => {
        const QaTestEngineerRole = await $('#profession-tester')
        const confirmButton = await $('#confirm-radio-challenge')
        const confMessage = await $('#conf-msg')

        await QaTestEngineerRole.click()
        await confirmButton.click()
        await expect(confMessage).toHaveTextContaining('QA Test Engineer is selected!')

        const softwareDeveloperRole = await $('#profession-developer')

        await softwareDeveloperRole.click()
        await confirmButton.click()
        await expect(confMessage).toHaveTextContaining('Software Developer is selected!')

        const businessAnalystRole = await $('#profession-analyst')

        await businessAnalystRole.click()
        await confirmButton.click()
        //need to fix typo in the message "Analystic" on the front end
        await expect(confMessage).toHaveTextContaining('Business Analystic is selected!')

        const technicalWriterRole = await $('#profession-writer')

        await technicalWriterRole.click()
        await confirmButton.click()

        const successMessage = await $('h1=Wohoo! 🥳')
        const successMessageSecond = await $('p=You have solved the challenge!')

        console.log(await successMessage.getText())
        console.log(await successMessageSecond.getText())
    });
});

describe('Drop-down Challenge', () => {
    beforeEach(async () => {
        await browser.url('https://software-testers.gitlab.io/challenges/automation-challenges/drop-down.html')
        console.log('Link was opened')
    });

    it('1 - Verify Error Message and Country when selected country is NOT Lithuania! (0.3 pts)', async () => {
        const dropdownCountries = await $('[name="country"]')
        dropdownCountries.selectByAttribute('value', 'Zimbabwe')
        console.log(await dropdownCountries.getText())
        await dropdownCountries.click()

        const confirmButton = await $('#dropdown-verify-btn')
        await confirmButton.click()

        const confMessage = await $('#conf-msg')
        await expect(confMessage).toHaveTextContaining('Selected country is Zimbabwe, NOT Lithuania!')

    });

    it('2 - Verify Error Message with at least 3 countries (0.3 pts)', async () => {
        countryName = ['Yemen', 'Solomon Islands', 'Portugal']

        for (let i = 0; i < countryName.length; i++) {

            const dropdownCountries = await $('[name="country"]')
            dropdownCountries.selectByAttribute('value', countryName[i])
            console.log(await dropdownCountries.getText())
            await dropdownCountries.click()
            const confirmButton = await $('#dropdown-verify-btn')
            await confirmButton.click()

            const confMessage = await $('#conf-msg')
            await expect(confMessage).toHaveTextContaining(`Selected country is ${countryName[i]}, NOT Lithuania!`)

        }

    });

    it('3 - To solve a challenge select the country Lithuania from drop down list and VERIFY it! (0.4 pts)', async () => {
        const dropdownCountries = await $('[name="country"]')
        dropdownCountries.selectByAttribute('value', 'Lithuania')
        console.log(await dropdownCountries.getText())
        await dropdownCountries.click()

        const confirmButton = await $('#dropdown-verify-btn')
        await confirmButton.click()

        const successMessage = await $('h1=Wohoo! 🥳')
        const successMessageSecond = await $('p=You have solved the challenge!')

        console.log(await successMessage.getText())
        console.log(await successMessageSecond.getText())
    });
});

describe('Hamburger Menu Challenge', () => {
    beforeEach(async () => {
        await browser.url('https://software-testers.gitlab.io/challenges/automation-challenges/hamburger-menu.html#')
        console.log('Link was opened')
    });

    it('1 - Verify Error Message for all options except VERIFY ME (0.6 pts)', async () => {

        const hamburgerMenuIcon = await $('[class="icon"]')
        await hamburgerMenuIcon.click()

        const selectorName = ['home', 'about', 'blog', 'contact'];
        for (let i = 0; i < selectorName.length; i++) {

            const homeLink = await $(`#hamburger-menu-${selectorName[i]}`)
            await homeLink.click()

            const confMessage = await $('#conf-msg')
            await expect(confMessage).toHaveTextContaining('You have selected other section than VERIFY ME!')

        }

    });

    it('2 - To solve a challenge, select the option VERIFY ME (0.4 pts)', async () => {
        const hamburgerMenuIcon = await $('[class="icon"]')
        await hamburgerMenuIcon.click()

        const homeLink = await $('#hamburger-menu-verify')
        await homeLink.click()

        const successMessage = await $('h1=Wohoo! 🥳')
        const successMessageSecond = await $('p=You have solved the challenge!')

        console.log(await successMessage.getText())
        console.log(await successMessageSecond.getText())
    });
});

describe('Slider Challenge', () => {
    beforeEach(async () => {
        await browser.url('https://software-testers.gitlab.io/challenges/automation-challenges/slider.html')
        console.log('Link was opened')
    });

    it('1 - Verify Error Message when number is NOT 100. Use boundary values! (0.5 pts)', async () => {
        const slider = await $('#slider')
        await slider.dragAndDrop({ x: 170, y: 200 })

        const verifyButton = await $('#slider-verify-btn')
        await verifyButton.click()

        const confMessage = await $('#conf-msg')
        await expect(confMessage).toHaveTextContaining('You have NOT reached 100 yet, try harder!🤪')

        await slider.dragAndDrop({ x: -170, y: 200 })

        await verifyButton.click()
        await expect(confMessage).toHaveTextContaining('You have NOT reached 100 yet, try harder!🤪')

    });
    it('2 - To solve a challenge reach 100 and click Verify button! (0.5 pts)', async () => {
        const slider = await $('#slider')
        await slider.dragAndDrop({ x: 200, y: 200 })

        const verifyButton = await $('#slider-verify-btn')
        await verifyButton.click()

        const successMessage = await $('h1=Wohoo! 🥳')
        const successMessageSecond = await $('p=You have solved the challenge!')

        console.log(await successMessage.getText())
        console.log(await successMessageSecond.getText())
    });
});