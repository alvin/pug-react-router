# pug-react-router
boilerplate for pug on react - without styling opinions

If you prefer jade/pug style syntax for markup and find yourself working on react projects, here's a minimalist way to get started building with pug + react

`components/App.js`
```
import Logo from '../public/logo.svg';
export default ({children}) => pug`
    Logo
    ${children}
`
```

`containers/Home.js`
```
export default () => pug`
    h1 Home Page
    p A page created in react with pug syntax
`
```
