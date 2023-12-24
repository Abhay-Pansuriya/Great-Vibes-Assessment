import React from 'react'

const Input = (props) => {
    const { type, value, error } = props
    const otherProps = { ...props }
    if (otherProps.className) delete otherProps.className;
    return <div>
        <input
            className={`w-full text-sm font-normal font-poppins placeholder-placeholder text-dark border border-border rounded bg-card px-3 py-2 focus:ring mt-1 focus:outline-none ${props?.className || ""}`}
            type={type || "text"}
            value={value}
            {...otherProps}
        />
        {error && <span className='text-error font-poppins font-normal text-xs'>{error}</span>}
    </div>
}

export default Input