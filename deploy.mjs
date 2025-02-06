import { deployTheCode } from '../jesmyl-pwa/deploy-the-code.mjs';

console.log(123);

deployTheCode(
  {
    builtFolder: 'dist',
  },
  {
    targetDir: 'sub',
    loadToDirFiles: {
      '': ['./prisma'],
    },
  },
);
