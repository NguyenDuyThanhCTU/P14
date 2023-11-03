export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <img
          src="https://images3.alphacoders.com/132/1325254.png"
          alt="Introduce Header"
          className="w-[100vw] h-[700px] object-cover object-bottom"
        />
      </div>
      {children}
    </>
  );
}
