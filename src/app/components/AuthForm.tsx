'use client'
import React from 'react'
import { InputField } from './InputField';

type AuthFormProps = {
    formType: 'login' | 'register';
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ formType, onSubmit }) => {
    return (
        <div>
            <form
                onSubmit={onSubmit}
                className="flex w-full max-w-md rounded flex-col space-y-4 bg-gray-200 bg-opacity-90 px-4 py-8 shadow -lg">
                <div className="flex flex-col items-center space-y-4 ">
                    <h1 className="text-3xl font-bold text-black">
                        {formType == 'login' ? 'Login' : 'Register'}
                    </h1>
                    <p className='text-sm text-gray-500'>
                        {formType == 'login'
                            ? 'New to the App?'
                            : 'Already have an account?'}{' '}
                        <a
                            href={formType == 'login' ? '/register' : '/login'}
                            className="text-blue-600 hover:underline">
                            {formType == 'login' ? 'Register' : 'Login'}
                        </a>
                    </p>
                </div>
                <div className="mt-8 flex flex-col space-y-4">
                    <InputField
                        id="email"
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                    />
                    <InputField
                        id="password"
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                    />
                    {formType == 'register' && (
                        <InputField
                            id="confirmPassword"
                            type="confirmPassword"
                            label="ConfirmPassword"
                            placeholder="Confirm your password"
                        />
                    )}
                </div>
                <div className="flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                    <button
                        type="submit"
                        className="text-white font-semibold flex w-full items-center justify-center rounded-lg bg-blue-600 hover:bg-bue-700 px-4 py-2 text-sm sm:w-auto sm:px-8">
                        {formType == 'login' ? 'Login' : 'Register'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AuthForm