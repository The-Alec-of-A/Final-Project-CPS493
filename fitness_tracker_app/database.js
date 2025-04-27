import mongoose from 'mongoose'

// ...existing code...

mongoose.connect('mongodb://localhost:27017/fitness_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

// ...existing code...

// ...existing code...
