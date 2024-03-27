/* eslint-disable @next/next/no-img-element */
// "use strict";
import Categories from "./Categories";
import GoogleMap from "./GoogleMap";
import Members from "./Members";

const getPost = async (post_id: string) => {
  const url = process.env.NEXT_PUBLIC_API_URL + "archive/post/"+post_id+"/";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default async function PostDetail2({post_id}:{post_id:string}) {
  const post = await getPost(post_id);
  const base_url = process.env.NEXT_PUBLIC_API_URL
  const thumbnail_image = base_url+post.thumbnail_image;

  return (
    <>
      <div
        className="pt-56 pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.7)), url(${thumbnail_image})`}}
      >
        <h2 className="center-content text-huge font-semibold">
          {post.title}
        </h2>
        <p className="text-small">
          {
            [post.country, post.city, post.district].filter(Boolean).join('>')
          }
        </p>
        <p>
          <Categories categories={post.categories} />
        </p>
        <p>
          <Members members={post.members} />
        </p>
      </div>
      <div className="center-content">
        {post.contents}
        <hr/>
        {post.map_link}
        <GoogleMap/>
      </div>
    </>
  );
}