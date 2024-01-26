import { Button, Flex, Image, } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
return (
      <Flex as="header" w="100%" h="20" shadow={"xl"} justifyContent={"space-between"} alignItems={"center"}>
  <Image
    ml={"4"}
    boxSize='60px'
    src='https://static.displate.com/brand/layout/82c9846f-d928-45ff-a95e-0ab53d87f4e4/avatarStandard.jpg'
    alt='logo'/>
<Button  mr={"4"} colorScheme="gray" variant='outline'>
    <Link to={"/"}>
    Home</Link></Button>
</Flex>
)
}

export default Header;