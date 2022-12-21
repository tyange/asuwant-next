import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 font-serif">
      <nav className="flex gap-5 items-center">
        <div>
          <Link href="/">
            <span className="text-xl">asuwant</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-between items-center">
          <div>
            <ul>
              <li>credits</li>
            </ul>
          </div>
          <div>
            <p>notification</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
