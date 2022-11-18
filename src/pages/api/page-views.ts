/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next" 
import { google } from 'googleapis'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const startDate = req.query.startDate || '2020-01-01';
    const slug = req.query.slug

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.CLIENT_ID,
                private_key: process.env.PRIVATE_KEY
            },
            scopes: ['https://www.googleapis.com/auth/analytics.readonly']
        })

        const analytics = google.analytics({
            auth,
            version: 'v3'
        })

        const response = await analytics.data.ga.get({
            'end-date': 'today',
            'start-date': startDate as any,
            ids: `ga:${process.env.GA_VIEW_ID}`,
            metrics: 'ga:pageViews',
            dimensions: 'ga:pagePath',
            filters: `ga:pagePath==${slug}`,
        })

        const pageViews = response?.data?.totalsForAllResults['ga:pageViews']

        res.status(200).json({
            pageViews
        })

    } catch (error) {
        return res.status(500).json({
            error: (error as Error)
        })
    }
}