const express=require('express')
const cors=require('cors')   ;
const { ObjectID } = require('mongodb');
const app=express();  app.use(express.json());  app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://praveen:@Praveen26@cluster0.cqi9u.mongodb.net/todos?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.get('/:uid',async (req,res)=>{
    try { await client.connect();
         const collections=client.db('todos').collection(req.params.uid)
          const result= await collections.find().toArray();res.json(result);
      } catch (error) {console.log(error)}
})

app.post('/:uid',async (req,res)=>{
    try { await client.connect();
        const collections=client.db('todos').collection(req.params.uid)
        const inserting=await collections.insertOne(req.body); res.json(inserting)
       } catch (error) {console.log(error)}
})

app.delete('/:uid/:id',async (req,res)=>{
    try { await client.connect();
        const collections=client.db('todos').collection(req.params.uid)
        // console.log(req.params.id+"   "+ req.params.uid)
        const deleting=await collections.deleteOne({"_id":ObjectID(req.params.id)});
         console.log(deleting.deletedCount);res.json(deleting.deletedCount)
       } catch (error) {console.log(error)}
})

client.close();
app.listen(5000,console.log('the server is running on port 5000'))