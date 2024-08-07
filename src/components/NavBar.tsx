import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModSwitch from "./ColorModSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModSwitch />
    </HStack>
  );
};

export default NavBar;
