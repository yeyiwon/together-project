import { z } from 'zod';

// 공통 정규식
const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$&*?!%])[A-Za-z\d!@$%&*?]{8,15}$/;

// 로그인 스키마
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요' })
    .email({ message: '이메일 형식이 아닙니다' }),
  password: z.string().min(1, { message: '비밀번호를 입력해주세요' }),
});

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: '이름을 입력해주세요' })
      .min(2, { message: '이름은 2글자 이상이어야 합니다' }),
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요' })
      .email({ message: '이메일 형식이 아닙니다' }),
    companyName: z
      .string()
      .min(1, { message: '회사명을 입력해주세요' })
      .min(2, { message: '회사명을 정확히 입력해주세요' }),
    password: z
      .string()
      .min(1, { message: '비밀번호를 입력해주세요' })
      .min(8, { message: '비밀번호는 8자리 이상이어야 합니다' })
      .regex(passwordRegex, {
        message: '영문, 숫자, 특수문자(~!@#$%^&*)를 모두 조합해 주세요',
      }),
    confirmPassword: z
      .string()
      .min(1, { message: '비밀번호를 다시 입력해주세요' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
  });
