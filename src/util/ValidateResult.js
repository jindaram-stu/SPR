class ValidateResult {
    constructor(status,message) {
        this.status = status;
        this.message = message;
    }

    alertMessage() {
        alert(this.message);
    }
}