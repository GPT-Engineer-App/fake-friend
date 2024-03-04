import React from "react";
import { Box, Link, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack as="nav" justifyContent="space-around" p={4} bg="gray.200" w="100%" marginBottom={8}>
      <Link as={RouterLink} to="/">
        Home
      </Link>
      <Link as={RouterLink} to="/about">
        About
      </Link>
    </HStack>
  );
};

export default Navigation;
