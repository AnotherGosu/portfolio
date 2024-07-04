import { Column, Heading, Row, Section } from "@react-email/components";

export const Billing = () => {
  return (
    <>
      <Heading
        as="h2"
        className="mb-1 font-semibold"
      >
        Billing Information
      </Heading>

      <Section className="text-sm">
        <Row>
          <Column>Name</Column>
          <Column className="text-right">Jane Doe</Column>
        </Row>

        <Row>
          <Column>Email</Column>
          <Column className="text-right">jane.doe@example.com</Column>
        </Row>

        <Row>
          <Column>Billing Address</Column>
          <Column className="text-right">
            123 Maple Street, Springfield, IL, 62701
          </Column>
        </Row>
      </Section>
    </>
  );
};
