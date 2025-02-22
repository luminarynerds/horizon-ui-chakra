import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Input,
  useColorModeValue,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const mockPosts = [
  { id: 1, title: "Post 1", content: "This is the first post.", comments: [] },
  { id: 2, title: "Post 2", content: "This is the second post.", comments: [] },
];

export default function CommunityForum() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // Simulate fetching posts
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockPosts);
          }, 1000);
        });
        setPosts(response);
      } catch (error) {
        setError("Failed to fetch posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (newPostTitle && newPostContent) {
      setPosts([...posts, { id: posts.length + 1, title: newPostTitle, content: newPostContent, comments: [] }]);
      setNewPostTitle("");
      setNewPostContent("");
      setError(null);
    } else {
      setError("Please fill in all fields.");
    }
  };

  const handleAddComment = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    });
    setPosts(updatedPosts);
    setNewComment("");
  };

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <form onSubmit={handleSubmitPost}>
        <Input
          placeholder="Post Title"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          required
        />
        <Input
          placeholder="Post Content"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          required
          mt='10px'
        />
        <Button type='submit' mt='10px'>Add Post</Button>
      </form>
      {error && (
        <Alert status='error' mt='20px'>
          <AlertIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <Box mt='20px'>
          {posts.map((post) => (
            <Box key={post.id} p='10px' border='1px solid' borderColor='gray.300' mt='10px'>
              <Text fontWeight='bold'>{post.title}</Text>
              <Text>{post.content}</Text>
              <Box mt='10px'>
                <Input
                  placeholder="Add a comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <Button type='button' onClick={() => handleAddComment(post.id)}>Add Comment</Button>
              </Box>
              {post.comments.length > 0 && (
                <Box mt='10px'>
                  {post.comments.map((comment, index) => (
                    <Text key={index}>{comment}</Text>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
