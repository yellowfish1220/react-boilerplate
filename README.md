
This project uses a boilerplate from https://github.com/react-boilerplate/react-boilerplate.git. When opening this app, clicking the vote button can direct to my implementation. 

My implementation is put in the folder: /app/containers/VotePage/

Assumption: Because of the requirement, I only store 20 records in reducer. If there is a new topic submited by the user, I will search a item with upvote=0 to be deleted.


## Quick start

1. Clone this repo using `git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git`
2. Move to the appropriate directory: `cd react-boilerplate`.<br />
3. Run `npm run setup` in order to install dependencies and clean the git repo.<br />
   *We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`*<br />
   *At this point you can run `npm start` to see the example app at `http://localhost:3000`.*
4. Run `npm run clean` to delete the example app.

Now you're ready to rumble!


