# namezpace

[![Greenkeeper badge](https://badges.greenkeeper.io/zephraph/namezpace.svg)](https://greenkeeper.io/)

**Note: This package is still under development. Use at your own risk.**

```javascript
// File 1
import Namespace from 'namezpace';
Namespace('my.app.modules').hello = 'world';
```

```javascript
// File 2
import { local.my.app.modules as modules } from 'namezpace';
console.assert(modules.hello === 'world');
```
