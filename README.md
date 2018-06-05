Welcome to the Rails React Redux Webpacker Boilerplate! You'll need Rails 5 and yarn or npm to get started.

This starter pack will get you running with a rails application that uses react and redux as a frontend in no time. All you need to do is clone the repo, cd into the directory and run two commands. 

Open up two separate terminal / console tabs. In the first run these:

1. `yarn install`
2. `bin/webpack-dev-server`

In the second tab run: 

1. `bundle install`
2. `bin/rails server`

React tests are located in `app/javascript/test`, in a third window run `npm run test:watch` to fire up the live test runner, mocha. Included libraries are jsdom, enzyme, chai, and sinon.

OPTIONAL: USE WITH FOREMAN (no need for separate terminal tabs) the rails, webpack, and mocha test outputs will appear inline:

1. `yarn install`
2. `bundle install`
3. `npm install -g foreman`
4. `nf start`

That's it! You can no go to localhost:3000 to see your application. (localhost:5100 if using foreman)
