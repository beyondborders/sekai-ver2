export async function POST(req) {
  const res = await fetch(`http://${process.env.API_BASE_URL}/api/v1/property_materials/search`, {
    method: 'POST',
    cache: 'no-store'
  })
  
  const data = await res.json()

  return Response.json({ data })
}