import Categories from "../Categories";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-2 border-b-[1px]">
        <Container>
          <div
            className="
              flex
              items-center
              justify-between
              gap-3
              md:gap-0
            "
          >
            <Logo />
            <Search />
            <div className="flex justify-between items-center gap-5">
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  )
}

export default Header;
