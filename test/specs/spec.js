import openURL from '../actions/Coaching.actions.js'
import selectorsRegister from '../page/Register.page.js'

describe('Text Box Challenge', () => {

    beforeEach(async () => {
        openURL.open('text-box')
    });

    it('1 - Verify Error Message when nothing is entered! (0.2 pts)', async () => {
        await selectorsRegister.button.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('No value entered in Name field!')
    })

    it('2 - Verify Error Message when less than 2 letters are entered! (0.2 pts)', async () => {
        await expect(selectorsRegister.firstName).toHaveValue(null)
        await selectorsRegister.firstName.addValue('a')
        await selectorsRegister.button.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Name has to have at least 2 letters!')

    });

    it('3 - Verify Error Message when non letters are entered! (0.2 pts)', async () => {
        await expect(selectorsRegister.firstName).toHaveValue(null)
        await selectorsRegister.firstName.addValue('666')
        await selectorsRegister.button.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Name can only have letters!')

    });

    it('4 - Verify Error Message when more than 30 letters are entered! (0.2 pts)', async () => {
        await expect(selectorsRegister.firstName).toHaveValue(null)

        let str = 'a'.repeat(31)
        console.log(str)
        await selectorsRegister.firstName.addValue(str)

        await selectorsRegister.button.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Name cannot have more than 30 letters!')

    });

    it('5 - To solve a challenge simply write your name and click VERIFY! (0.2 pts)', async () => {
        await expect(selectorsRegister.firstName).toHaveValue(null)
        await selectorsRegister.firstName.addValue('Pavelas')
        await selectorsRegister.button.click()
        await selectorsRegister.successMessage.getText('Wohoo! 🥳')
        await selectorsRegister.successMessageSecond.getText('You have solved the challenge!')

    });
})

describe('Number Box Challenge', () => {
    beforeEach(async () => {
        openURL.open('input-number')
    });

    it('1 - Verify Error Message when nothing is entered! (0.25 pts)', async () => {
        await selectorsRegister.buttonNumberChallenge.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('No number is entered!')
    });

    it('2 - Verify Error Message when entered number is more than 100! (0.25 pts)', async () => {
        await selectorsRegister.numberBox.addValue('101')
        await selectorsRegister.buttonNumberChallenge.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Entered number is NOT in range of 0-100!')
    });

    it('3 - Verify Error Message when entered number is less than 0! (0.25 pts)', async () => {
        await selectorsRegister.numberBox.addValue('-10')
        await selectorsRegister.buttonNumberChallenge.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Entered number is NOT in range of 0-100!')
    });

    it('4 - To solve a challenge enter the number between 0 - 100 & click VERIFY! (0.25 pts)', async () => {
        await selectorsRegister.numberBox.addValue('25')
        await selectorsRegister.buttonNumberChallenge.click()
        await selectorsRegister.successMessage.getText('Wohoo! 🥳')
        await selectorsRegister.successMessageSecond.getText('You have solved the challenge!')
    });
});

describe('Button Challenge', () => {
    beforeEach(async () => {
        openURL.open('button')
    });

    it('1 - Verify that Green button is disabled by default! (0.25 pts)', async () => {
        await selectorsRegister.greenButton.click()
        await expect(selectorsRegister.greenButton).toHaveAttribute('disabled')
    });

    it('2 - Verify that Red button is disabled by default! (0.25 pts)', async () => {
        await selectorsRegister.redButton.click()
        await expect(selectorsRegister.redButton).toHaveAttribute('disabled')

    });

    it('3 - To solve a challenge light up Lithuanian flag by clicking on all buttons starting from Yellow! (0.5 pts)', async () => {
        await selectorsRegister.yellowButton.click()
        await expect(selectorsRegister.greenButton).not.toHaveAttribute('disabled')
        await selectorsRegister.greenButton.click()
        await selectorsRegister.greenButton.getCSSProperty('background-color')
        await expect(selectorsRegister.greenButton).toBeDisplayed('rgba(124, 177, 89, 1)')
        await expect(selectorsRegister.redButton).not.toHaveAttribute('disabled')
        await selectorsRegister.redButton.click()
        await selectorsRegister.successMessage.getText('Wohoo! 🥳')
        await selectorsRegister.successMessageSecond.getText('You have solved the challenge!')
    });
});

