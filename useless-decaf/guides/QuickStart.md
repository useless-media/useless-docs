# Quick Start

1. Clone the repo `@useless-media/useless-decaf-client-demo`
2. run: `npm i`
3. run: `npm run start:dev`

        This will build the project to `dist/esm/index.js`

4. Check which demo client is exported as `DeCafClient` in: `src/ts/index.ts`
5. Make changes in that one, or, make your own and update the export in the index to use your client

6. Start a second terminal and run: `npm run serve`

        This will start serving the root of the project on port `9040`

You can now use `http://localhost:9040/dist/esm/index.js` as `DeCafClientUrl` and run your client in the
`Useless Emu-Later`. Alternatively, you can use `http://[YourLocalIp]:9040/dist/esm/index.js` which
will also work to test your client on a real Chromecast device using the `DeCaf SaaS Receiver Application`. 