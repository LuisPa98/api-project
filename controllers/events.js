import Event from "../models/Event.js";

export const getEvents = async ( req, res ) => {
    try{
        const events = await Event.find();
        res.json(events)
    }catch(error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

export const getEvent = async ( req, res ) => {
    try {
        const {eventName} = req.params
        const event = await Event.findOne({eventName})

    if (event) {
        return res.json(event);
    }

        res.status(404).json({ message: "Event not found!"})

    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})    
    }
}

export const getEventsByBorough = async (req, res) => {
    try{
        const { borough } = req.params

        const events = await Event.find({ "borough": borough });
        res.json(events)
    }catch(error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

export const createEvent = async ( req, res ) => {
    try {
        const event = new Event(req.body)
        await event.save()

        res.status(201).json(event)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

export const updateEvent = async ( req, res ) => {
    try {
        const {eventName} = req.params
        const event = await Event.findOneAndUpdate({eventName}, req.body)

        res.status(201).json(event)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
        
    }
}

export const deleteEvent = async ( req, res ) => {
    try {
        const {eventName} = req.params
        const deleted = await Event.findOneAndDelete({eventName})

    if (deleted) {
        return res.status(200).send("Event Deleted")
    }

    throw new Error("Event not found.")
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}