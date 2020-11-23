import { Book } from '~/models/book'

async function getBook (req, res, next) {
  let book
  try {
    book = await Book.findById(req.params.id)
    if (book === null) {
      return res.status(404).json({ message: 'Cannot find book' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.book = book
  next()
}

export { getBook }
