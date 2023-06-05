import { Box, Text } from "@chakra-ui/react";
import Post from "./index";

export default function PostsList({ posts }) {
  return (
    <Box px="4" align="center">
      {posts?.length === 0 ? (
        <Text textAlign="center" fontSize="xl">
          Henüz gönderi yok... Burada biraz yalnız hissediyorum.
        </Text>
      ) : (
        posts?.map((post) => <Post key={post.id} post={post} />)
      )}
    </Box>
  );
}
