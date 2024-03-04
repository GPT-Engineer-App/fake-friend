import React from "react";
import { HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack as="nav" spacing={4} mb={8}>
      <Link as={RouterLink} to="/">
        Home
      </Link>
      <Link as={RouterLink} to="/about">
        About
      </Link>
      <Link as={RouterLink} to="/note-taking">
        Note Taking
      </Link>
    </HStack>
  );
};

export default Navigation;
