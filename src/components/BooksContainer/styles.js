import styled from "styled-components";

export const Container = styled.div`
  background-color: #a7e1f8;
  padding: 160px 40px;
  overflow: ${({ $isPanelOpen }) => ($isPanelOpen ? "hidden" : "scroll")};
  position: ${({ $isPanelOpen }) => ($isPanelOpen ? "fixed" : "unset")};
  top: ${({ $isPanelOpen, $top }) => ($isPanelOpen ? `-${$top}px` : 0)};

  @media (max-width: 800px) {
    padding: 114px 20px;
  }
`;

export const H2 = styled.div`
  font-size: 42px;
  font-weight: bold;
  margin: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

export const BooksList = styled.div`
  display: grid;
  /* define a grid pattern with 4 columns, with equal width */
  grid-template-columns: repeat(4, 1fr);
  /* space between the columns */
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 40px;
  /* max width is set so that our book list doesn't get wider than 1200 pixels - so that it can maintain a good visual structure  */
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: (3, 1fr);
    grid-row-gap: 60px;
  }

  @media (max-width: 600px) {
    grid-template-columns: (2, 1fr);
    grid-column-gap: 20px;
  }
`;
