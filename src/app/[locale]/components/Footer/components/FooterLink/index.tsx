interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-2 hover:underline"
    >
      {children}
    </a>
  );
};
