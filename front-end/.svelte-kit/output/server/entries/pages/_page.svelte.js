import { i as current_component, j as rest_props, v as value_or_fallback, k as ensure_array_like, l as spread_attributes, e as bind_props, c as pop, m as sanitize_props, p as push, o as attr, f as escape_html, q as stringify } from "../../chunks/index.js";
import "pocketbase";
function onDestroy(fn) {
  var context = (
    /** @type {import('#server').Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const ArrowPath = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true", "data-slot": "icon" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" }] }, "micro": { "a": { "viewBox": "0 0 16 16", "fill": "currentColor", "aria-hidden": "true", "data-slot": "icon" }, "path": [{ "fill-rule": "evenodd", "d": "M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z", "clip-rule": "evenodd" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true", "data-slot": "icon" }, "path": [{ "fill-rule": "evenodd", "d": "M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z", "clip-rule": "evenodd" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true", "data-slot": "icon" }, "path": [{ "fill-rule": "evenodd", "d": "M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z", "clip-rule": "evenodd" }] } };
const Cog6Tooth = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true", "data-slot": "icon" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" }, { "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" }] }, "micro": { "a": { "viewBox": "0 0 16 16", "fill": "currentColor", "aria-hidden": "true", "data-slot": "icon" }, "path": [{ "fill-rule": "evenodd", "d": "M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z", "clip-rule": "evenodd" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true", "data-slot": "icon" }, "path": [{ "fill-rule": "evenodd", "d": "M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", "clip-rule": "evenodd" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true", "data-slot": "icon" }, "path": [{ "fill-rule": "evenodd", "d": "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z", "clip-rule": "evenodd" }] } };
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["src", "size", "solid", "mini", "micro"]);
  push();
  let icon;
  let src = $$props["src"];
  let size = value_or_fallback($$props["size"], () => "100%");
  let solid = value_or_fallback($$props["solid"], () => false);
  let mini = value_or_fallback($$props["mini"], () => false);
  let micro = value_or_fallback($$props["micro"], () => false);
  if (size !== "100%") {
    if (size.slice(-1) != "x" && size.slice(-1) != "m" && size.slice(-1) != "%") {
      try {
        size = parseInt(size) + "px";
      } catch (error) {
        size = "100%";
      }
    }
  }
  icon = src?.[solid ? "solid" : mini ? "mini" : micro ? "micro" : "default"];
  const each_array = ensure_array_like(icon?.path ?? []);
  $$payload.out += `<svg${spread_attributes(
    {
      ...icon?.a,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      "aria-hidden": "true",
      ...$$restProps
    },
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const a = each_array[$$index];
    $$payload.out += "<!--[-->";
    $$payload.out += `<path${spread_attributes({ ...a }, void 0, void 0, 3)}></path>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</svg>`;
  bind_props($$props, { src, size, solid, mini, micro });
  pop();
}
var LOADING_TYPE = /* @__PURE__ */ ((LOADING_TYPE2) => {
  LOADING_TYPE2[LOADING_TYPE2["SPINNER"] = 0] = "SPINNER";
  LOADING_TYPE2[LOADING_TYPE2["DOTS"] = 1] = "DOTS";
  LOADING_TYPE2[LOADING_TYPE2["RING"] = 2] = "RING";
  LOADING_TYPE2[LOADING_TYPE2["BALL"] = 3] = "BALL";
  LOADING_TYPE2[LOADING_TYPE2["BARS"] = 4] = "BARS";
  LOADING_TYPE2[LOADING_TYPE2["INFINITY"] = 5] = "INFINITY";
  return LOADING_TYPE2;
})(LOADING_TYPE || {});
function LoadingPanel($$payload, $$props) {
  push();
  let {
    isLoading = false,
    loadingType = LOADING_TYPE.SPINNER
  } = $$props;
  $$payload.out += `<!--[-->`;
  if (isLoading) {
    $$payload.out += `<div class="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-base-100/10 backdrop-blur-sm"><!--[-->`;
    if (loadingType == LOADING_TYPE.SPINNER) {
      $$payload.out += `<span class="loading loading-spinner loading-lg"></span>`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += `<!--[-->`;
      if (loadingType == LOADING_TYPE.DOTS) {
        $$payload.out += `<span class="loading loading-dots loading-lg"></span>`;
        $$payload.out += "<!--]-->";
      } else {
        $$payload.out += `<!--[-->`;
        if (loadingType == LOADING_TYPE.RING) {
          $$payload.out += `<span class="loading loading-ring loading-lg"></span>`;
          $$payload.out += "<!--]-->";
        } else {
          $$payload.out += `<!--[-->`;
          if (loadingType == LOADING_TYPE.BALL) {
            $$payload.out += `<span class="loading loading-ball loading-lg"></span>`;
            $$payload.out += "<!--]-->";
          } else {
            $$payload.out += `<!--[-->`;
            if (loadingType == LOADING_TYPE.BARS) {
              $$payload.out += `<span class="loading loading-bars loading-lg"></span>`;
              $$payload.out += "<!--]-->";
            } else {
              $$payload.out += `<!--[-->`;
              if (loadingType == LOADING_TYPE.INFINITY) {
                $$payload.out += `<span class="loading loading-infinity loading-lg"></span>`;
                $$payload.out += "<!--]-->";
              } else {
                $$payload.out += `<span class="loading loading-spinner loading-lg"></span>`;
                $$payload.out += "<!--]!-->";
              }
              $$payload.out += "<!--]!-->";
            }
            $$payload.out += "<!--]!-->";
          }
          $$payload.out += "<!--]!-->";
        }
        $$payload.out += "<!--]!-->";
      }
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += `</div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  bind_props($$props, { isLoading });
  pop();
}
function SubmitCodeDialog($$payload, $$props) {
  push();
  let isProcessing = false;
  $$payload.out += `<button class="btn btn-success btn-sm"><!--[-->`;
  {
    $$payload.out += `Submit`;
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</button> <dialog class="modal"><div class="modal-box"><h3 class="text-lg font-bold">Submit Code!</h3> <p class="py-4">Are you sure to submit the code?</p> <div class="flex items-center justify-end gap-1"><button class="btn btn-success btn-sm flex items-center gap-1"${attr("disabled", isProcessing, true)}><!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` Ok</button> <button class="btn btn-outline btn-sm">Cancel</button></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const THEMES = [
    { id: "vs", name: "Light" },
    { id: "vs-dark", name: "Dark" }
  ];
  const JUDGE0_MONACO_LANGUAGE = /* @__PURE__ */ new Map([
    ["Python (2.7.17)", "python"],
    ["Python (3.8.1)", "python"],
    ["C++ (GCC 8.3.0)", "cpp"],
    ["C++ (GCC 9.2.0)", "cpp"],
    ["C (GCC 8.3.0)", "c"],
    ["C (GCC 9.2.0)", "c"],
    ["Java (OpenJDK 13.0.1)", "java"],
    ["JavaScript (Node.js 12.14.0)", "javascript"],
    ["Pascal (FPC 3.0.4)", "pascal"]
  ]);
  let isLoading = true;
  let languages = [];
  const avaiableLanguages = languages.filter((language) => JUDGE0_MONACO_LANGUAGE.has(language.name));
  let inputContent = "";
  let outputContent = "";
  let username = "";
  const isSubmitAvaiable = Boolean(username);
  let questionWidth = 70;
  onDestroy(() => {
  });
  const each_array = ensure_array_like(THEMES);
  const each_array_1 = ensure_array_like(avaiableLanguages);
  $$payload.out += `<!--[-->`;
  {
    $$payload.out += `<!--[-->`;
    LoadingPanel($$payload, { isLoading, loadingType: LOADING_TYPE.SPINNER });
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += `   <div class="flex h-[100vh] max-h-[100vh] items-stretch"><div class="overflow-auto pl-1"${attr("style", `width: ${stringify(questionWidth)}%`, false)}><div class="flex min-h-[100vh] flex-col overflow-auto pr-1"><div class="mb-1 flex items-center gap-1"><!--[-->`;
  if (isSubmitAvaiable) {
    $$payload.out += `<div>${escape_html(username)}</div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <div class="flex-grow"></div> <select class="select select-bordered select-sm"><!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const theme = each_array[$$index];
    $$payload.out += "<!--[-->";
    $$payload.out += `<option${attr("value", theme.id, false)}>Theme ${escape_html(theme.name)}</option>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</select> <select class="select select-bordered select-sm"><option disabled>Select Language</option><!--[-->`;
  for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
    const language = each_array_1[$$index_1];
    $$payload.out += "<!--[-->";
    $$payload.out += `<option${attr("value", language.id, false)}>${escape_html(language.name)}</option>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</select> <button class="btn btn-circle btn-outline btn-sm"><!--[-->`;
  Icon($$payload, { src: ArrowPath, size: "16" });
  $$payload.out += `<!--]--></button> <button class="btn btn-circle btn-outline btn-sm"><!--[-->`;
  Icon($$payload, { src: Cog6Tooth, size: "16" });
  $$payload.out += `<!--]--></button></div> <div class="h-[calc(100vh-40px)] w-full flex-shrink-0"></div></div></div> <div class="divider divider-horizontal m-0 cursor-e-resize select-none"></div> <div class="flex flex-grow flex-col items-stretch overflow-auto"><div class="flex items-center gap-1"><span>Input</span> <div class="flex-grow"></div> <button class="btn btn-outline btn-sm">Run</button> <!--[-->`;
  if (isSubmitAvaiable) {
    $$payload.out += `<!--[-->`;
    SubmitCodeDialog($$payload);
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</div> <textarea class="flex-grow resize-none bg-base-200 outline-none">`;
  const $$body = escape_html(inputContent);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea> <div class="divider m-0 select-none"></div> <div>Output</div> <textarea class="flex-grow resize-none bg-base-200 outline-none" readonly>`;
  const $$body_1 = escape_html(outputContent);
  if ($$body_1) {
    $$payload.out += `${$$body_1}`;
  }
  $$payload.out += `</textarea></div></div>`;
  pop();
}
export {
  _page as default
};
