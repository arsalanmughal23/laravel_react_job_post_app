import { TERipple } from "tw-elements-react";

export interface ButtonPropsType {
    label: string,
    buttonType?: 'button' | 'submit',
    customClasses?: string,
    childCustomClasses?: string,
    handleClick?: Function,
    style?: {},
    isFullWidth?: boolean
    rippleColor?: string,
}

export default function Button(
    {
        label='Button',
        buttonType='button',
        customClasses='',
        childCustomClasses='',
        handleClick,
        style={},
        isFullWidth=false,
        rippleColor='light'
    }:ButtonPropsType) {
 
    return (
        <TERipple rippleColor={rippleColor} 
            className={ customClasses.concat(" rounded text-xs font-medium leading-normal") + (isFullWidth ? ' w-full' : '') } >
            <button
                type={buttonType}
                className={ 'uppercase px-6 pb-2 pt-2.5' + (isFullWidth ? ' w-full ' : ' ') + childCustomClasses }
                style={{ ...style, /**background: "var(--primary-gradient)"**/ }}
                onClick={()=>{handleClick && handleClick()}}
            >
                { label }
            </button>
        </TERipple>
    )
}