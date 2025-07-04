import express from 'express'
import session from 'express-session'
import ViteExpress from 'vite-express'
import { Product } from '../db/model.js'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import multer from 'multer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = '8002'
ViteExpress.config({ printViteDevServerHost: true })

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage })

app.post('/api/login', (req, res) => {
  const { email, password } = req.body
  const usersPath = path.join(__dirname, '../scripts/data/users.json')
  const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
  const user = users.find((u) => u.email === email && u.password === password)
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }
  const isAdmin = email === 'admin@test.com'
  res.json({ email, isAdmin })
})

app.get('/api/products', async (req, res) => {
  const products = await Product.findAll()
  res.json(products)
})

app.post('/api/products', upload.single('image'), async (req, res) => {
  console.log('BODY:', req.body)
  console.log('FILE:', req.file)
  try {
    let { title, description, price, sizes, colors, category } = req.body
    if (typeof sizes === 'string') sizes = JSON.parse(sizes)
    if (typeof colors === 'string') colors = JSON.parse(colors)
    price = Number(price)
    const image = req.file ? `/uploads/${req.file.filename}` : null
    const product = await Product.create({
      title,
      description,
      price,
      sizes,
      colors,
      category,
      image
    })
    res.status(201).json(product)
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Failed to add product', details: err.message })
  }
})

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
)
