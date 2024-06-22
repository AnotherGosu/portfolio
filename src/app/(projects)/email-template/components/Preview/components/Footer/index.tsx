import { Column, Link, Row, Section } from "@react-email/components";

export const Footer = () => {
  return (
    <>
      <Section className="bg-slate-200 text-xs">
        <Row>
          <Column className="p-2">
            <Link href="https://www.trendythreads.com">Trendy Threads</Link>
          </Column>
          <Column className="p-2 text-center">
            123 Fashion Ave, New York, NY, 10001
          </Column>
          <Column className="p-2 text-right">(555) 123-4567</Column>
        </Row>
      </Section>
    </>
  );
};
