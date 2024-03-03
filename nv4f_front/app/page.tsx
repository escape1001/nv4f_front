const url = process.env.NEXT_API_URL;

async function getPosts() {
    const res = await fetch(url as string);
    const json = await res.json();    
    return json;
}

export default async function Home() {
  const posts = await getPosts();

  return (
      <div className="center-content">
        <h1>메인 페이지</h1>
        {
          posts.map((post, index) => (
            <li key={index}>
              {post.title}
            </li>
          ))
        }
      </div>
    );
}
