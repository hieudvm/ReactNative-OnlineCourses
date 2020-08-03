export const login = (userName, passowrd) => {
    if(userName === 'admin') {
        if(passowrd === '123456') {
            return {status: 200}
        } else {
            return {status: 404, errorString: 'Username and password are not match'}
        }
    }
    return {status: 404, errorString: 'Username is not existed'}
}