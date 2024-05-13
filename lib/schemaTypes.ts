import { z } from 'zod'

export const signUpSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(1, 'Full name required'),
  password: z.string().regex(/^(?=.*\d|\W)(?=.*[A-Z])(?=.*[a-z]).{8,}$/, {
    message: "Password must contain digit, uppercase, lowercase letter and 8 characters minimum",
  })
})

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password length is 8 character minimum'),
})

export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TSignInSchema = z.infer<typeof signInSchema>;
