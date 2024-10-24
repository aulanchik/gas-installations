import styled from "styled-components";
import devices from "@/theme/devices";
import colors from "@/theme/colors";
import img from "@/assets";

const Section = styled.section`
  width: 100%;
  padding: 40px 0;
  background: ${colors.blueLight};
`;

const Wrapper = styled.div`
  width: 75rem;
  margin: 0 auto;

  @media ${devices.laptop} {
    max-width: 85%;
  }
`;

const Title = styled.h1`
  color: ${colors.white};
  font-weight: bold;
  font-size: 2rem;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: 0.03em;
  color: ${colors.white};
  margin-bottom: 20px;
  margin-top: 10px;

  @media ${devices.laptop} {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  @media ${devices.mobileL} {
    line-height: 25px;
  }
`;

const Row = styled.div`
  display: flex;
  padding-top: 15px;

  @media ${devices.tabletL} {
    flex-direction: column;
  }
`;

const Col = styled.div`
  width: 510px;
  max-width: 520px;

  @media ${devices.tabletL} {
    width: auto;
  }
`;

const UList = styled.ul`
  list-style: none;
  padding-left: 30px;
`;

const ListItem = styled.li`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.03em;
  color: ${colors.white};
  margin-bottom: 17px;
  position: relative;

  &:before {
    content: "";
    width: 22px;
    height: 22px;
    background: url(${img.iconCheck});
    position: absolute;
    left: -30px;
    top: 3px;
  }

  @media ${devices.tabletL} {
    font-size: 17px;
    line-height: 20px;

    &:before {
      content: "";
      width: 14px;
      height: 14px;
      background: url(${img.iconCheck});
      background-size: 14px;
      background-repeat: no-repeat;
      position: absolute;
      left: -20px;
      top: 3px;
    }
  }
  @media ${devices.mobileL} {
    line-height: 25px;
  }
`;

export { Section, Wrapper, Title, Text, Row, Col, UList, ListItem };
