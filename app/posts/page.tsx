import { posts } from "@/posts";
import Image from "next/image";
import Link from "next/link";

function Posts() {
  return (
    <>
      <h1 className="m-8 text-4xl font-bold"> Posts</h1>
      <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Link
            key={i}
            href={`/posts/${post.slug}`}
            className="group w-[392px] rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <div className="relative h-60 w-full overflow-hidden rounded-md object-cover transition-all duration-300 ease-in-out group-hover:scale-105">
              <Image src={post.thumbnail} alt={post.title} sizes="100vh" fill />
            </div>

            <p className="my-4 w-fit rounded-md border-2 border-solid border-zinc-200 bg-zinc-100 p-1 px-2 py-1 text-sm font-semibold text-nebula-purple dark:border-zinc-800 dark:bg-zinc-900">
              {post.category}
            </p>

            <h2 className="line-clamp-2 py-1 text-2xl font-bold leading-7">
              {post.title}
            </h2>

            <div className="flex space-x-10 py-3 text-base text-zinc-500">
              <div>{post.author}</div>
              <div>{post.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Posts;
