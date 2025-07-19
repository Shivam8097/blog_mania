import { faker } from '@faker-js/faker';
import fs from 'fs';

const categories = [
  "general",
  "web-design",
  "development",
  "databases",
  "seo",
  "marketing"
];

const posts = Array.from({ length: 40 }).map(() => {
  const title = faker.lorem.sentence();
  return {
    user: "6878071758d6b4606cf676a0", // Replace with a real user _id
    img: faker.image.urlPicsumPhotos({ width: 800, height: 400 }),
    title,
    slug: title.toLowerCase().replace(/ /g, "-"),
    desc: faker.lorem.sentences(2),
    category: faker.helpers.arrayElement(categories),
    content: faker.lorem.paragraphs(6, '\n\n'),
  };
});

fs.writeFileSync('sample-posts.json', JSON.stringify(posts, null, 2));
console.log('Sample posts generated!');