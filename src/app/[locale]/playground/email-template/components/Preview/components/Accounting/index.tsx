import { Column, Row, Section } from "@react-email/components";

import { formatPrice } from "@/lib";

interface AccountingProps {
  items: Array<{ name: string; quantity: number; price: string }>;
  tax: string;
  shipping: string;
}

export const Accounting = ({ items, tax, shipping }: AccountingProps) => {
  const subtotal = items.reduce((prev, curr) => {
    return (prev += Number(curr.price) * curr.quantity);
  }, 0);

  const total = subtotal + Number(tax) + Number(shipping);

  return (
    <>
      <Section className="table-fixed text-sm">
        <Row>
          <Column className="w-3/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium">Subtotal</Column>
          <Column className="w-1/6 px-2 py-0.5 text-right">
            {formatPrice(subtotal)}
          </Column>
        </Row>

        <Row>
          <Column className="w-3/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium">Tax</Column>
          <Column className="w-1/6 px-2 py-0.5 text-right">
            {formatPrice(tax)}
          </Column>
        </Row>

        <Row>
          <Column className="w-3/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium">Shipping</Column>
          <Column className="w-1/6 px-2 py-0.5 text-right">
            {formatPrice(shipping)}
          </Column>
        </Row>

        <Row>
          <Column className="w-3/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium">Total</Column>
          <Column className="w-1/6 px-2 py-0.5 text-right font-semibold">
            {formatPrice(total)}
          </Column>
        </Row>
      </Section>
    </>
  );
};
