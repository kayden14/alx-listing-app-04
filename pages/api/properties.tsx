// pages/api/properties.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const properties = [
    {
      id: '1',
      title: 'Modern Apartment in Accra',
      imageUrl: '/images/accra-apartment.jpg',
      location: 'Accra',
      price: 1200,
    },
    // ...more sample data
  ]

  res.status(200).json({ properties })
}
