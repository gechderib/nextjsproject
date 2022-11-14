import {MongoClient} from "mongodb"
async function handler(req, res) {
    if(req.method === "POST"){
        console.log("wwwwwwwwwwwwwww")
        const data = req.body;



        
        const client = await MongoClient.connect("mongodb+srv://gechderib:gd12211927@cluster0.gabmcyy.mongodb.net/meetups?retryWrites=true&w=majority")
        const db = client.db()

        const meetupCollection = db.collection("meetups")
        const result = await meetupCollection.insertOne(data)
        console.log(result)
        client.close()

        res.status(201).json({message:"Meetup added in the databse"})
    }
}

export default handler;