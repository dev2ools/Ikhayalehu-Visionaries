import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md z-50">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold">Ikhayalehu Visionaries</span>
      </div>
      <ul className="flex gap-6 text-sm sm:text-base">
        <li>
          <Link href="/" className="hover:underline hover:underline-offset-4 text-gray-700 dark:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline hover:underline-offset-4 text-gray-700 dark:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline hover:underline-offset-4 text-gray-700 dark:text-gray-300">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/team" className="hover:underline hover:underline-offset-4 text-gray-700 dark:text-gray-300">
            Team
          </Link>
        </li>
        <li>
          <Link href="/join-us" className="hover:underline hover:underline-offset-4 text-gray-700 dark:text-gray-300">
            Join Us
          </Link>
        </li>
        <li>
          <Link href="/media" className="hover:underline hover:underline-offset-4 text-gray-700 dark:text-gray-300">
            Media
          </Link>
        </li>
        <li>
          <Link href="/stories" className="hover:underline hover:underline-offset-4 text-gray-700 dark:text-gray-300">
            Stories
          </Link>
        </li>
        <li>
          <Link href="/donate" className="hover:underline hover:underline-offset-4 text-gray-700 dark:text-gray-300">
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  );
}