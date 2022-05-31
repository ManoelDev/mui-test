import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// hooks
import useIsMountedRef from '../hooks/useIsMountedRef';
// components
import Iconify from '../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox, RHFTextDate } from '../components/hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { Container, Typography, Link, Stack, Card, Alert, IconButton, InputAdornment } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------


type FormValuesProps = {
  email: string;
  birthDate: string;
  password: string;
  remember: boolean;
  afterSubmit?: string;
};

export default function PageOne() {
  const { themeStretch } = useSettings();


  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    birthDate: Yup.date().required(),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'demo@minimals.cc',
    birthDate: '',
    password: 'demo1234',
    remember: true,
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);

      reset();

      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };



  return (
    <Page title="Page One">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Page One
        </Typography>
        <Typography gutterBottom>
          GitHub repository: <Link href='https://github.com/ManoelDev/mui-test' target='_blank'>MUI-TEST</Link>
        </Typography>

        <Card sx={{
          p: 3,
        }}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

              <RHFTextDate
                name="birthDate"
                size="medium"
                label="Data de nascimento"
                showTodayButton
              />

              <RHFTextField name="email" />
              <RHFTextField name="email" label="Email address" />

              <RHFTextField
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
              <RHFCheckbox name="remember" label="Remember me" />
              <Link component={RouterLink} variant="subtitle2" to={'/'}>
                Forgot password?
              </Link>
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Login
            </LoadingButton>
          </FormProvider>
        </Card>

      </Container>
    </Page >
  );
}