describe('Checkbox Challenge', () => {
    beforeEach(async () => {
        openURL.open('check-box')
    });

    it('1 - Verify that 1, 3, 5 checkboxes are checked by default! (0.2 pts)', async () => {
        await expect(selectorsRegister.firstDefaultCheckedCheckbox).toHaveAttribute('checked')
        await expect(selectorsRegister.thirdDefaultCheckedCheckbox).toHaveAttribute('checked')
        await expect(selectorsRegister.fifthDefaultCheckedCheckbox).toHaveAttribute('checked')

    });

    it('2 - Verify that 2, 4 checkboxes are NOT checked by default! (0.2 pts)', async () => {
        await expect(selectorsRegister.secondCheckedCheckbox).not.toHaveAttribute('checked')
        await expect(selectorsRegister.fourthCheckedCheckbox).not.toHaveAttribute('checked')
    });

    it('3 - Verify Error Message when NO checkbox is selected! (0.2 pts)', async () => {
        await expect(selectorsRegister.firstDefaultCheckedCheckbox).toHaveAttribute('checked')
        await selectorsRegister.firstDefaultCheckedCheckbox.click()

        await expect(selectorsRegister.thirdDefaultCheckedCheckbox).toHaveAttribute('checked')
        await selectorsRegister.thirdDefaultCheckedCheckbox.click()

        await expect(selectorsRegister.fifthDefaultCheckedCheckbox).toHaveAttribute('checked')
        await selectorsRegister.fifthDefaultCheckedCheckbox.click()

        await selectorsRegister.confirmButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('No checkbox is selected!')
    });

    it('4 - Verify Error Message when checkbox combination is not correct! (0.2 pts)', async () => {
        await selectorsRegister.confirmButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('The combination of selected profession(s) is NOT correct!')
    });

    it('5 - To solve a challenge select only checkboxes related to software testing roles + Confirm (0.2 pts)', async () => {
        await selectorsRegister.confirmButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('The combination of selected profession(s) is NOT correct!')

        await expect(selectorsRegister.firstDefaultCheckedCheckbox).toHaveAttribute('checked')
        await selectorsRegister.firstDefaultCheckedCheckbox.click()

        await selectorsRegister.secondCheckedCheckbox.click()

        await expect(selectorsRegister.fifthDefaultCheckedCheckbox).toHaveAttribute('checked')
        await selectorsRegister.fifthDefaultCheckedCheckbox.click()

        await selectorsRegister.fourthCheckedCheckbox.click()

        await selectorsRegister.confirmButton.click()

        await selectorsRegister.successMessage.getText('Wohoo! 🥳')
        await selectorsRegister.successMessageSecond.getText('You have solved the challenge!')
    });
});

