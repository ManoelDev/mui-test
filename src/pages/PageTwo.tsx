import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, OutlinedInput, FormHelperText, Card, Typography, Link, Container } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { FormProvider } from '../components/hook-form';

// components
import Page from '../components/Page';
import useSettings from 'src/hooks/useSettings';
// routes
const PATH_DASHBOARD = '/dashboard'

// ----------------------------------------------------------------------

type FormValuesProps = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
};

type ValueNames = 'code1' | 'code2' | 'code3' | 'code4' | 'code5';

export default function VerifyCodeForm() {
  const { themeStretch } = useSettings();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required('Code is required'),
    code2: Yup.string().required('Code is required'),
    code3: Yup.string().required('Code is required'),
    code4: Yup.string().required('Code is required'),
    code5: Yup.string().required('Code is required'),
  });

  const defaultValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',

  };

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const {
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();

  useEffect(() => {
    const target = document.querySelector('input.field-code');

    target?.addEventListener('paste', handlePaste);

    return () => {
      target?.removeEventListener('paste', handlePaste);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePaste = (event: any) => {
    let data = event.clipboardData.getData('text');

    data = data.split('');

    [].forEach.call(document.querySelectorAll('.field-code'), (node: any, index) => {
      node.value = data[index];

      const fieldIndex = `code${index + 1}`;

      setValue(fieldIndex as ValueNames, data[index]);
    });

    event.preventDefault();
  };

  const handleChangeWithNextField = (
    event: React.ChangeEvent<HTMLInputElement>,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  ) => {
    const { maxLength, value, name } = event.target;

    const fieldIndex = name.replace('code', '');

    const fieldIntIndex = Number(fieldIndex);

    if (value.length >= maxLength) {
      if (fieldIntIndex < 6) {
        const nextfield = document.querySelector(`input[name=code${fieldIntIndex + 1}]`);

        if (nextfield !== null) {
          (nextfield as HTMLElement).focus();
        }
      }
    }

    handleChange(event);
  };

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('code', Object.values(data).join(''));

      enqueueSnackbar('Verify success!');

      // navigate(PATH_DASHBOARD, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Page title="Page Two">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Page Two
        </Typography>
        <Card sx={{
          padding: 3,
        }}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Stack >
                <Typography variant="h5">Confirmação</Typography>
                <Typography variant="body2" sx={{
                  display: 'flex',
                  alignItems: 'center',
                }} >Confirmação:
                  <Typography variant="body1"> 0</Typography>
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} justifyContent="center">
                {Object.keys(values).map((name, index) => (
                  <Controller
                    key={name}
                    name={`code${index + 1}` as ValueNames}
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <OutlinedInput
                        {...field}
                        error={!!error}
                        autoFocus={index === 0}

                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleChangeWithNextField(event, field.onChange)
                        }
                        inputProps={{
                          className: 'field-code',
                          maxLength: 1,
                          sx: {
                            p: 0,
                            textAlign: 'center',
                            width: { xs: 54, sm: 54 },
                            height: { xs: 54, sm: 56 },
                          },
                        }}
                      />
                    )}
                  />
                ))}
              </Stack>

              <Stack

                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                Não recebeu? <Link href="#" variant="body2"
                  sx={{
                    marginLeft: 1,
                  }}
                >Reenviar código</Link>
              </Stack>

              {/* {(
            !!errors.code1 ||
            !!errors.code2 ||
            !!errors.code3 ||
            !!errors.code4 ||
            !!errors.code5
          ) && (
              <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                Informe o código de verificação.
              </FormHelperText>
            )} */}

              <LoadingButton
                fullWidth
                size="small"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                sx={{ mt: 3 }}
              >
                Continuar
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Card>

      </Container>
    </Page >
  );
}
