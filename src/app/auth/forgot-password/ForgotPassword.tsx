'use client'
import { InputField } from '@/app/components/InputField';
import React from 'react'

export function ForgotPasswordForm() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('submit from forgot password')
    }

    return (
        <form
            onSubmit={onSubmit}
            className="flex w-full max-w-md rounded flex-col space-y-4 bg-gray-200 bg-opacity-90 px-4 py-8 shadow -lg">
            <h1 className="text-3xl font-bold text-black"> Forgot Password </h1>
            <p className="text-sm text-gray-500">
                Enter your email to reset your password
            </p>
            <InputField
                id="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
            />

            <button
                type="submit"
                className="text-white font-semibold flex w-full items-center justify-center rounded-lg bg-yellow-500 hover:bg-bue-700 px-4 py-2 text-sm sm:w-auto sm:px-8">
                Reset Password
            </button>
        </form>
    )
}

export default ForgotPasswordForm