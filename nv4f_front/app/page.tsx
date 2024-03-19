const url = process.env.NEXT_API_URL;

async function getPosts() {
    const res = await fetch(url as string);
    const json = await res.json();    
    return json;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="pt-20">
      <div className="center-content">
        <h1>메인 페이지</h1>
        <ul>
          {
            posts.map((post, index) => (
              <li key={index}>
                <img src={url+post.thumbnail_image}/>
                {post.title}
              </li>
            ))
          }
        </ul>
      </div>
    </main>
    );
}
