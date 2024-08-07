import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModSwitch from "./ColorModSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput />
      <ColorModSwitch />
    </HStack>
  );
};

export default NavBar;
