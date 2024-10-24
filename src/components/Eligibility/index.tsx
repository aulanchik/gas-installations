import React from "react";
import {
  Section,
  Wrapper,
  Title,
  Text,
  Row,
  Col,
  UList,
  ListItem,
} from "./styles";
import data from "./data.json";

const Eligibility: React.FC = (): JSX.Element => {
  return (
    <Section>
      <Wrapper>
        <Title>{data.title}</Title>
        <Text>{data.description1}</Text>
        <Text>{data.description2}</Text>

        <Row>
          <Col>
            <UList>
              {data.eligibility.column1.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UList>
          </Col>
          <Col>
            <UList>
              {data.eligibility.column2.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UList>
          </Col>
        </Row>
      </Wrapper>
    </Section>
  );
};

export default Eligibility;
