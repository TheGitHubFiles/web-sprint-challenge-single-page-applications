import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import styled from 'styled-components'
import notToday from './schema.js'
import { Link } from 'react-router-dom'

const StyledForm = styled.div`
    display: flex;
    flex-direction:column;
    text-align:center;
    label{
    padding:.5%;
    } 
    button{
        text-align:center;
        width:7%;
        margin:auto;
    }
    .red{
        color:red;
    }
`
const startValues = {
    name: '',
    size: '',
    pep: false,
    sausage: false,
    bacon: false,
    mushroom: false,
    special: '',
}
const errorValues = {
    name: '',
    size: '',
    pep: false,
    sausage: false,
    bacon: false,
    mushroom: false,
    special: '',

}

export default function Form(props) {
    const { submit } = props
    const [form, setForm] = useState(startValues)
    const [error, setError] = useState(errorValues)
    const [disabled, setDisabled] = useState(true)

    const setFormError = (name, value) => {
        yup.reach(notToday, name).validate(value)
            .then(() => setError({ ...error, [name]: '' }))
            .catch(err => setError({ ...error, [name]: err.errors[0] }))
    }

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormError(name, valueToUse)
        setForm({ ...form, [name]: valueToUse })

    }
    const doSubmit = evt => {
        evt.preventDefault()

        submit({
            ...form,
            name: form.name.trim(),
            special: form.special.trim(),

        })
        setForm(startValues)




    }

    useEffect(() => {
        notToday.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

    return (
        <StyledForm>
            <form onSubmit={doSubmit}>
                <label>Name
                    <input onChange={change}
                        value={form.name}
                        name='name'
                        type='text'>
                    </input>
                </label>
                <h3>Choose Size</h3>
                <label>
                    <select onChange={change}
                        value={form.size}
                        name='size'
                        type='text'>
                        <option>Pick Size</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                </label>
                <h3>Toppings</h3>
                <label>pep
                    <input onChange={change}
                        checked={form.pep}
                        name='pep'
                        type='checkbox'>
                    </input>
                </label>
                <label>sausage
                    <input onChange={change}
                        checked={form.sausage}
                        name='sausage'
                        type='checkbox'>
                    </input>
                </label>
                <label>bacon
                    <input onChange={change}
                        checked={form.bacon}
                        name='bacon'
                        type='checkbox'>
                    </input>
                </label>
                <label>mushroom
                    <input onChange={change}
                        checked={form.mushroom}
                        name='mushroom'
                        type='checkbox'>
                    </input>
                </label>
                <h3>Special Instruction</h3>
                <label>
                    <input onChange={change}
                        value={form.special}
                        name='special'
                        type='text'>
                    </input>
                </label>
                <Link to='/'>
                    <button>Back to home</button>
                </Link>
                <button name='submit' disabled={disabled}>Add to Order</button>
            </form>
            <div className='red'>
                <div>{error.name}</div>
                <div>{error.size}</div>

            </div>
        </StyledForm>
    )
}