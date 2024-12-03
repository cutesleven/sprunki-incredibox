import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Image
              src="/sprunki-logo.png"
              alt="Sprunki Retake"
              width={128}
              height={128}
            />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex px-4 justify-end">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li className="px-3 py-1">
                <Link
                  href="#"
                  className="flex items-center text-gray-700 font-bold transition hover:text-gray-900"
                >
                  More Sprunki Games
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
