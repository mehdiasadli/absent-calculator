import styled from 'styled-components'

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

interface LayoutProps {
  children: JSX.Element[]
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return <Container>{children}</Container>
}
