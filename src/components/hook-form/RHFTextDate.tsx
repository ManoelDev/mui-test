import { DatePicker } from '@mui/lab'
import { TextField, TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

// import SvgIconStyle from '../SvgIconStyle'

type IProps = {
  name: string
  minDate?: Date
  maxDate?: Date
  showToolbar?: boolean
  showTodayButton?: boolean
  showDaysOutsideCurrentMonth?: boolean
}

type Props = IProps & TextFieldProps

export default function RHFTextDate({
  name,
  minDate,
  maxDate,
  showToolbar,
  showTodayButton,
  showDaysOutsideCurrentMonth,
  ...other
}: Props) {
  const { control } = useFormContext()

  // const MoreTimeIcon = () => (
  //   <SvgIconStyle
  //     src="https://minimal-assets-api-dev.vercel.app/assets/icons/shape-avatar.svg"
  //     sx={{
  //       width: 24,
  //       height: 24
  //     }}
  //   />
  // )

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          onChange={(date) => field.onChange(date)}
          value={field.value}
          minDate={minDate}
          maxDate={maxDate}
          showToolbar={showToolbar}
          showTodayButton={showTodayButton}
          showDaysOutsideCurrentMonth={showDaysOutsideCurrentMonth}
          // InputAdornmentProps={{}}
          // components={{
          //   OpenPickerIcon: MoreTimeIcon,
          //   LeftArrowIcon: MoreTimeIcon,
          //   RightArrowIcon: MoreTimeIcon,
          //   SwitchViewIcon: MoreTimeIcon
          // }}
          views={['month', 'year', 'day']}
          renderInput={(props) => (
            <TextField
              {...props}
              fullWidth
              error={!!error}
              helperText={error?.message}
              {...other}
            />
          )}
        />
      )}
    />
  )
}
