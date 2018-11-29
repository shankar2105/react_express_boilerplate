import userRouter from './user.router'

const router = (app) => {
  app.use('/api/', userRouter)
  app.use('/api/1.0/', userRouter)
  app.use('/api/1.1/', userRouter)
};

export default router;
