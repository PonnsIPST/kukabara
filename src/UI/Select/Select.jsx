import React from "react";

const Select = ({ options, defValue, value, onChange }) => {
    return (
        <select value={value} onChange={evt => onChange(evt.target.value)}>
            <option disabled value="">{defValue}</option>
            {options.map(option =>
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default Select;