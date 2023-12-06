export async function POST(req) {
  const body = await req.json();

  console.log(body)
  const res = await fetch(`http://${process.env.API_BASE_URL}/api/v1/posts/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  
  console.log(res.body)
  console.log(res.status)
  const data = await res.json()

  return Response.json({ data })
}