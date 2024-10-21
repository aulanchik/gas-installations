import React from "react";
import {
  Section,
  Wrapper,
  Inner,
  Title,
  Text,
  Button,
  ButtonWrapper,
  Col,
  Row,
} from "./styles";

const About: React.FC = () => {
  const isWebpSupported = document.body.classList.contains("webp");

  const scroll = () => document.getElementById("scroll")?.click();

  return (
    <Section>
      <Inner state="relative">
        <Row>
          <Col state="1" bgPosition="left" isWebp={isWebpSupported}></Col>
          <Col state="2"></Col>
          <Col state="3"></Col>
          <Col state="4" bgPosition="right" isWebp={isWebpSupported}></Col>
        </Row>
      </Inner>
      <Inner state="absolute">
        <Wrapper>
          <Row>
            <Col state="1"></Col>
            <Col state="2">
              <Title>What is ECO3?</Title>
              <Text>
                The Energy Company Obligation (ECO3) is a government energy
                efficiency scheme in Great Britain to help reduce carbon
                emissions and tackle fuel poverty.{" "}
              </Text>
              <Text>
                This obligation provides free boiler and insulation grants to
                those who receive certain means-tested benefits.{" "}
              </Text>
              <Text>
                You will not repay the money back to the government at any time
                in the future.
              </Text>
              <ButtonWrapper position="left">
                <Button onClick={() => scroll()}>Do i qualify?</Button>
              </ButtonWrapper>
            </Col>
            <Col state="3">
              <Title>ECO3 Scheme</Title>
              <Text>
                The non-repayable boiler installation grants are funded and
                backed by the 'Big Six' energy suppliers looking to help boost
                the energy economony.
              </Text>
              <Text>
                The EC03 scheme is deisgned to reduce fuel poverty amongst
                low-income households by ensuring that heat is generated as
                efficiently as possible and is prevented from escaping from the
                home.
              </Text>
              <Text>
                Millions of home owners throughout the UK have already taken
                advantage of the free boiler scheme, and millions more could
                still claim.
              </Text>
              <ButtonWrapper position="right">
                <Button onClick={() => scroll()}>Do i qualify?</Button>
              </ButtonWrapper>
            </Col>
          </Row>
        </Wrapper>
      </Inner>
    </Section>
  );
};

export default About;
