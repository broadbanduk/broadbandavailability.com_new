This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts.

## Deployment

This project uses [Laravel Forge](https://forge.laravel.com) for automated deployments:

- **Development**: Changes pushed to the `dev` branch automatically deploy to [https://dev.broadbandavailability.com](https://dev.broadbandavailability.com)
- **Production**: Merges to the `main` branch automatically deploy to [https://broadbandavailability.com](https://broadbandavailability.com)

### Recommended Workflow

1. Create a feature branch from `dev`
2. Develop and test your changes locally
3. Once work is completed, create a pull request to `dev`
4. After merge to `dev`, clients will review changes on the development site
5. Once approved, merge `dev` to `main` for production deployment

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out the Next.js GitHub repository - your feedback and contributions are welcome!