describe('Radio-button Challenge', () => {
    beforeEach(async () => {
        openURL.open('radio-button')
    });

    it('1 - Verify Error Message when NO option is selected! (0.2 pts)', async () => {
        await selectorsRegister.confirmRadioChallenge.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('No option is selected!')
    });

    it('2 - Select each role + Confirm & verify text in message "[Role] is selected!"(0.4 pts)', async () => {
        await selectorsRegister.qaTestEngineerRole.click()
        await selectorsRegister.confirmRadioChallenge.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('QA Test Engineer is selected!')

        await selectorsRegister.softwareDeveloperRole.click()
        await selectorsRegister.confirmRadioChallenge.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Software Developer is selected!')

        await selectorsRegister.businessAnalystRole.click()
        await selectorsRegister.confirmRadioChallenge.click()
        //need to fix typo in the message "Analystic" on the front end
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Business Analystic is selected!')

        browser.refresh()

        await selectorsRegister.technicalWriterRole.click()
        await selectorsRegister.confirmRadioChallenge.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Technical Writer is selected!')
    });

    it('3 - To solve a challenge Confirm all professions at least once! (0.4 pts)', async () => {
        await selectorsRegister.qaTestEngineerRole.click()
        await selectorsRegister.confirmRadioChallenge.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('QA Test Engineer is selected!')

        await selectorsRegister.softwareDeveloperRole.click()
        await selectorsRegister.confirmRadioChallenge.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Software Developer is selected!')

        await selectorsRegister.businessAnalystRole.click()
        await selectorsRegister.confirmRadioChallenge.click()
        //need to fix typo in the message "Analystic" on the front end
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Business Analystic is selected!')

        await selectorsRegister.technicalWriterRole.click()
        await selectorsRegister.confirmRadioChallenge.click()

        await selectorsRegister.successMessage.getText('Wohoo! 🥳')
        await selectorsRegister.successMessageSecond.getText('You have solved the challenge!')
    });

    it('4 - Make a function with “for” cycle to: go through radio box elements, Click verify, Check the message with values from array', async () => {

        const roles = [$('#profession-tester'), $('#profession-developer'), $('#profession-analyst')]
        for (let i = 0; i < roles.length; i++) {
            await roles[i].click();
            await selectorsRegister.confirmRadioChallenge.click()
            await expect(selectorsRegister.confMessage).toHaveTextContaining('is selected!')
        }
    });
});

describe('Drop-down Challenge', () => {
    beforeEach(async () => {
        openURL.open('drop-down')
    });

    it('1 - Verify Error Message and Country when selected country is NOT Lithuania! (0.3 pts)', async () => {
        await selectorsRegister.dropdownCountries.selectByAttribute('value', 'Zimbabwe')
        await selectorsRegister.dropdownCountries.click()
        await selectorsRegister.dropdownVerifyButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Selected country is Zimbabwe, NOT Lithuania!')
    });

    it('2 - Verify Error Message with at least 3 countries (0.3 pts)', async () => {
        let countryName = ['Yemen', 'Solomon Islands', 'Portugal']
        for (let i = 0; i < countryName.length; i++) {
            await selectorsRegister.dropdownCountries.selectByAttribute('value', countryName[i])
            await selectorsRegister.dropdownCountries.click()
            await selectorsRegister.dropdownVerifyButton.click()
            await expect(selectorsRegister.confMessage).toHaveTextContaining(`Selected country is ${countryName[i]}, NOT Lithuania!`)
        }
    });

    it('3 - To solve a challenge select the country Lithuania from drop down list and VERIFY it! (0.4 pts)', async () => {
        await selectorsRegister.dropdownCountries.selectByAttribute('value', 'Lithuania')
        await selectorsRegister.dropdownCountries.click()
        await selectorsRegister.dropdownVerifyButton.click()
        await selectorsRegister.successMessage.getText('Wohoo! 🥳')
        await selectorsRegister.successMessageSecond.getText('You have solved the challenge!')
    });
});

describe('Hamburger Menu Challenge', () => {
    beforeEach(async () => {
        openURL.open('hamburger-menu')
    });

    it('1 - Verify Error Message for all options except VERIFY ME (0.6 pts)', async () => {
        await selectorsRegister.hamburgerMenuIcon.click()
        let selectorName = ['home', 'about', 'blog', 'contact'];
        for (let i = 0; i < selectorName.length; i++) {
            const homeLink = await $(`#hamburger-menu-${selectorName[i]}`)
            await homeLink.click()
            await expect(selectorsRegister.confMessage).toHaveTextContaining('You have selected other section than VERIFY ME!')
        }
    });

    it('2 - To solve a challenge, select the option VERIFY ME (0.4 pts)', async () => {
        await selectorsRegister.hamburgerMenuIcon.click()
        await selectorsRegister.homeLink.click()
        await selectorsRegister.successMessage.getText('Wohoo! 🥳')
        await selectorsRegister.successMessageSecond.getText('You have solved the challenge!')
    });
});

