import React from 'react'

const Label = (props) => {
    const { text, isRequired } = props;
    return (<label className='font-poppins font-medium text-sm'>{text}{isRequired && <span className='text-error text-xs font-poppins'>*</span>}</label>)
}

export default Label