import isEmpty from 'lodash/isEmpty'
export default function Validation(data) {
    let errors = {}
    if (!data.email || !data.password) {
        errors = `All Fields are Required`
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}