# Event API

This event API is a simple API used to check out what events are going around NYC, you can expand on this API to post updates on a event, post a event you're hosting, etc.

## API endpoints
<strong>On your CLI run: npm run dev. <br>
then using postman on "localhost:4000/" you can do the following:</strong>

| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/event/ | To find all the events going on |
| GET | /api/event/:eventName | To find one event by the name |
| POST | /api/event/ | To create a event  |
| PATCH | /api/event/:eventName | To edit the details of that specific event |
| DELETE | /api/event/:eventName | To delete a single event |

## Technology used
<strong>NODE JS:</strong> to use the NPMs to install dependacies, and need to check for any bugs. <br>
<strong>EXPRESS:</strong> to use the framework for routing (path, and HTTP methods used for this API) <br>
<strong>MONGODB:</strong> for its NoSQL database used to store data. <br>
<strong>POSTMAN:</strong> to test CRUD functionality on the endpoints, and actions I want to make happen. 
