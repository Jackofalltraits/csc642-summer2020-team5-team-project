import isEmpty from 'lodash/isEmpty'
export default function Validation(data) {
    let errors = {}
    if (!data.firstName || !data.lastName || !data.email || !data.password || !data.confirmPassword) {
        errors = `All Fields are Required`
    } else if (data.password !== data.confirmPassword) {
        errors = `Passwords Must Be Same`
    }

    console.log(errors)

    return {
        isValid: isEmpty(errors),
        errors
    }
}