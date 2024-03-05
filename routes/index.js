import {Router} from "express";
import  eventsRoutes from "./events.js";

const router = Router();

router.get("/", ( req, res ) => res.send("Root of the Api"));

router.use("/events", eventsRoutes)

export default router