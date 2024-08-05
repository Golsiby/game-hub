import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game: Game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={Game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{Game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
