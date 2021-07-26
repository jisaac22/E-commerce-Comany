// requires router to send data
const router = require('express').Router();
// requires /api folder
const apiRoutes = require('./api')

router.use('/api', apiRoutes);
//sends reponse if wrong route was used
router.use((req, res)=> {
    res.send("<h1>Wrong Route!</h1?>")
});

module.exports = router;