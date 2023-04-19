import { type Response, type Request } from "express";

const getGeoData = async (req: Request, res: Response) => {
  res.status(200).json({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          id: "Campus La Salle",
        },
        geometry: {
          coordinates: [
            [2.130094234474427, 41.40959339754278],
            [2.128301788793067, 41.40795817664443],
            [2.1302860990115278, 41.40785255734232],
            [2.131393472144879, 41.40869270615153],
            [2.130094069002041, 41.409595253893684],
          ],
          type: "LineString",
        },
      },
      {
        type: "Feature",
        properties: {
          id: "Our office",
        },
        geometry: {
          coordinates: [2.129682700658634, 41.408525469120036],
          type: "Point",
        },
      },
    ],
  });
};

export default getGeoData;
