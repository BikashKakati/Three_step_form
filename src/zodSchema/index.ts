import { z } from "zod";

export const profileSchema = z.object({
    firstName: z
      .string()
      .min(1, { message: "First name is required." })
      .max(50, { message: "First name cannot exceed 50 characters." })
      .regex(/^[A-Za-z]+$/, { message: "First name can only contain letters." }),
      
    lastName: z
      .string()
      .min(1, { message: "Last name is required." })
      .max(50, { message: "Last name cannot exceed 50 characters." })
      .regex(/^[A-Za-z]+$/, { message: "Last name can only contain letters." }),
      
    email: z
      .string()
      .email({ message: "Please enter a valid email address." }),
      
    phone: z
      .string()
      .min(10, { message: "Phone number must contains 10 digits." })
      .max(10, { message: "Phone number must contains 10 digits." })
      .regex(/^\d+$/, { message: "Phone number can only contain numbers." }),
      
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .max(100, { message: "Password cannot exceed 100 characters." })
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        { message: "Password must contain letters, numbers, and special characters." }
      ),
      
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password must be at least 8 characters long." })
      .max(100, { message: "Confirm Password cannot exceed 100 characters." })
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        { message: "Confirm Password must contain letters, numbers, and special characters." }
      )
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });
export const businessSchema = z.object({
    brandName: z
      .string()
      .min(1, { message: "Brand name is required." })
      .max(100, { message: "Brand name cannot exceed 100 characters." })
      .regex(/^[A-Za-z0-9\s]+$/, { message: "Brand name can only contain letters and spaces." }),
      
    brandType: z
      .string()
      .min(1, { message: "Brand type is required." })
      .max(50, { message: "Brand type cannot exceed 50 characters." })
      .regex(/^[A-Za-z\s]+$/, { message: "Brand type can only contain letters and spaces." }),
      
    streetAddress: z
      .string()
      .min(1, { message: "Street address is required." })
      .max(150, { message: "Street address cannot exceed 150 characters." }),
      
    city: z
      .string()
      .min(1, { message: "City is required." })
      .max(50, { message: "City cannot exceed 50 characters." })
      .regex(/^[A-Za-z\s]+$/, { message: "City can only contain letters and spaces." }),
      
    zipCode: z
      .string()
      .regex(/^[1-9][0-9]{2}\s{0,1}[0-9]{3}$/, { message: "Please use a valid ZIP code" }),
      
    taxIdNumber: z
      .string()
      .min(9, { message: "Tax ID number must be at least 9 characters long." })
      .max(15, { message: "Tax ID number cannot exceed 15 characters." })
      .regex(/^\d+$/, { message: "Tax ID number can only contain numbers." })
  });
  

export type ProfileSchemaType = z.infer<typeof profileSchema>
export type BusinessSchemaType = z.infer<typeof businessSchema>