import jwt from "jsonwebtoken";
import { JWT_SECRET } from  "../config"
import adminService from "../services/adminService";


async function adminMiddleware(req: any, res: any, next: any) {
    const token: string = req.headers.authorization;
    const words: string[] = token.split(" ");
    const jwtToken: string = words[1];
    const decodedValue: any  = jwt.verify(jwtToken, JWT_SECRET);

    try {
        if (decodedValue.adminId) {    
            req.admin = await adminService.getAdminById(decodedValue.adminId);
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

export default adminMiddleware