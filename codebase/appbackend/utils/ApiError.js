class ApiError extends Error{
    constructor(
        statuscode,
        massage= "somthing went wrong",
        _error = [],
        stack = ""
    ){
        super(massage)
        this.message = massage
        this.statuscode = statuscode
        this.statusCode = statuscode
        this.success = false;
        this.errors = _error
        if (stack) {
            this.stack = stack            
        } else {
            Error.captureStackTrace(this, this.constuctor)
        }
    
    }
}

export {ApiError}