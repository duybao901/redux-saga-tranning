

const validate = values => {
    var errors = {};
    const { title } = values;
    console.log(values)
    if (!title) {
        errors.title = 'Invalid Title'; //  errors.title  === errors['title']
    } else {
        if (title.trim().length > 5)         
            errors.title= 'Title more than 5 character';
    }
    
    return errors;
}

export default validate;