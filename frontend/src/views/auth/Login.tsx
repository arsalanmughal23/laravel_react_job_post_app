import { useDispatch } from "react-redux"
import { storeToken, storeUser } from "../../slicers/authSlice"
import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { themeClass } from "../../constants/constants"
import FieldGroup from "../../components/FieldGroup"
import { TEInput, TERipple } from "tw-elements-react"
import { useRef } from "react"
import axiosClient from "../../axios-client"

export default function Login() {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch()

    const onSubmit = (ev:React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        const payload = {
            email: emailRef.current?.value || null,
            password: passwordRef.current?.value || null,
        }

        axiosClient.post('/login', payload)
            .then(({data}) => {
                dispatch(storeUser(data.data.user))
                dispatch(storeToken(data.data.token))
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <p className="mb-4">Please login to your account</p>
            
            <FieldGroup errors={['Title is required']} customClasses="mb-4">
                {/* <!--Email input--> */}
                <TEInput
                    name="email"
                    labelID="email"
                    label="Email"
                    type="text"
                    ref={emailRef}
                    className={`mb-4`}
                    required={true}
                />
            </FieldGroup>
            
            {/* <!--Password input--> */}
            <FieldGroup errors={['Password is required']} customClasses="mb-4">
                <TEInput
                    name="password"
                    labelID="password"
                    label="Password"
                    type="password"
                    ref={passwordRef}
                    className={`mb-4`}
                    required={true}
                />
            </FieldGroup>

            <div className="mb-12 pt-1 text-center">
                {/* <!--Submit button--> */}
                {/* <Button label="Login" customClasses={`${themeClass.themeBtnPrimary} mb-1`} handleClick={loginAction} isFullWidth={true} /> */}
                <TERipple rippleColor="light" 
                    className={ themeClass.themeBtnPrimary.concat(" rounded text-xs font-medium leading-normal w-full") } >
                    <button
                        type="submit"
                        className={ 'uppercase px-6 pb-2 pt-2.5 w-full' }
                    >
                        { 'Login' }
                    </button>
                </TERipple>

                {/* <!--Forgot password link--> */}
                <Link to="/forgot-password" className="block mb-1">
                    <Button label="Forgot password?" customClasses={themeClass.themeBtnOutlinePrimary} isFullWidth={true} />
                </Link>
            </div>

            {/* <!--Register button--> */}
            <div className="items-center md:flex md:justify-between pb-6">
                <Link to="/signup" >
                    <p className="mb-0 mr-2">Don't have an account?</p>
                </Link>

                <Link to="/signup" >
                    <Button label="Sign Up" customClasses={themeClass.themeBtnOutlinePrimary} />
                </Link>
            </div>
        </form>
    )
}