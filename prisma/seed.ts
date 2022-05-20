import 'reflect-metadata';
import { PrismaClient, StudyStatus } from '@prisma/client';
import faker from 'faker';

const prisma = new PrismaClient();

const NUMBER_OF_USERS = 4;

const studyStatus = [
  StudyStatus.DRAFT,
  StudyStatus.COMPLETED,
  StudyStatus.PUBLISHED,
];

const data = Array.from({
  length: NUMBER_OF_USERS,
}).map((_, index) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  return {
    id: `${index}`,
    name: `${firstName} ${lastName}`,
    accountId: '1',
  };
});

async function main() {
  // create users
  await prisma.user.createMany({
    data,
  });

  // create mock studies
  await Promise.all(
    Array.from({ length: 1000 }).map(() =>
      prisma.study.create({
        data: {
          ownerId: `${Math.floor(Math.random() * 4)}`,
          name: `Research about ${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
          participantCount: Math.floor(Math.random() * 1000),
          status: studyStatus[Math.floor(Math.random() * 3)],
          createdAt: faker.date.recent(365),
        },
      })
    )
  );
}

main().finally(async () => {
  await prisma.$disconnect();
});
