import {Router} from "express";
import * as controllers from "../controllers/events.js";

const router = Router();

router.get("/", controllers.getEvents);
router.get("/:eventName", controllers.getEvent);
router.post("/", controllers.createEvent);
router.put("/:eventName", controllers.updateEvent);
router.delete("/:eventName", controllers.deleteEvent);

export default router;