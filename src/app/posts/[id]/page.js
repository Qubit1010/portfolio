export async function getPostById(postId) {
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    method: "GET",
  });

  return res.json({});
}

export default async function PostID({ params }) {
  const { post } = await getPostById(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>{post.id}</h3>
      <h1>{post.name}</h1>
      <h2>{post.description}</h2>
    </main>
  );
}
