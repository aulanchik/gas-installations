import styled from "styled-components";
import devices from "@/theme/devices";
import colors from "@/theme/colors";

const Section = styled.section`
  background: ${colors.blueDark};
  padding-bottom: 60px;
  padding-top: 30px;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 75rem;
  margin: 0 auto;

  @media ${devices.laptop} {
    max-width: 85%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.5rem;
  color: ${colors.white};

  @media ${devices.tabletL} {
  }
`;

const SplitLine = styled.div`
  background: ${colors.white};
  margin-top: 15px;
  width: 100%;
  height: 3px;

  @media ${devices.tabletL} {
    margin-top: 10px;
  }

  @media ${devices.mobileL} {
    margin-bottom: 15px;
    margin-top: 5px;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 1em;
  line-height: 1.5em;
  letter-spacing: 0.03em;
  color: ${colors.white};

  @media ${devices.laptop} {
    font-size: 1.1em;
    line-height: 1.5em;
  }

  @media ${devices.mobileL} {
    line-height: 1.5em;
  }
`;

const Col = styled.div`
  width: 50%;

  @media ${devices.tabletL} {
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  margin-top: 15px;

  @media ${devices.tabletL} {
    flex-direction: column;
  }
`;

const UList = styled.ul`
  list-style: none;
  padding-left: 30px;
`;

const ListItem = styled.li`
  font-weight: 400;
  font-family: "Poppins", sans-serif;
`;

const Button = styled.button`
  background: ${colors.white};
  color: ${colors.blueDark};
  text-transform: uppercase;

  border: 2px solid transparent;
  border-radius: 5px;

  width: 295px;
  height: 58px;

  font-weight: 700;
  font-size: 1.2em;
  line-height: 1.5em;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  outline: none;

  &:hover {
    color: ${colors.white};
    background: ${colors.blueDark};
    border: 2px solid ${colors.white};
  }

  &:active {
    transform: scale(1.05);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 65px;
  justify-content: center;
`;

export {
  Section,
  Wrapper,
  Title,
  SplitLine,
  Text,
  Col,
  Row,
  UList,
  ListItem,
  Button,
  ButtonWrapper,
};
