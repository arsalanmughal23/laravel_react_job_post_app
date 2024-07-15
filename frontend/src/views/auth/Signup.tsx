import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { themeClass } from "../../constants/constants";
import { useEffect, useRef, useState } from "react";
import { TEInput, TERipple, TESelect } from "tw-elements-react";
import axiosClient from "../../axios-client";
import { useDispatch } from "react-redux";
import FieldGroup from "../../components/FieldGroup";

import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

export default function Signup() {
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState('job_poster')
    useEffect(() => {
        validateRole();
    }, [selectedRole])

    const [errors, setErrors] = useState({
        selectedRole: ''
    });

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);

    const roles = [
        { text: "Job Poster", value: 'job_poster' },
        { text: "Job Seeker", value: 'job_seeker' }
    ];

    const handleRoleChange = (e: any) => {
        setSelectedRole(e.value);
    }

    const validateRole = () => {
        let isValid = ['job_poster', 'job_seeker'].includes(selectedRole ?? '');

        if (!isValid) {
            setErrors({ selectedRole: 'Invalid Role' });
        } else {
            setErrors({ selectedRole: '' })
        }
            
        return isValid;
    };

    const onSubmit = (ev:React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        
        validateRole();
        if (!validateRole()) {
            alertify.error('Invalid Role');
            return;
        }

        const payload = {
            role: selectedRole,
            name: nameRef.current?.value,
            email: emailRef.current?.value || null,
            password: passwordRef.current?.value || null,
            password_confirmation: passwordConfirmationRef.current?.value || null,
        }
        axiosClient.post('/register', payload)
            .then(({data}) => {
                alertify.success(data.message);
                navigate('/login')
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <p className="mb-4">Please sign up your account</p>

            <FieldGroup errors={[errors.selectedRole]} customClasses="mb-4">
                {/* <!--Role input--> */}
                <TESelect
                    data={roles}
                    value={selectedRole}
                    onValueChange={handleRoleChange}
                    name="role"
                    label="Role"
                    className={`mb-4`}
                    required={true}
                />
            </FieldGroup>

            {/* <!--Name input--> */}
            <TEInput
                name="name"
                labelID="name"
                label="Name"
                type="text"
                ref={nameRef}
                className={`mb-4`}
                required={true}
            />

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

            {/* <!--Password input--> */}
            <TEInput
                name="password"
                labelID="password"
                label="Password"
                type="password"
                ref={passwordRef}
                className={`mb-4`}
                required={true}
            />
            
            {/* <!--Confirm-Password input--> */}
            <TEInput
                name="password_confirmation"
                labelID="password_confirmation"
                label="Confirm Password"
                type="password"
                ref={passwordConfirmationRef}
                className={`mb-4`}
                required={true}
            />

            {/* <!--Submit button--> */}
            <div className="mb-12 pb-1 pt-1 text-center">
                <TERipple rippleColor="light" 
                    className={ themeClass.themeBtnPrimary.concat(" rounded text-xs font-medium leading-normal w-full") } >
                    <button
                        type="submit"
                        className={ 'uppercase px-6 pb-2 pt-2.5 w-full' }
                    >
                        { 'Sign Up' }
                    </button>
                </TERipple>
            </div>

            {/* <!--Register button--> */}
            <div className="items-center md:flex md:justify-between pb-6">
                <NavLink to="/login" >
                    <p className="mb-0 mr-2">Already have an account?</p>
                </NavLink>

                <NavLink to="/login" >
                    <Button label="Login" customClasses={themeClass.themeBtnOutlinePrimary} />
                </NavLink>
            </div>
        </form>
    )
}