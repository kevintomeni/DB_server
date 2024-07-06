const router = express().router();

router.get('/products/:id', (req, res)=>{})
router.get('/products/count',(req, res)=>{})



router.delete('/products/:id',(req, res)=>{})
router.put('/products/:id',(req, res)=>{})

module.exports = router;