import { trending } from "../../../alldata/trending";

export default function handler(req, res){
    res.status(200).json(trending)
}