import { metadata as accessibilityMetadata } from './metadata';

export const metadata = accessibilityMetadata;

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
