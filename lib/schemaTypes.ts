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

export const addressSchema = z.object({
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  sector: z.string().min(1, { message: 'Sector / Block is required' }),
  road: z.string().min(1, { message: 'Road number is required' }),
  house: z.string().min(1, { message: 'House number is required' }),
});

export const updateGeneralInfoSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(1, 'Full name required'),
  phone: z.string().min(11, 'Phone number must contain 11 digits'),
})

export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TSignInSchema = z.infer<typeof signInSchema>;
export type TUpdateGeneralInfoSchema = z.infer<typeof updateGeneralInfoSchema>;
export type TAddressSchema = z.infer<typeof addressSchema>;
