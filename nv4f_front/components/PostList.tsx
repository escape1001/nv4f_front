"use client";
/* eslint-disable @next/next/no-img-element */
import Categories from "@/components/Categories";
import Members from "@/components/Members";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function PostList({filterQuery}:{filterQuery:string}) {
  const base_url = process.env.NEXT_PUBLIC_API_URL;
  const [posts, setPosts] = useState<PostType[]>([]);
  
  const getPosts = async (filterQuery:string) => {
    const url = `${base_url}archive/post_list${filterQuery ? filterQuery : "/"}`;
    const response = await fetch(url);
    const data = await response.json();
    return setPosts(data);
  };

  useEffect(() => {
    getPosts(filterQuery);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterQuery]);

  return (
      <ul className="flex gap-4 flex-wrap">
        {
          posts.map((post:PostType, index:number) => (
            //box shadow 추가
            <li key={index} className="shadow-md w-[calc((100%_-_2rem)_/_3)] rounded-lg overflow-hidden group">
              <Link href={`post_detail/${post.id}`}>
                <p className="aspect-video overflow-hidden">
                  <img 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform ease-in-out duration-300"
                    src={base_url+post.thumbnail_image} alt=""
                  />
                </p>
                <div className="p-4">
                  <p className="text-big font-semibold">
                    {post.title}
                    <Categories categories={post.categories}/>
                  </p>
                  <p className="text-small">
                    {
                      // [post.country, post.city, post.district] 배열을 join 메서드로 합침
                      // post.city, post.district가 없을 경우 undefined가 나오므로 filter 메서드로 걸러냄
                      [post.country, post.city, post.district].filter(Boolean).join('>')
                    }
                  </p>
                  <p className="flex gap-2">
                    <Members members={post.members}/>
                  </p>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    );
}
