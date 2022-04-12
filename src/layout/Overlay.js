import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles'

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          BANANAS
          <br />
          PAGE —
        </h1>
        <p>In React & Threejs —</p>
      </TopLeft>
      <BottomLeft>
        Designed and Code by Ex ❤️
      </BottomLeft>
      <BottomRight>
       Thanks for watching :)
      </BottomRight>
    </Container>
  )
}
