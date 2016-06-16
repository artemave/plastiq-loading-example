Tiny example that demonstrates how a typical "user click -> async request & show loading -> hide loading & show result" scenario can be dealt with in [plastiq](https://github.com/featurist/plastiq).

The trick is that if an event handler happens to return a promise, plastiq rerenders after that promise resolves. In this case, on user click, there are two renders: first right after calling `setName()` and the second when ajax promise (returned by `setName()`) is resolved.

```
npm i
npm start
```