describe('Slider Challenge', () => {
    beforeEach(async () => {
        openURL.open('slider')
    });

    it('1 - Verify Error Message when number is NOT 100. Use boundary values! (0.5 pts)', async () => {
        await selectorsRegister.slider.dragAndDrop({ x: 170, y: 200 })
        await selectorsRegister.sliderVerifyButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('You have NOT reached 100 yet, try harder!🤪')
        await selectorsRegister.slider.dragAndDrop({ x: -170, y: 200 })
        await selectorsRegister.sliderVerifyButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('You have NOT reached 100 yet, try harder!🤪')

    });
    it('2 - To solve a challenge reach 100 and click Verify button! (0.5 pts)', async () => {
        await selectorsRegister.slider.dragAndDrop({ x: 200, y: 200 })
        await selectorsRegister.sliderVerifyButton.click()
        await selectorsRegister.successMessage.getText('Wohoo! 🥳')
        await selectorsRegister.successMessageSecond.getText('You have solved the challenge!')
    });
});

describe('Login Challenge', () => {
    beforeEach(async () => {
        openURL.open('login')
    });

    it('1 - Click Log in when nothing is entered. Verify the message! (0.2 pts)', async () => {
        await selectorsRegister.loginButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('You have NOT filled Username field')
    });

    it('2 - Click Log in when Username is filled & Password is empty. Verify the message! (0.2 pts)', async () => {
        await selectorsRegister.username.addValue('Pavelas')
        await selectorsRegister.loginButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Either password is incorrect or not filled!')
    });

    it('3 - Click Log in when Username is NOT filled & Password is filled. Verify the message! (0.2 pts)', async () => {
        await selectorsRegister.password.addValue('abcd1234')
        await selectorsRegister.loginButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('You have NOT filled Username field')
    });

    it('4 - Click Log in when Username is filled but Password is invalid. Verify the message! (0.2 pts)', async () => {
        await selectorsRegister.username.addValue('Pavelas')
        await selectorsRegister.password.addValue('abcd2254')
        await selectorsRegister.loginButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Either password is incorrect or not filled!')
    });

    it('5 - To solve a challenge click Log in when Username & Password are correctly filled! (0.2 pts)', async () => {
        await selectorsRegister.username.addValue('Pavelas')
        await selectorsRegister.password.addValue('abcd1234')
        await selectorsRegister.loginButton.click()
        await selectorsRegister.successMessage.getText('Wohoo! 🥳')
        await selectorsRegister.successMessageSecond.getText('You have solved the challenge!')
    });
});

describe('Simple Registration Form Challenge', () => {
    beforeEach(async () => {
        openURL.open('simple-form')
    });

    it('1 - Verify Error Message when all required fields are not filled! (0.2 pts)', async () => {
        await selectorsRegister.submitButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('No value entered in First Name field!')
    });

    it('2 - Verify Error Message when one of the mandatory field is not filled! (0.2 pts)', async () => {
        await selectorsRegister.firstName.addValue('Pavelas')
        await selectorsRegister.lastName.addValue('Mois')
        await selectorsRegister.email.addValue('pavelas@example.com')
        await selectorsRegister.gender.click()
        await selectorsRegister.submitButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('No value entered in Mobile Phone field!')
    });

    it('3 - Verify Error Message when email has wrong format! (0.2 pts)', async () => {
        await selectorsRegister.firstName.addValue('Pavelas')
        await selectorsRegister.lastName.addValue('Mois')
        await selectorsRegister.email.addValue('pavelasexample.com')
        await selectorsRegister.gender.click()
        await selectorsRegister.submitButton.click()
        await expect(selectorsRegister.confMessage).toHaveTextContaining('Email format is not valid!')
    });

    it('4 - To solve a challenge fill the registration form properly and SUBMIT!(0.4 pts)', async () => {
        await selectorsRegister.firstName.addValue('Pavelas')
        await selectorsRegister.lastName.addValue('Mois')
        await selectorsRegister.email.addValue('pavelas@example.com')
        await selectorsRegister.gender.click()
        await selectorsRegister.mobileNumber.addValue('68466666')
        await selectorsRegister.termsCheckbox.click()
        await selectorsRegister.submitButton.click()
        await selectorsRegister.successMessage.getText('Wohoo! 🥳')
        await selectorsRegister.successMessageSecond.getText('You have solved the challenge!')
    });
});