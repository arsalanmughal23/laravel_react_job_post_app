import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { themeClass } from "../../constants/constants"

export default function ResetPassword() {

    const resetPasswordAction = () => {}

    return (
        <form>
            <p className="mb-4">Reset your password</p>
            {/* <!--Email input--> */}
            <Input
                type="text"
                name="email"
                label="Email"
                customClasses="mb-4"
                isRequired={true}
            ></Input>

            {/* <!--Password input--> */}
            <Input
                type="password"
                name="password"
                label="Password"
                customClasses="mb-4"
                isRequired={true}
            ></Input>

            <div className="mb-12 pt-1 text-center">
                {/* <!--Submit button--> */}
                <Button label="Reset Password" customClasses={`${themeClass.themeBtnPrimary} mb-1`} handleClick={resetPasswordAction} isFullWidth={true} />
            </div>

            {/* <!--Register button--> */}
            <div className="items-center md:flex md:justify-between pb-6">
                <Link to="/login" >
                    <p className="mb-0 mr-2">Login</p>
                </Link>
            </div>
        </form>
    )
}