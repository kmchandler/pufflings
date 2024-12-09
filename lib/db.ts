import { Prisma, PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    name: 'findManyAndCount',
    model: {
      $allModels: {
        /**
         * Find and return items and total available count
         */
        async findManyAndCount<Model, Args>(
          this: Model,
          args: Prisma.Args<Model, 'findMany'>
        ): Promise<[Prisma.Result<Model, Args, 'findMany'>, number]> {
          const context = Prisma.getExtensionContext(this);

          return prisma.$transaction([
            (context as any).findMany(args),
            (context as any).count({ where: args.where }),
          ]) as Promise<[Prisma.Result<Model, Args, 'findMany'>, number]>;
        },
      },
    },
  });
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
