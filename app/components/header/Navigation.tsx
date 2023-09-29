import Link from "next/link";

const Navigation = () => {
  return (
    <header className="bg-zinc-900">
      <nav className="max-w-6xl mx-auto text-white h-[100px] flex items-center justify-center">
        <ul className="flex flex-wrap justify-around md:justify-start md:gap-12 w-full">
          {menuItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Developer",
    href: "https://www.xarielah.dev",
  },
];

export default Navigation;
