class ApiResponse {
    constructor(status, message = 'success', data, success) {
        this.status = status < 400;
        this.message = message;
        this.data = data;
        this.success = success;
    }
}
