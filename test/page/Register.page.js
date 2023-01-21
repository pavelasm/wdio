import Page from '../pageobjects/page'

class selectorsRegister extends Page {

    get button() { return $('#verify-btn=VERIFY') }
    get buttonNumberChallenge() { return $('#number-verify=VERIFY') }
    get greenButton() { return $('#simple-button-2=Green') }
    get redButton() { return $('#simple-button-3=Red') }
    get yellowButton() { return $('#simple-button-1=Yellow') }
    get confirmButton() { return $('#confirm-btn') }
    get confirmRadioChallenge() { return $('#confirm-radio-challenge') }
    get numberBox() { return $('#number-box') }
    get confMessage() { return $('#conf-msg') }
    get firstName() { return $('#first-name') }
    get successMessage() { return $('h1=Wohoo! 🥳') }
    get successMessageSecond() { return $('p=You have solved the challenge!') }
    get firstDefaultCheckedCheckbox() { return $('#checkbox1') }
    get secondCheckedCheckbox() { return $('[name="checkbox2"]') }
    get thirdDefaultCheckedCheckbox() { return $('[name="checkbox3"]') }
    get fourthCheckedCheckbox() { return $('//body/section/div[2]/div[2]/input[4]') }
    get fifthDefaultCheckedCheckbox() { return $('#ba') }
    get qaTestEngineerRole() { return $('#profession-tester') }
    get softwareDeveloperRole() { return $('#profession-developer') }
    get businessAnalystRole() { return $('#profession-analyst') }
    get technicalWriterRole() { return $('#profession-writer') }
    get dropdownCountries() { return $('[name="country"]') }
    get dropdownVerifyButton() { return $('#dropdown-verify-btn') }
    get hamburgerMenuIcon() { return $('[class="icon"]') }
    get homeLink() { return $('#hamburger-menu-verify') }
    get slider() { return $('#slider') }
    get sliderVerifyButton() { return $('#slider-verify-btn') }
    get loginButton() { return $('#login-btn') }
    get username() { return $('#user-name') }
    get password() { return $('#password') }
    get submitButton() { return $('#submit-btn') }
    get firstName() { return $('#first-name') }
    get lastName() { return $('#last-name') }
    get email() { return $('#email') }
    get gender() { return $('#sex-male') }
    get mobileNumber() { return $('#mobile-number') }
    get termsCheckbox() { return $('#terms-checkbox') }
}

export default new selectorsRegister()