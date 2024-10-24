import React from "react";
import {
  Section,
  Wrapper,
  Title,
  Text,
  SplitLine,
  Row,
  Col,
  UList,
  ListItem,
  Button,
  ButtonWrapper,
} from "./styles";
import data from "./data.json";

const SectionBlock = ({ title, text }: { title: string; text: string }) => (
  <>
    <Title>{title}</Title>
    <Text>{text}</Text>
    <SplitLine />
  </>
);

const BenefitsList = ({
  benefits,
}: {
  benefits: Array<{ id: number; text: string }>;
}): JSX.Element => (
  <UList>
    {benefits.map((benefit: { id: number; text: string }) => (
      <ListItem key={benefit.id}>{benefit.text}</ListItem>
    ))}
  </UList>
);

const Details: React.FC = (): JSX.Element => {
  const { details } = data;

  const scroll = () => document.getElementById("scroll")?.click();

  return (
    <Section>
      <Wrapper>
        <SectionBlock
          title={details.titles.title1}
          text={details.texts.text1}
        />
        <SectionBlock
          title={details.titles.title2}
          text={details.texts.text2}
        />
        <SectionBlock
          title={details.titles.title3}
          text={details.texts.text3}
        />

        <Row>
          <Col>
            <BenefitsList benefits={details.benefits.first} />
          </Col>
          <Col>
            <BenefitsList benefits={details.benefits.second} />
          </Col>
          <Col>
            <BenefitsList benefits={details.benefits.third} />
          </Col>
        </Row>

        <SplitLine />

        <SectionBlock
          title={details.titles.title4}
          text={details.texts.text4}
        />

        <ButtonWrapper>
          <Button onClick={() => scroll()}>{details.button.label}</Button>
        </ButtonWrapper>
      </Wrapper>
    </Section>
  );
};

export default Details;
