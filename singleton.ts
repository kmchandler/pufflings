import { PrismaClient } from "@prisma/client"
import { ClerkClient } from "@clerk/backend"
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

import prisma from './lib/db'
import clerk from './lib/clerkClient'
import * as clerkServer from '@clerk/nextjs/server'

jest.mock('./lib/db', () => ({
    __esModule: true,
    default: mockDeep<PrismaClient>()
}))

beforeEach(() => {
    mockReset(prismaMock)
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>

jest.mock('./lib/clerkClient', () => ({
    __esModule: true,
    default: mockDeep<ClerkClient>()
}))

beforeEach(() => {
    mockReset(clerkMock)
})

export const clerkMock = clerk as unknown as DeepMockProxy<ClerkClient>


jest.mock('@clerk/nextjs/server')

beforeEach(() => {
    clerkServer.currentUser.mockReturnValue(Promise.resolve(global.__USER__))
})
