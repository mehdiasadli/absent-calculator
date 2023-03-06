import { Select, Typography } from 'antd'
import type { SelectProps } from 'antd'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const optionsLength = 12
const options: SelectProps['options'] = Array.from({ length: optionsLength }).map((_, i) => ({
  value: i + 1,
  label: String(i + 1)
}))

interface LimitProps {
  limit: number
  setLimit: (value: number) => void
}

export default function Limit({ limit, setLimit }: LimitProps): JSX.Element {
  const handleChange = (value: number) => setLimit(value)

  return (
    <Container>
      <Typography>Absent Limit: </Typography>
      <Select style={{ width: 80 }} value={limit} onChange={handleChange} options={options} />
    </Container>
  )
}
