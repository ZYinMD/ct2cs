## ct2cs

Lightweight & minimalistic function to convert traditional Chinese into simplified Chinese.

```js
import { ct2cs } from "jsr:@zyinmd/ct2cs";

console.log(cs2cs("從前")); // 从前
```

All characters that aren't traditional Chinese will remain unchanged:

```js
const input = "從前有1座山🏔️, 山裡有1個廟🏯。";
const output = ct2cs(input);
console.log(output); // 从前有1座山🏔️, 山里有1个庙🏯。
```

### Reverse conversion

This package doesn't offer reverse conversion (简 → 繁) because it's much more complicated.
