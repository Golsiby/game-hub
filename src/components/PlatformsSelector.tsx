import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../Hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

const PlatformsSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platforms) => (
          <MenuItem key={platforms.id}>{platforms.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsSelector;
