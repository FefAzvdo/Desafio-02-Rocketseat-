import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0px;
  width: 70rem;

  img {
    height: 2.5rem;
    width: 5.309rem;
  }

  .locationAndBadgeWrapper {
    display: flex;
    gap: 0.75rem;
  }

  .locationWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    /* width: 8.938rem; */
    height: 2.375rem;

    background: ${(props) => props.theme.purpleLight};
    border-radius: 6px;
  }

  .badgeWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 4px;
    padding: 8px;
    isolation: isolate;

    width: 2.375rem;
    height: 2.375rem;

    background: ${(props) => props.theme.yellowLight};
    border-radius: 6px;
  }

  .badge1 {
    position: relative;
  }

  .badge1[data-badge]:after {
    content: attr(data-badge);
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 0.7em;
    background: ${(props) => props.theme.yellowDark};
    color: ${(props) => props.theme.white};
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    border-radius: 50%;
    box-shadow: 0 0 1px #333;
  }
`
