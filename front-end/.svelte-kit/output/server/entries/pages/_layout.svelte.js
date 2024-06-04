import { d as slot, e as bind_props } from "../../chunks/index.js";
function default_slot($$props) {
  var children = $$props.$$slots?.default;
  if (children === true) {
    return $$props.children;
  } else {
    return children;
  }
}
function _layout($$payload, $$props) {
  const ssr = false;
  $$payload.out += `<!--[-->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ssr });
}
export {
  _layout as default
};
