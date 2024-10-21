import styled from "styled-components";
import devices from "@/theme/devices";
import colors from "@/theme/colors";

export const Section = styled.section`
  display: flex;
  align-items: center;
  background: ${colors.grey3};
  margin-top: 90px;

  @media ${devices.mobileL} {
    margin-top: 70px;
  }
`;

export const Wrapper = styled.div`
  width: 75rem;
  height: 65px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.laptop} {
    max-width: 85%;
  }
`;

export const Title = styled.h4`
  color: ${colors.white};
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${colors.white};

  @media ${devices.tabletL} {
    font-size: 0.875rem;
  }

  @media ${devices.mobileL} {
    line-height: 1.5rem;
  }
`;
