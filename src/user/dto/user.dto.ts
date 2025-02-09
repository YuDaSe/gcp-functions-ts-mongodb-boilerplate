import { z } from 'zod';

export const UserDto = z.object({
    id: z.string().optional(),
    name: z.string().min(1),
    email: z.string().email(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

export type UserDto = z.infer<typeof UserDto>;