// import React from 'react'
// import PropTypes from 'prop-types'
// import { DatePicker } from 'material-ui-pickers'

// const DatePickerField = ({
//   inputFormat,
//   dateParser,
//   input,
//   label,
//   meta: { touched, invalid, error },
//   dateFormatter,
//   ...rest,
// }) => {
//   return (
//     <DatePicker
//       error={touched && invalid}
//       format={inputFormat}
//       helperText={touched && error}
//       label={label}
//       onChange={val => input.onChange(dateParser(val))}
//       value={dateFormatter(input.value)}
//       {...rest}  />
//   )
// }

// DatePickerField.propTypes = {
//   dateFormatter: PropTypes.func,
//   dateParser: PropTypes.func,
//   input: PropTypes.object.isRequired,
//   inputFormat: PropTypes.string,
//   label: PropTypes.string.isRequired,
//   meta: PropTypes.object.isRequired,
// }

// DatePickerField.defaultProps = {
//   dateFormatter: v => v.replace(/-/g, '/'),
//   dateParser: v => v.getFullYear() + '-' + ('0' + (v.getMonth() + 1)).slice(-2) + '-' + ('0' + v.getDate()).slice(-2),
//   inputFormat: 'dd/MM/yyyy',
// }

// export default DatePickerField