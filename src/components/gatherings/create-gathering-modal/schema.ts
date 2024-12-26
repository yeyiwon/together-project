import { File } from '@web-std/file';
import { z } from 'zod';

const dateSchema = z.object({
  date: z.date(),
  hour: z.number(),
  minutes: z.number(),
  ampm: z.enum(['AM', 'PM']),
});

export const createGatheringSchema = z.object({
  name: z.string().min(1),
  location: z.enum(['건대입구', '을지로3가', '신림', '홍대입구']),
  image: z.instanceof(File),
  type: z.enum(['OFFICE_STRETCHING', 'MINDFULNESS', 'WORKATION']),
  date: z.object({
    gathering: dateSchema,
    registration: dateSchema.optional(),
  }),
  capacity: z
    .string()
    .refine((value) => !isNaN(Number(value)), {
      message: '숫자만 입력 가능합니다.',
    })
    .refine((value) => Number(value) >= 5, {
      message: '최소 5인 이상 입력해주세요.',
    }),
});

export type CreateGatheringForm = z.infer<typeof createGatheringSchema>;
