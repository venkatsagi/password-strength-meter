const hasNumber = value => {
    return new RegExp(/[0-9]/).test(value);
}

const hasMixed = value => {
    return new RegExp(/[a-z]/).test(value) && 
            new RegExp(/[A-Z]/).test(value);
}

const hasSpecial = value => {
    return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
}

export const strengthColor = count => {

    if (count < 2)
        return '#dc3545';

    if (count < 3)
        return '#ffc107';

    if (count < 4)
        return '#17a2b8 ';

    if (count < 6)
        return '#28a745';
}

export const getVariant = count => {

    if (count < 2)
        return 'danger';

    if (count < 3)
        return 'warning';

    if (count < 4)
        return 'info';

    if (count < 6)
        return 'success';
}

export const strengthIndicator = value => {
    let strengths = 0;

    if (value.length > 5)
        strengths++;

    if (value.length > 7)
        strengths++;

    if (hasNumber(value))
        strengths++;

    if (hasSpecial(value))
        strengths++;

    if (hasMixed(value))
        strengths++;

    return strengths;
}