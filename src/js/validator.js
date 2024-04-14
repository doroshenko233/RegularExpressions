export default class Validator {
    constructor(userName) {
        this.userName = userName;
    }

    validateUsername() {
       
        const hasThreeConsecutiveDigits = /(\d){3}/.test(this.userName);
        const isValidStart = /^[^_-\d]/.test(this.userName);
        const isValidEnd = /[^_-\d]$/.test(this.userName);
        const isValidUserName = /^[a-zA-Z0-9_-]+$/i.test(this.userName);
                
        return !hasThreeConsecutiveDigits && isValidStart && isValidEnd && isValidUserName;
    }
}