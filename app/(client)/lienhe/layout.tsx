export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2Fz4852794290910_2983c95bd79eab80b2e1ffcdb1f06a8f.jpg?alt=media&token=99b6ec29-4839-42ae-b75e-1dd081df9457"
          alt="Introduce Header"
          className="w-[100vw] h-[700px] object-cover object-bottom"
        />
      </div>
      {children}
    </>
  );
}
