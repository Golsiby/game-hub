import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../Hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../Hooks/useGames";

interface Props {
  onSelectPlatforms: (platforms: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformsSelector = ({ onSelectPlatforms, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatforms(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsSelector;
