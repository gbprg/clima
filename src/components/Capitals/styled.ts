import { styled } from "styled-components";

export const Container = styled.div`
  .title {
    font-size: 1.5rem;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500;
    max-height: 402px;
    overflow: hidden;

    span {
      color: #000;
    }
  }

  .degreesSpace {
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
  }

  .degrees {
    font-weight: 300;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    color: #000;
    width: 2rem;
  }

  .spaceCity {
    display: flex;
    align-items: flex-end;
    height: 3.2rem;
    width: 100%;
  }
  .space-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;
  }
`;
