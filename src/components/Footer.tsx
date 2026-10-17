export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container-custom mx-auto text-center">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Marcelly. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
