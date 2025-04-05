export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates"
        target="_blank"
        rel="noopener noreferrer"
      >
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to nextjs.org →
      </a>
    </footer>
  );
}