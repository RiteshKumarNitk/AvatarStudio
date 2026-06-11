export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, config } = body

  if (!config) {
    throw createError({ statusCode: 400, message: 'Missing avatar config' })
  }

  const avatar = {
    id: crypto.randomUUID(),
    name: name || `Avatar ${new Date().toLocaleDateString()}`,
    config,
    thumbnail: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  return { success: true, data: avatar }
})
