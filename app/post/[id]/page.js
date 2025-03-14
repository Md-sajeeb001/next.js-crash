import getPost from "@/data/getPost";

export default async function PostPage({ params }) {
  const { id } =  params;
  const post = await getPost(id);
//   console.log(post);
  return (
    <div>
      <span>{post.id}</span>
      <h2 className="text-green-400 text-lg font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
