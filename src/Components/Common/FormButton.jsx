import React from 'react'

const FormButton = (props) => {
    const { primary } = props
    return (
        <button type='submit'
            className={`
            ${primary ?
                    "bg-primary hover:bg-btnHover text-white" :
                    "bg-card hover:bg-white text-primary border border-primary"}
             font-poppins font-medium text-base px-4 py-3 rounded-lg focus:ring focus:outline-none`
            }
            {...props}
        >
            {props?.text || "submit"}
        </button>
    )
}

export default FormButton