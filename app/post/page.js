import getAllPosts from "@/data/getAllPosts";
import Link from "next/link";

export default async function PostPage() {
  const posts = await getAllPosts();

  // console.log(posts);
  return (
    <div className="space-y-3 flex p-3 gap-4 border rounded-xl flex-wrap">
      {posts.map((post) => (
        <div className="border p-3 space-y-3" key={post.id}>
          <h2>{post.id}</h2>
          <p>{post.title}</p>
          <Link
            href={`/post/${post.id}`}
            className="bg-red-500 px-5 py-1 rounded-md"
          >
            Visit
          </Link>
        </div>
      ))}
    </div>
  );
}
