# Useless Docs

## Adding docs for a new project

1. Install `docsify-cli` if you don't have it already:
   ```shell
   npm i docsify-cli -g
   ``` 
2. Initialize a new project (where `{project-name}` is the same as the repo/folder name of the project you are setting up docs for):
   ```shell
   docsify init ./{project-name}
   ``` 
3. Inside the newly created `{project-name}` folder:
   1. Remove `.nojekyll`
   2. Update `README.md` with a description of the project
   3. Create a `_sidebar.md` with the contents:
      ```markdown
      * [{Project Name}](/)
      ```
      Where `{Project Name}` is the freindly name of your project
   4. Replace the contents of `index.html` (you can copy from `useless-decaf/index.html`)
      1. Replace `name` & `namespace` in the javascript section
4. Add an image in `images`
5. In `index.html` in the root, add a link to your new project (at the bottom)
6. Install `@useless-media/useless-docs-generator-typescript` in your project
7. In your project, run:
   ```shell
   npm run useless:docs:update
   ```
   This will build the reference documentation and copy it into you new docs folder
8. In the docs project, to view the docs locally, run:
   ```shell
   npm run start:dev
   ```