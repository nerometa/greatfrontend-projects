export function Credits() {
  return (
    <footer
      aria-label="credits"
      className="fixed bottom-4 text-center text-neutral-500 text-xs inset-x-0"
      data-gfe-screenshot-exclude="true"
    >
      A challenge by{" "}
      <a
        href="https://www.greatfrontend.com/projects?ref=challenges"
        target="_blank"
        className="text-indigo-700 font-semibold"
        rel="noopener noreferrer"
      >
        GreatFrontEnd Projects
      </a>
      . Built by{" "}
      <a
        href="https://www.greatfrontend.com/projects/u/nerometa"
        target="_blank"
        className="text-indigo-700 font-semibold"
        rel="noopener noreferrer"
      >
        nerometa
      </a>
      .
    </footer>
  );
}
