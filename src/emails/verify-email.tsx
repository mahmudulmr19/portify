import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Tailwind,
  Container,
  Text,
  Link,
  Heading,
  Font,
  Section,
} from "@react-email/components";

interface VerifyEmailProps {
  link: string;
}

const VerifyEmail: React.FC<VerifyEmailProps> = ({
  link,
}: VerifyEmailProps) => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>Verify Your Email with Portify</Preview>
        <Body className="antialiased py-4">
          <Container>
            <Heading className="font-bold my-8 text-3xl text-[#333]">
              Welcome to Portify!
            </Heading>
            <Text className="mb-4 text-base text-gray-600">
              We&apos;re excited to have you on board. Please click the button
              below to verify your email and start exploring the world of
              Portify.
            </Text>

            <Link
              href={link}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors bg-[#16A34A] px-5 py-2.5 text-white"
            >
              Verify Email
            </Link>

            <Section className="mt-10">
              <Link
                href={link}
                className="flex items-center select-none text-[#09090B] text-lg"
                title="Portify Logo"
              >
                <span className="tracking-wide font-bold">Porti</span>
                <span className="font-bold text-[#16A34A]">fy</span>
              </Link>

              <Text className="mt-2 text-sm text-gray-500">
                © {new Date().getFullYear()} Portify. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default VerifyEmail;
