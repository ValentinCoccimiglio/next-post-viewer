import LikeButton from "./LikeButton"

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>

      <div className="space-y-4">
        {posts.slice(0, 5).map((post: any) => (
          <div
            key={post.id}
            className="border p-4 rounded-xl shadow-sm"
          >
            <h2 className="font-semibold">{post.title}</h2>
            <div className="mt-2">
              <LikeButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}