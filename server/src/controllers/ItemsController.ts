import { Request, Response } from 'express'

import knex from '../database/connection'

export default class ItemsController {

    async index(request: Request, response: Response) {

        const items = await knex('items').select('*'),
            serializedItems = items.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    image_url: `http://10.0.0.188:3333/uploads/${item.image}`,
                }
            })

        response.json(serializedItems)
    }
}
