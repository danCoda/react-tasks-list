# Tasks list application (React)

This is a simple frontend React application that uses functional components, hooks (useState, useEffect) and routing (react-router-dom). Of course, it has some CSS styling as well, don't you worry. 

It has a mock backend server using [json-server](https://www.npmjs.com/package/json-server?activeTab=readme) for REST API calls.

### Try it [here](https://hungry-rosalind-b4751a.netlify.app/).

## How to run it locally

1. In the project directory, start up the backend: `npm run server`

2. Start up the app in development mode: `npm run start`

3. Navigate to [localhost:3000](http://localhost:3000/).

## What can you do in it?

It's pretty simple; you can add tasks (`ADD`), delete tasks (`DELETE`), and mark tasks (`PUT`). Changes will persist on the server. You can also toggle the new-task form. Also, you can navigate to/from the About page without refreshing the page. Warning: The heading is an eyesore red.  