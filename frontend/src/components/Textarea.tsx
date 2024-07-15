import { TETextarea } from "tw-elements-react";

export interface TextareaPropsType {
    label: string,
    name: string,
    value?: string,
    isRequired?: boolean,
    customClasses?: string,
    counter?: boolean,
    maxLength?: number,    
    id?: string,
    rows?: number
    handleChange?: Function,
}

export default function Textarea({
    label = "Enter Message",
    name, value,
    isRequired = false,
    customClasses,
    counter = false,
    maxLength = 20,
    id, rows = 4,
    handleChange = () => {},
}: TextareaPropsType): JSX.Element {
    return (
        <TETextarea name={name} value={value} labelID={name} label={label}
            id={id} className={customClasses} required={isRequired}
            counter={counter} maxLength={maxLength} rows={rows}
            onChange={() => handleChange()}
        ></TETextarea>
    );
}