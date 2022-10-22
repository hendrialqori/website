/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next" 
import { google } from 'googleapis'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const startDate = req.query.startDate || '2020-01-01';
    const slug = req.query.slug

    try {
    res.status(200).json({
        pageViews: 0
    })
    } catch (error) {
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}