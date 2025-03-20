"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IPost, posts } from "@/posts";

function Thumbnail() {
  const pathname = usePathname().split("/")[2];
  const post = posts.find((post: IPost) => post.slug === pathname);
  return (
    <div className="relative mb-10 h-[250px] overflow-hidden rounded-lg md:h-[500px]">
      <Image
        src={post?.thumbnail || "/images/thumbnail/blockchain.jpg"}
        alt="Post Thumbnail"
        layout="fill"
        objectFit="cover"
        sizes="100vh"
      />
    </div>
  );
}

export default Thumbnail;
