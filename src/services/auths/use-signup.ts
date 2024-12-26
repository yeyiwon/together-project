import { type UseFormReturn } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import useCustomParams from '~/src/hooks/use-custom-params';
import { post } from '~/src/services/api';
import {
  type ErrorResponseData,
  type Signuptype,
  type SuccessResponseData,
} from '~/src/services/auths/types';

export function useSignup(form: UseFormReturn<Signuptype>) {
  const router = useRouter();

  const { createUrl, getParams } = useCustomParams();
  const params = getParams(['callback', 'open']);

  return useMutation<SuccessResponseData, ErrorResponseData, Signuptype>({
    mutationFn: (data) =>
      post('auths/signup', {
        name: data.name,
        email: data.email,
        companyName: data.companyName,
        password: data.password,
      }),
    onSuccess: () => {
      toast.success('회원가입이 완료되었습니다.');

      if (params.callback) {
        router.push(createUrl('/login', params));
      } else {
        router.push('/login');
      }
    },
    onError: (error) => {
      form.setError('email', {
        type: 'manual',
        message: error?.data?.message,
      });
    },
  });
}
