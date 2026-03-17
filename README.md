## Persistent Cache Demo

This is a small project demoing a combination of

- @tanstack/react-query
- @tanstack/react-query-persist-client
- @tanstack/query-async-storage-persister
- idb-keyval

It uses pokeapi for no other reason that it is free. You can browse through a paginated list of pokemon and view extremely sparse details on the details page.

As you use the app, a persistent, async cache based on idb-keyval will become hydrated. You will notice that moving between pages becomes increasingly more fluid. Additionally, you will see that the details pages load instantly but the uid field updates after the loading indicator disappears.

The cache is basically to host potentially stale data while fresh data is being fetched. Interestingly enough, the pokeapi makes liberal use of cache-control headers, meaning in most cases that the browser itself is not actually hitting the api. This allows the user to immediately see data on the page, see up to date data shortly thereafter, and also protects the upstream api from receiving too many requests.

I believe this is a powerful pattern that should be considered for most projects.
