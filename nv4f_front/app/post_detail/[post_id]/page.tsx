import PostDetail2 from "@/components/PostDetail2";


export default function PostDetail({ params: { post_id } }) {
  
  return (
    <main>
      <section>
        <h2>포스트 디테일</h2>
        <PostDetail2 post_id={post_id as string}/>
      </section>
    </main>
  );
}
