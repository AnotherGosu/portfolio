import { Body, Head, Html, Preview, Tailwind } from "@react-email/components";

interface TemplateProps {
  children: React.ReactNode;
}

export const Template = ({ children }: TemplateProps) => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <title>Your Receipt from Trendy Threads</title>
        </Head>

        <Preview>Your Receipt from Trendy Threads</Preview>

        <Body>{children}</Body>
      </Html>
    </Tailwind>
  );
};
