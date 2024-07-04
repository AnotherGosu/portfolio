import { Column, Heading, Row, Section } from "@react-email/components";

export const Summary = () => {
  return (
    <>
      <Heading
        as="h2"
        className="mb-1 font-semibold"
      >
        Order Summary
      </Heading>

      <Section className="text-sm">
        <Row>
          <Column>Order Number</Column>
          <Column className="text-right">TT123456</Column>
        </Row>

        <Row>
          <Column>Order Date</Column>
          <Column className="text-right">June 20, 2024</Column>
        </Row>
      </Section>
    </>
  );
};
