import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link href="/">
            <span>asuwant</span>
          </Link>
        </div>
        <div>
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
