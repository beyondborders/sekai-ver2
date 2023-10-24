export async function POST(req) {
  const body = await req.json();

  let test_body = {
    inquiry : {
      name : 'test',
      email : 'test@gmail.com'
    }
  }
  console.log(test_body)
  const res = await fetch(`http://${process.env.API_BASE_URL}/api/v1/inquiries`, {
    method: 'POST',
    body: JSON.stringify(test_body)
  })
  
  console.log(res.body)
  console.log(res.status)
  // const data = await res.json()
  // console.log(data)

  // return Response.json({ data })
  return Response.json({ 'status': 'ok' })
}