import { NextApiRequest, NextApiResponse } from "next";
import { getLocation } from "src/app/services/savedlocation.service";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { city } = req.query;

        if (!city) {
            return res.status(400).end(`Missing required input parameters.`);
        }

        if (typeof city != 'number') {
            return res.status(400).end(`Bad input parameter format.`);
        }

        try {
            const location = await getLocation(city);
            return res.status(200).json(location);
        } catch (error: any) {
            return res.status(400).end(error.message);
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};