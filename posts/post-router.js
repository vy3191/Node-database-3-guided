const express = require('express');
const router = express.Router({mergeParams:true});
const db = require("../data/config");

router.get("/", async (req,res,next) => {
   try {
     const id = req.params.id;
     console.log(id);
     const posts = await db('posts as p')
                         .join('users as u', 'p.user_id', 'u.id')
                         .where({user_id:id})
                         .select('p.id as Project Id', 'p.contents as Project content', 'u.username');
     res.status(200).json(posts);
     
   } catch(err) {
     next(err);
   }
})


module.exports = router;
