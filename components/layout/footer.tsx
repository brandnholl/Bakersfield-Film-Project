export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="flex flex-col items-center">
        <p className="font-mono">
          © Bakersfield Film Project NPO {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
