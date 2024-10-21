import styled, { css } from "styled-components";
import devices from "@/theme/devices";
import colors from "@/theme/colors";
import img from "@/assets";

interface ColProps {
  state: "1" | "2" | "3" | "4";
  bgPosition?: "left" | "right";
  isWebp?: boolean;
}

interface InnerProps {
  state: "absolute" | "relative";
}

interface ButtonWrapperProps {
  position: "left" | "right";
}

const Section = styled.section`
  width: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  width: 75rem;
  margin: 0 auto;

  @media ${devices.laptop} {
    max-width: 85rem;
  }
`;

const Inner = styled.div<InnerProps>`
  position: ${({ state }) => (state === "absolute" ? "absolute" : "relative")};
  width: 100%;
  left: 0;
  top: 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  line-height: 2.5rem;
  color: ${colors.blueDark};

  @media ${devices.laptop} {
    line-height: 40px;
  }

  @media ${devices.mobileL} {
    text-align: center;
  }
`;

const Text = styled.p`
  padding: 0 20px;
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1.5rem;
  color: ${colors.grey1};
  letter-spacing: 0.03em;

  @media ${devices.laptop} {
    font-size: 1.1rem;
    line-height: 1.4rem;
  }

  @media ${devices.mobileL} {
    text-align: center;
    line-height: 1.4rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${devices.tabletL} {
    flex-direction: column;
  }
`;

const Col = styled.div<ColProps>`
  width: 50%;
  height: 560px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${(props) =>
    props.bgPosition === "left" &&
    css`
      background: url(${props.isWebp
        ? img.webpBgBoilerLeft
        : img.bgBoilerLeft});
      background-size: cover;
      background-position: center;
    `}

  ${(props) =>
    props.bgPosition === "right" &&
    css`
      background: url(${props.isWebp
        ? img.webpBgBoilerRight
        : img.bgBoilerRight});

      background-size: cover;
      background-position: center;
    `}

  @media ${devices.tabletL} {
    padding: 0;
    width: 100%;
    order: ${(props) => ({ "1": 1, "2": 2, "3": 4, "4": 3 })[props.state]};
  }

  @media ${devices.mobileL} {
    width: 100%;
    text-align: left;
  }
`;

const Button = styled.button`
  border-radius: 5px;
  background: ${colors.blueDark};
  color: ${colors.white};
  text-transform: uppercase;
  border: 2px solid transparent;
  width: 295px;
  height: 55px;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    color: ${colors.blueDark};
    background: ${colors.white};
    border: 2px solid ${colors.blueDark};
  }

  &:active {
    transform: scale(1);
  }
`;

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  padding-top: 2rem;

  justify-content: ${(props) =>
    props.position === "left" ? "flex-start" : "flex-end"};
`;

export {
  Section,
  Wrapper,
  Inner,
  Title,
  Text,
  Row,
  Col,
  Button,
  ButtonWrapper,
};
