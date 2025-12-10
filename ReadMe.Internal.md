# Useless Docs

## Adding docs for a new project

1. Install `@useless-media/useless-docs-generator-typescript` in your project
2. In your project, run:
   ```shell
   npm run useless:docs:update
   ```
   This will build the reference documentation and copy it into you new docs folder as well as generate everything
   needed for the useless-docs repo for your project, except it will not automatically add links to the new
   documentation
3. To add links to your new docs, execute this command in the useless-docs repo:
   ```shell
   npm run regenerate:landings
   ```
4. In the useless-docs repo, to view the docs locally, run:
   ```shell
   npm run start:dev
   ```