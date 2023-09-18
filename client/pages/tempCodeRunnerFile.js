const prisma = new PrismaClient({
    datasources: {
      db: {
        url: 'http://localhost:8005',
      },
    },
  });