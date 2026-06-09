export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Book to Life.</p>
      </div>
    </footer>
  );
}
