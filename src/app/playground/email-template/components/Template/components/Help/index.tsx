import { Heading, Text } from "@react-email/components";

export const Help = () => {
  return (
    <>
      <Heading
        as="h2"
        className="mb-1 font-semibold"
      >
        Need Help?
      </Heading>

      <Text>
        If you have any questions or need further assistance, please do not
        hesitate to contact our customer service team at{" "}
        <b>support@trendythreads.com</b>.
      </Text>

      <Text>Thank you for shopping with us!</Text>
    </>
  );
};
