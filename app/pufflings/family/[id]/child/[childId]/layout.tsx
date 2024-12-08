export default function ChildLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="px-5 sm:px-20">{children}</div>
    )
}