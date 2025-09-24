import styled from 'styled-components'

export const BackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${props => (props.bgImage)});
  background-size: cover;
  height: 100px;
  width: 100px;
`;