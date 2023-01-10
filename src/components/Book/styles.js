import styled from "styled-components";

export const Container = styled.figure`
  /* cursor: pointer; */
  /* if cursor is on main page, cursor is set to default,
   if cursor is on side panel, set cursor to pointer */
  cursor: ${({ $isLarge }) => ($isLarge ? "default" : "pointer")};
  margin: 0;
`;

export const Cover = styled.img`
  /* give image black and white effect */
  filter: grayscale(100%);
  border: 2px solid #000;
  /* *1 */
  object-fit: cover;
  aspect-ratio: 2/3;
  width: 100%;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  /* font-size: 28px; */
  /* through transient prop isLarge, change the text size if cursor is on side panel */
  font-size: ${({ $isLarge }) => ($isLarge ? "40px" : "24px")};
  margin: 0px 0px 5px 0;
  line-height: 1.3;

  @media (max-width: 800px) {
    font-size: ${({ $isLarge }) => ($isLarge ? "32px" : "22px")};
  }
`;

export const Author = styled.h4`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  font-family: "Roboto Condensed", serif;
  font-style: italic;
`;

/* *1
#obj fit & aspect-ratio will work together
#2/3 ratio so that when the image has to crop to fit into the image container
#all the images won't stretch in a weird way and will be consistent */
