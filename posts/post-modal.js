const db = require("../data/config");


function findPostsByUserId(id) {
   return  db('posts as p')
          .join('users as u', 'p.user_id', 'u.id')
          .where({user_id:id})
          .select('p.id as Project Id', 'p.contents as Project content', 'u.username');
};

module.exports = {
   findPostsByUserId
}