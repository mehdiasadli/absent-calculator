import { Button as Btn } from 'antd'

interface ButtonProps {
    disabled: boolean
    calculate: () => void
}

export default function Button({disabled, calculate}: ButtonProps): JSX.Element {
  return (
    <Btn type='primary' disabled={disabled} onClick={calculate}>
      Calculate
    </Btn>
  )
}
