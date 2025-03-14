import Link from "next/link";

export const metadata = {
  title: "blogs",
  description: "this is blogs page",
};

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "blog 1",
      description: "blog page 1 description",
    },
    {
      id: 2,
      title: "blog 2",
      description: "blog page 2 description",
    },
  ];
  return (
    <div className="space-y-3">
      {blogs.map((blog) => (
        <div className="border w-sm rounded-xl p-4" key={blog.id}>
          <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
    </div>
  );
}
