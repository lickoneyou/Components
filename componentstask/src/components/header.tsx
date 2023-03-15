import { Nav } from "./Nav";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <header>
      <SearchBar></SearchBar>
      <Nav></Nav>
    </header>
  )
}