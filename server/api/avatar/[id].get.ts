export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({ statusCode: 400, message: 'Missing avatar ID' })
  }

  return {
    success: true,
    data: {
      id,
      name: 'Sample Avatar',
      config: {
        skinTone: '#f5d0b0',
        eyeColor: '#4a7a9c',
        hairStyle: 'short',
        hairColor: '#2d1b0e',
        faceShape: 'oval',
        clothing: 'tShirt',
        clothingColor: '#3b82f6',
        accessory: 'none',
        accessoryColor: '#fbbf24',
        hat: 'none',
        hatColor: '#1e293b',
        shoes: 'sneakers',
        shoesColor: '#374151',
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  }
})
