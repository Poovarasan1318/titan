const express=require('express')
const app=express()
const port=process.env.PORT||5002
const cors=require('cors')   
// const bodyparser=require('body-parser')



app.use(cors()); 
app.use(express.json());
// app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.send("hello world")
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://ppoovarasan959:12345678poo%40@cluster0.bbvq2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const watchcollections=client.db("fashion").collection("shop");     

    app.post("/upload",async(req,res)=>{
      const data=req.body;
      const result=await watchcollections.insertOne(data);
      res.send(result);
    })

    app.get("/watches",async(req,res)=>{
      const watche=watchcollections.find();
      const result=await watche.toArray();
      res.send(result);
    })

    app.get("/watching/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await watchcollections.findOne(filter);
      res.send(result);
    })

    app.patch("/allproducts/:id",async(req,res)=>{
      const id=req.params.id;
      const updatewatchdata=req.body;
      const filter={_id:new ObjectId(id)};
      const updateDoc={
        $set:{
          ...updatewatchdata
        }
      }
      
      const options={upsert:true};
      const result=await watchcollections.updateOne(filter,updateDoc,options);
      res.send(result);
    })

    app.delete("/watch/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result= await watchcollections.deleteOne(filter);     
      res.status(200).json({success:true,message:"data deleted successfully",result});
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}


run().catch(console.dir);
app.listen(port,()=>{
    console.log(`connected to ${port}`)

}) 






