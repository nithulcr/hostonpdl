import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const metadata: Metadata = {
    title: 'Host on PDL',
    description: '',
    keywords: '',
  };

  return metadata;
}

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
