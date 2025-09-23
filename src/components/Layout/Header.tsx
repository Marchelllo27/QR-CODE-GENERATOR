import { Link } from "react-router";
import { QrCode } from "lucide-react";

import Button from "../ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 h-[var(--header-height)] w-full flex items-center justify-between bg-white px-10 z-50">
      <Link to="/" className="flex gap-2 items-center">
        <QrCode size={40} color="#f97316" />
        <span className="text-2xl font-medium">InstaQR</span>
      </Link>

      <nav>
        <ul className="flex gap-2">
          <li>
            <Button variant="ghost" asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link to="/auth">Sign Up</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
