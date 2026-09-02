import { z } from "zod";

const tags = (value) => {
    return !/<[a-zA-Z][^>]*>/.test(value);
};

export const consultationValidationSchema = z.object({
    fullName: z.string()
        .trim()
        .min(1, "Full Name required")
        .min(3, "Full Name must be at least 3 characters.")
        .max(100, "Full Name cannot exceed 100 characters.")
        .refine(tags, "Tags not allowed"),
    email: z.preprocess((input) => {
        if (typeof input === "string") {
            return input.trim();
        }
        return input;
    }, z.string().email("Invalid email address")),
    phoneNumber: z.string()
        .trim()
        .min(1, "Phone number required")
        .min(11, "Phone number must be at least 11 characters.")
        .max(15, "Phone number cannot exceed 15 characters.")
        .regex(
            /^\+[1-9]\d{9,13}$/,
            "Must be valid number starting with + and country code"
        ),
    company: z.string()
        .trim()
        .min(1, "Company name required")
        .min(2, "Company name must be at least 2 characters.")
        .max(50, "Company name should be less than 50 characters")
        .refine(tags, "Tags not allowed"),
    service: z.string()
        .trim()
        .min(1, "Service required")
        .max(45, "Service should be less than 45 characters")
        .refine(tags, "Tags not allowed"),
    projectDetail: z.string()
        .trim()
        .min(1, "Project detail required")
        .min(50, "Project detail must be at least 50 characters.")
        .max(2000, "Project detail cannot exceed 2000 characters.")
        .refine(tags, "Tags not allowed")
});
