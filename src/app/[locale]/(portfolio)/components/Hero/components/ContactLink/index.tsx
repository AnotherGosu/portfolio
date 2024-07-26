interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ContactLink = ({ href, children }: ContactLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="focus-ring group flex items-center gap-1 rounded-md px-2 py-1 font-medium hover:bg-indigo-500 hover:fill-white hover:text-white"
    >
      {children}
    </a>
  );
};
