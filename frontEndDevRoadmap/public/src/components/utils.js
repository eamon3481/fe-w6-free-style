const _ = {
  add: (target, className) => target.classList.add(className),

  remove: (target, className) => target.classList.remove(className),

  toggle: (target, className) => target.classList.toggle(className),

  replace: (target, oldClassName, newClassName) =>
    target.classList.replace(oldClassName, newClassName),
  $: (selector, base = document) => base.querySelector(selector),

  $A: (selector, base = document) => base.querySelectorAll(selector),

  on: (target, type, listener, useCapture = false) =>
    target.addEventListener(type, listener, useCapture),

  delay: (time) => new Promise((resolve) => setTimeout(() => resolve(), time)),

  genEl: (tagName, { classNames, template } = {}) => {
    const $el = document.createElement(tagName);
    if (classNames) $el.classList.add(...classNames);
    if (template) $el.innerHTML = template;
    return $el;
  },
};

export default _;
