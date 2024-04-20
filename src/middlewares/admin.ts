import jwt from "jsonwebtoken";
import { JWT_SECRET } from  "../config"


function userMiddleware(req: any, res: any, next: any): any {
    const token: string = req.headers.authorization;
    const words: string[] = token.split(" ");
    const jwtToken: string = words[1];
    const decodedValue: any  = jwt.verify(jwtToken, JWT_SECRET);

    try {
        if (decodedValue.username) {    
            req.username = decodedValue.username;
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
