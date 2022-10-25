import { posts } from "../../../alldata/posts";

export default function handler(req, res){
    res.status(200).json(posts)
}