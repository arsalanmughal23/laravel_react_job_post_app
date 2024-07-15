import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { themeClass } from "../../constants/constants";

export default function ForgotPassword() {
    const navigate = useNavigate();

    const forgotPasswordAction = () => {
        navigate("/reset-password");
    }

    return (
        <form>
            <p className="mb-4">Apply for forgot password</p>
            {/* <!--Email input--> */}
            <Input
                type="text"
                name="email"
                label="Email"
                customClasses="mb-4"
                isRequired={true}
            ></Input>

            <div className="mb-12 pt-1 text-center">
                {/* <!--Submit button--> */}
                <Button label="Forgot Password" customClasses={`${themeClass.themeBtnPrimary} mb-1`} handleClick={forgotPasswordAction} isFullWidth={true} />
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