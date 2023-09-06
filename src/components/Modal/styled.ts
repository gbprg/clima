import { styled } from "styled-components";

export const Container = styled.div`
  .DialogOverlay {
    background-color: var(--black-a9);
    position: fixed;
    inset: 0;
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .DialogContent {
    background-color: white;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 450px;
    max-height: 85vh;
    padding: 25px;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .DialogContent:focus {
    outline: none;
  }
  .button {
    cursor: pointer;
    margin: auto 0;
  }

  .tempCenter {
    text-align: center;
  }

  .title {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const SpaceTemp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  p {
    display: flex;
    align-items: center;
  }
`;
