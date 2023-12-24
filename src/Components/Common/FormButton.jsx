import React from 'react'

const FormButton = (props) => {
    const otherProps = { ...props }
    if (otherProps.className) delete otherProps.className;
    return (
        <button type='submit'
            className={`bg-primary hover:bg-btnHover text-white font-poppins font-medium text-base px-4 py-3 rounded-lg mt-24 focus:ring focus:outline-none ${props?.className || ""}`}
            {...otherProps}
        >
            {props?.text || "submit"}
        </button>
    )
}

export default FormButton