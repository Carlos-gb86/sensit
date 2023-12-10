import { useState, useEffect } from "react";

  const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://blog.thesensitproject.com/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {/* Display posts */}
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title.rendered}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
};

export default News;

