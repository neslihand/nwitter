import { Avatar, Button, Flex, Link } from "@chakra-ui/react";
import { DASHBOARD } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogout } from "hooks/auth";

export default function Navbar() {
  const { logout, isLoading } = useLogout();

  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="teal.400"
      height="16"
      zIndex="3"
      justify="center"
      bg="white"
    >
      <Flex px="4" w="full" align="center" maxW="1200px">
        <Avatar src={"/nwitter.png"} size={"sm"} mr={"5"}></Avatar>
        <Link color="teal" as={RouterLink} to={DASHBOARD} fontWeight="bold">
          Ana Sayfa
        </Link>
        <Button
          ml="auto"
          colorScheme="teal"
          size="sm"
          onClick={logout}
          isLoading={isLoading}
        >
          Çıkış Yap
        </Button>
      </Flex>
    </Flex>
  );
}
