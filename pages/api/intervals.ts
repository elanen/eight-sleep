import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Interval } from "../../types/intervals";

const endpoints = [
  "https://s3.amazonaws.com/eight-public/challenge/2228b530e055401f81ba37b51ff6f81d.json",
  "https://s3.amazonaws.com/eight-public/challenge/d6c1355e38194139b8d0c870baf86365.json",
  "https://s3.amazonaws.com/eight-public/challenge/f9bf229fd19e4c799e8c19a962d73449.json",
];

const fetchIntervals = async (
  req: NextApiRequest,
  res: NextApiResponse<(Interval | undefined)[]>
) => {
  try {
    const result = endpoints.map(async (url) => {
      try {
        const data = await (await axios.get(url)).data.intervals;
        return data as Interval;
      } catch (e) {
        return undefined;
      }
    });

    const resolved = await Promise.all(result);
    return res.status(200).json(resolved);
  } catch (e) {
    return res.status(500);
  }
};

export default fetchIntervals;
