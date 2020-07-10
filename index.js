
const Joi=require('joi');
const express=require('express');
const { request } = require('express');
const app=express();
app.use(express.json())

const courses=[
    {id:1,name:'sari'},
    {id:2,name:'moish'},
]

app.get('/',(req,res)=>{
res.send('hellow world')
});

app.get('/api/courses',(req,res)=>{
res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
const course=courses.find(c=>c.id==req.params.id)
if(!course) return res.status(404).send('The course with the given id not found!');
    res.send(course);
});

app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.params);
    });

// app.post('/api/course',(req,res)=>{
    
//     if(!req.body.name||req.body.name.length<3) return res.status(400).send("Name is require and should be minimum 3 characters!")
//     const course={
//         id:courses.length+1,
//         name:req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });

app.post('/api/course',(req,res)=>{
    const {error}=validateCourse(req.body);
if(error) return res.status(400).send(result.error.details[0].message);
    const course={
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
});

function validateCourse(course){
    const schema={
        name:Joi.string().min(3).required()
        };
    
        return Joi.validate(course,schema);
     
};

app.put('/api/course/:id',(req,res)=>{
const course=courses.find(c=>c.id==parseInt(req.params.id));
if(!courses) return res.status(404).send('The course with the given Id not found!');
const {error}=validateCourse(req.body);
if(error) return res.status(400).send(result.error.details[0].message);
course.name=req.body.name;
res.send(course)
});

app.delete('/api/course/delete/:id',(req,res)=>{
const course =courses.find(c=>c.id==req.params.id);
if(!courses)return res.status(404).send('The course with the given Id not found!');
const index=courses.indexOf(course);
courses.splice(index,1);
res.send(courses);

});






const port=process.env.port||3000;
//app.listen(3000,()=>console.log('listening for port 3000.......'))
app.listen(port,()=>console.log(`listening for port ${port}.......`))