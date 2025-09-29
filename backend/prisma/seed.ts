import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash('ChangeMe42!');
  await prisma.user.upsert({
    where: { email: 'admin@studiovbg.test' },
    update: {},
    create: {
      email: 'admin@studiovbg.test',
      password,
      fullName: 'Admin Studio VBG',
      role: 'admin',
    },
  });

  const portfolioCount = await prisma.portfolioItem.count();
  if (portfolioCount === 0) {
    await prisma.portfolioItem.createMany({
      data: [
        {
          title: 'NovaTech — Vision 2030',
          slug: 'novatech-vision-2030',
          description: 'Film corporate rythmé annonçant la feuille de route 2030.',
          category: 'Entreprises',
          videoUrl: 'https://player.vimeo.com/video/00000001',
          tags: ['6K', 'Interviews', 'Social-first'],
          duration: 'PT1M45S',
        },
        {
          title: 'Pulse Events — Congrès Futuria',
          slug: 'pulse-events-congres-futuria',
          description: 'Aftermovie énergique livré en J+3 pour relancer les inscriptions.',
          category: 'Événementiel',
          videoUrl: 'https://player.vimeo.com/video/00000002',
          tags: ['Multi-cam', 'Aftermovie'],
          duration: 'PT1M10S',
        },
      ],
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
