import { TESelect } from "tw-elements-react";

export interface SelectOptionType {
    text: string,
    value: string | number,
    defaultSelected?: boolean,
    disabled?: boolean
}

interface SelectPropsType {
    optionList: SelectOptionType[],
    label: string,
    name: string,
    isRequired?: boolean,
    customClasses?: string,
    id?: string,
    search?: boolean
}

export default function Select({
    optionList,
    label,
    name,
    isRequired=false,
    customClasses,
    id,
    search=false
}:SelectPropsType): JSX.Element {

    return (
        <TESelect data={optionList} 
            label={label} 
            name={name} 
            required={isRequired} 
            className={customClasses} 
            id={id}
            search={search}
        />
    );
}