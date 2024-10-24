import styled from "styled-components";
import devices from "@/theme/devices";
import colors from "@/theme/colors";

const Section = styled.section`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 100px;
`;

const Wrapper = styled.div`
  width: 75rem;
  margin: 0 auto;
  position: relative;

  @max ${devices.laptopL} {
    max-width: 85%;
  }
`;

const UList = styled.ul`
  margin-left: 10px;
`;

const ListItem = styled.li`
  font-family: "Poppins", sans-serif;
  color: ${colors.blueDark};
  padding-bottom: 10px;
  font-size: 1em;

  @media ${devices.mobileL} {
    fonta-size: 0.9em;
    line-height: 1.4em;
  }
`;

const Title = styled.h2`
  font-weight: 600;
`;

const Text = styled.p`
  font-weight: 400;
`;

export { Section, Wrapper, UList, ListItem, Title, Text };
