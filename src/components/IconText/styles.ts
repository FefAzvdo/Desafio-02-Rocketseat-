import styled from 'styled-components'

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 0.75rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    width: 32px;
    height: 32px;
    padding: 8px;

    background: ${(props) => props.color ?? props.theme.baseText};
    color: ${(props) => props.theme.white};
    border-radius: 1000px;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme.baseText};
  }
`
