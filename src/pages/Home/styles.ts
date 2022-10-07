import styled from 'styled-components'

export const HeaderContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;

    margin-bottom: 1rem;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    color: #403937;
    font-stretch: 100;

    margin-bottom: 4.125rem;
  }
`

export const HomeWrapper = styled.div`
  max-width: 70rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .infoColumn {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .infoColumn > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .imageColumn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`
