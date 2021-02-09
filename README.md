# Search titles app

## Requirements

- node v12.18.3
- npm v6.14.6

## Running the app

Create `.env.local` file with following keys:

```
REACT_APP_API_BASE_URL
REACT_APP_API_KEY
```

- To run app in `dev` mode run `npm start`
- To build for production `npm run build`
- To test the app run `npm test`

## Potential further improvements

1. Add pagination
2. Add e2e test eg. using `cypress`
3. Dockerize app
4. As app will grow add global state management eg. `redux` or `React Context API`
5. Add precommit hooks usgin `husky`
6. Add intl
