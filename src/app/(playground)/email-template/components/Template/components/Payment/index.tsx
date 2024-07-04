import { Column, Heading, Img, Row, Section } from "@react-email/components";

export const Payment = () => {
  return (
    <>
      <Heading
        as="h2"
        className="mb-1 font-semibold"
      >
        Payment Information
      </Heading>

      <Section className="text-sm">
        <Row>
          <Column>Payment Method</Column>

          <Column className="text-right">
            <Section>
              <Row>
                <Column className="w-max">-8454</Column>

                <Column className="w-[30px]">
                  <Img
                    src="https://www.mastercard.com/content/dam/public/brandcenter/en/ma-bc_mastercard-logo_eq.png"
                    alt="Mastercard"
                    className="w-[30px]"
                  />
                </Column>
              </Row>
            </Section>
          </Column>
        </Row>

        <Row>
          <Column>Transaction ID</Column>

          <Column className="text-right">TXN789456123</Column>
        </Row>
      </Section>
    </>
  );
};
