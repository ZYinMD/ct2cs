import { assertEquals } from "jsr:@std/assert";
import { ct2cs } from "./ct2cs.ts";

Deno.test("empty string", () => {
  assertEquals(ct2cs(""), "");
});

Deno.test("non-chinese", () => {
  assertEquals(ct2cs("abc123😀"), "abc123😀");
  assertEquals(ct2cs("o(*￣▽￣*)ブ"), "o(*￣▽￣*)ブ");
});

Deno.test("ct2cs", () => {
  assertEquals(ct2cs("從前"), "从前");
  assertEquals(ct2cs("從前有座山 山裡有個廟"), "从前有座山 山里有个庙");
  assertEquals(
    ct2cs("從前有1座山🏔️, 山裡有1個廟🏯。"),
    "从前有1座山🏔️, 山里有1个庙🏯。"
  );
});
