import db from "../db/connection.js";
import Event from "../models/Event.js";
import eventData from "./events.json" assert {type: "json"};
import chalk from "chalk";

const insertData = async () => {
    await db.dropDatabase()

    await Event.create(eventData)

    console.log(chalk.bgBlackBright("Events created!"))

    await db.close();
}

insertData()
