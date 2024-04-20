import jwt from "jsonwebtoken";
import { JWT_SECRET } from  "../config"
import userService from "../services/userService";


async function userMiddleware(req: any, res: any, next: any) {
    const token: string = req.headers.authorization;
    const words: string[] = token.split(" ");
    const jwtToken: string = words[1];
    const decodedValue: any  = jwt.verify(jwtToken, JWT_SECRET);

    try {
        if (decodedValue.userId) {    
            req.username = await userService.getUserById(decodedValue.userId)
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } 
    catch (e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }
}

export default userMiddleware;
