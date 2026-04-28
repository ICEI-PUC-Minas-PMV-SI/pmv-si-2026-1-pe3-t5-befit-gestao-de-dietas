import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import { Wrapper, Label, Input, ErrorMessage } from './styles'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, id, ...rest }, ref) => {
    return (
      <Wrapper>
        {label && <Label htmlFor={id}>{label}</Label>}
        <Input ref={ref} id={id} $hasError={!!error} {...rest} />
        {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
      </Wrapper>
    )
  }
)

InputField.displayName = 'InputField'
