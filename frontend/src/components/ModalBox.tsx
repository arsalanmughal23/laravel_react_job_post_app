import { ReactElement } from "react";
import {
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
} from "tw-elements-react";
import { themeClass } from "../constants/constants";
import Button, { ButtonPropsType } from "./Button";
import { FormProps } from "react-router-dom";

interface ModalBoxPropsType {
    showModal: boolean,
    setShowModal: Function,
    children: ReactElement,
    isCenter?: boolean,
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
    size?: 'sm' | 'lg' | 'xl' | 'fullscreen',
    restrictBackDrop?: boolean,
    formProps?: FormProps | null
}
interface ModalBoxContentPropsType {
    title: string,
    setShowModal: Function,
    theme?: 'primary' | 'secondary',
    children: ReactElement,
    footerActions?: ButtonPropsType[]
}

export default function ModalBox({ ...props }: ModalBoxPropsType & ModalBoxContentPropsType) {

    let {
        showModal = false,
        setShowModal,
        isCenter = false,
        position = 'top-right',
        size = 'lg',
        restrictBackDrop = false,
        children,
        formProps,
    } = { ...props };

    return (
        <>
            {/* Modal */}
            <TEModal show={showModal} setShow={setShowModal} staticBackdrop={restrictBackDrop} className={`${isCenter && 'flex items-center'}`}>
                <TEModalDialog position={position} className={`${isCenter && 'left-0'} p-5`} size={size}
                    theme={{
                        show: "translate-x-0 opacity-100",
                        hidden: "translate-x-[100%] opacity-0",
                    }}
                >
                    <TEModalContent>
                        { formProps ? (
                            <form {...formProps} >
                                <ModalBoxContent {...props} >
                                    { children }
                                </ModalBoxContent>
                            </form>
                        ) : (
                            <ModalBoxContent {...props} >
                                { children }
                            </ModalBoxContent>
                        )}
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </>
    );
}

const ModalBoxContent = ({
    title,
    setShowModal,
    theme,
    children,
    footerActions = []
}:ModalBoxContentPropsType) => {
    
    let headerClasses = "";
    let headerTitleClasses = "";

    switch (theme) {
        case 'primary':
            headerClasses += `${themeClass.themeBgGradientPrimary}`;
            headerTitleClasses += `${themeClass.themeTextHighlightPrimary}`;
        break;
        case 'secondary':
            headerClasses += `${themeClass.themeBgGradientSecondary}`
            headerTitleClasses += `${themeClass.themeTextHighlightSecondary}`;
        break;
    }
    headerTitleClasses += ` text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200`;

    return (
        <>
            {/* Modal Header Content */}
            <TEModalHeader className={headerClasses}>
                <h5 className={headerTitleClasses}>
                    {title}
                </h5>

                {/* Close button */}
                <button type="button" onClick={() => setShowModal(false)} aria-label="Close"
                    className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                >
                    {/* Cross Icon Svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </TEModalHeader>

            {/* Modal Body Content */}
            <TEModalBody>
                {children}
            </TEModalBody>

            {/* Modal Footer Content */}
            { (footerActions.length > 0) && (
                <TEModalFooter>
                    { footerActions.map((eachAction, key) => (
                        <span key={`feedbackModalFooterAction_${key.toString()}`}>
                            <Button {...eachAction} />
                        </span>
                    ))}
                </TEModalFooter>
            )}
        </>
    )
}
