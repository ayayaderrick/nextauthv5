import * as z from "zod";

export const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  password: z
    .string({ required_error: "Password is required" })
    .min(8)
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/
    ),
});
