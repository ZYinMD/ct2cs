## ct2cs

Convert Traditional Chinese into Simplified Chinese

```js
import { ct2cs } from "jsr:@zyinmd/ct2cs";

console.log(cs2cs("從前")); // 从前
```

Non-traditional characters will remain unchanged:

```js
const input = "從前有1座山🏔️, 山裡有1個廟🏯。";
const output = ct2cs(input);
console.log(output); // 从前有1座山🏔️, 山里有1个庙🏯。
```

### reverse conversion

This package doesn't offer reverse conversion (简 → 繁) because it's much more complicated.
