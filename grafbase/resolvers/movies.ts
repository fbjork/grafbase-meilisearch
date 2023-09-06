export default async function Movies() {
  try {
    const res = await fetch(`${process.env.MEILISEARCH_API_URL}/indexes/movies/documents/fetch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MEILISEARCH_API_KEY}`
      },
      body: JSON.stringify({
        limit: 5
      })
    })

    if (!res.ok) {
      throw new Error(await res.text())
    }

    const { results } = await res.json()

    return results ?? []
  } catch (err) {
    console.log(err)
    return []
  }
}
