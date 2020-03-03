const express = require('express');
const router = express.Router({mergeParams:true});
const postDB = require('./post-modal');

router.get("/", async (req,res,next) => {
   try {
     const id = req.params.id;
     const posts = await postDB.findPostsByUserId(id);     
     res.status(200).json(posts);     
   } catch(err) {
     next(err);
   }
})


module.exports = router;
