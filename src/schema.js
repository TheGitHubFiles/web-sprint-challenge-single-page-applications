import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required('Name required').min(2, 'name needs to be at least 2 chars'),
    size: yup.string().oneOf(['Large', 'Medium', 'Small']),
    pep: yup.boolean().oneOf([true, false]),
    sausage: yup.boolean().oneOf([true, false]),
    bacon: yup.boolean().oneOf([true, false]),
    mushroom: yup.boolean().oneOf([true, false]),
    special: yup.string(),
})
