import { styled } from "styled-components";

export const Container = styled.div`
  .title {
    font-size: 1.5rem;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    span {
      color: #000;
    }
  }

  .degreesSpace {
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 20%;
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
`;
