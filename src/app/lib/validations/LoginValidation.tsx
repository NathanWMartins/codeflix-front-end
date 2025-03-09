import React from 'react'
import {z} from 'zod';

export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export default LoginFormSchema