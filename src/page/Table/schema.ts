import {z} from 'zod';

export const taskSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  avatar: z.string(),
  phone: z.number(),
  workName: z.string(),
  readCount: z.number(),
  customer: z.string(),
  status: z.string(),
  createTime: z.date(),
  actions: z.boolean(),
})

export type Task = z.infer<typeof taskSchema>