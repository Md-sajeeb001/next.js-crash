import { notFound } from "next/navigation";

export const metadata = {
  title: "blog details",
  description: "this is blog details page",
};

export default function BlogPage({ params }) {
  const { id } = params;

  if (id === "3") {
    notFound();
  }
  return <div>the blog details id is {id}</div>;
}
