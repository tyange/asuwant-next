import Header from "../components/ui/header/header";
import Main from "../components/ui/main/main";
import "./global.css";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
};

export default RootLayout;
