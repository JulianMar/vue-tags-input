import './style.css';
import { withDirectives as T, openBlock as l, createElementBlock as n, vModelText as V, createCommentVNode as d, resolveComponent as D, normalizeClass as c, normalizeStyle as E, createElementVNode as p, createBlock as $, withCtx as O, renderSlot as f, toDisplayString as S, vShow as C, mergeProps as b, withKeys as h, Fragment as I, renderList as A } from "vue";
import j from "vuedraggable";
const B = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, o] of t)
    s[r] = o;
  return s;
}, N = {
  name: "TagInput",
  props: {
    scope: { type: Object, required: !0 }
  }
}, R = ["maxlength"];
function K(e, t, s, r, o, g) {
  return s.scope.edit ? T((l(), n("input", {
    key: 0,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => s.scope.element.text = u),
    maxlength: s.scope.maxlength,
    type: "text",
    class: "ti-tag-input",
    size: "1",
    onInput: t[1] || (t[1] = (u) => s.scope.validateTag(s.scope.index, u)),
    onBlur: t[2] || (t[2] = (u) => s.scope.performCancelEdit(s.scope.index)),
    onKeydown: t[3] || (t[3] = (u) => s.scope.performSaveEdit(s.scope.index, u))
  }, null, 40, R)), [
    [V, s.scope.element.text]
  ]) : d("", !0);
}
const q = /* @__PURE__ */ B(N, [["render", K], ["__scopeId", "data-v-a3408643"]]), M = (e) => !e.some((t) => {
  const s = !t.text;
  s && console.warn('Missing property "text"', t);
  let r = !1;
  return t.classes && (r = typeof t.classes != "string"), r && console.warn('Property "classes" must be type of string', t), s || r;
}), F = (e) => !e.some((t) => {
  if (typeof t == "number") {
    const s = isFinite(t) && Math.floor(t) === t;
    return s || console.warn("Only numerics are allowed for this prop. Found:", t), !s;
  } else if (typeof t == "string") {
    const s = /\W|[a-z]|!\d/i.test(t);
    return s || console.warn("Only alpha strings are allowed for this prop. Found:", t), !s;
  } else
    return console.warn("Only numeric and string values are allowed. Found:", t), !1;
}), z = {
  /**
   * @description Property to bind a model to the input.
     If the user changes the input value, the model updates, too.
     If the user presses enter with an valid input,
     a new tag is created with the value of this model.
     After creating the new tag, the model is cleared.
   * @property {props}
   * @required
   * @type {String}
   * @model
   * @default ''
   */
  modelValue: {
    type: String,
    default: "",
    required: !0
  },
  /**
   * @description Pass an array containing objects like in the example below.
     The properties 'style' and 'class' are optional. Of course it is possible to add custom
     properties to a tag object. vue-tags-input won't change the key and value.
   * @property {props}
   * @type {Array}
   * @sync
   * @default []
   * @example
    {
    &emsp;text: 'My tag value', &#47;* The visible text on display *&#47;
    &emsp;style: 'background-color: #ccc', &#47;* Adding inline styles is possible *&#47;
    &emsp;classes: 'custom-class another', &#47;* The value will be added as css classes *&#47;
    }
   */
  tags: {
    type: Array,
    default: () => [],
    validator: M
  },
  /**
   * @description Expects an array containing objects inside. The objects
    can have the same properties as a tag object.
   * @property {props}
   * @type {Array}
   * @default []
   */
  autocompleteItems: {
    type: Array,
    default: () => [],
    validator: M
  },
  /**
   * @description Defines whether a tag is editable after creation or not.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  allowEditTags: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Defines if duplicate autocomplete items are filtered out from the view or not.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  autocompleteFilterDuplicates: {
    default: !0,
    type: Boolean
  },
  /**
   * @description If it's true, the user can add tags only via the autocomplete layer.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  addOnlyFromAutocomplete: {
    type: Boolean,
    default: !1
  },
  /**
   * @description The minimum character length which is required
     until the autocomplete layer is shown. If set to 0,
     then it'll be shown on focus.
   * @property {props}
   * @type {Number}
   * @default 1
   */
  autocompleteMinLength: {
    type: Number,
    default: 1
  },
  /**
   * @description If it's true, the autocomplete layer is always shown, regardless if
     an input or an autocomplete items exists.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  autocompleteAlwaysOpen: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Property to disable vue-tags-input.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  disabled: {
    type: Boolean,
    default: !1
  },
  /**
   * @description The placeholder text which is shown in the input, when it's empty.
   * @property {props}
   * @type {String}
   * @default Add Tag
   */
  placeholder: {
    type: String,
    default: "Add Tag"
  },
  /**
   * @description Custom trigger key codes can be registrated. If the user presses one of these,
     a tag will be generated out of the input value. Can be either a numeric keyCode or the key
     as a string.
   * @property {props}
   * @type {Array}
   * @default [13]
   * @example add-on-key="[13, ':', ';']"
   */
  addOnKey: {
    type: Array,
    default: () => [13],
    validator: F
  },
  /**
   * @description Custom trigger key codes can be registrated. If the user edits a tag
     and presses one of these, the edited tag will be saved.
     Can be either a numeric keyCode or the key as a string.
   * @property {props}
   * @type {Array}
   * @default [13]
   * @example save-on-key="[13, ':', ';']"
   */
  saveOnKey: {
    type: Array,
    default: () => [13],
    validator: F
  },
  /**
   * @description The maximum amount the tags array is allowed to hold.
   * @property {props}
   * @type {Number}
   */
  maxTags: {
    type: Number
  },
  /**
   * @description The maximum amount of characters the input is allowed to hold.
   * @property {props}
   * @type {Number}
   */
  maxlength: {
    type: Number
  },
  /**
   * @description Pass an array containing objects like in the example below.
     The property 'classes' will be added as css classes, if the property 'rule' matches the text
     of a tag, an autocomplete item or the input. The property 'rule' can be type of
     RegExp or function. If the property 'disableAdd' is 'true', the item can't be added
     to the tags array, if the appropriated rule matches.
   * @property {props}
   * @type {Array}
   * @default []
   * @example
    {
    &ensp;classes: 'class', &#47;* css class *&#47;
    &ensp;rule: /^([^0-9]*)$/, &#47;* RegExp *&#47;
    }, {
    &ensp;classes: 'no-braces', &#47;* css class *&#47;
    &ensp;rule(text) { &#47;* function with text as param *&#47;
    &ensp;&ensp;return text.indexOf('{') !== -1 || text.indexOf('}') !== -1;
    &ensp;},
    &ensp;disableAdd: true, &#47;* if the rule matches, the item cannot be added *&#47;,
    },
   */
  validation: {
    type: Array,
    default: () => [],
    validator(e) {
      return !e.some((t) => {
        const s = !t.rule;
        s && console.warn('Property "rule" is missing', t);
        const r = t.rule && (typeof t.rule == "string" || t.rule instanceof RegExp || {}.toString.call(t.rule) === "[object Function]");
        r || console.warn(
          "A rule must be type of string, RegExp or function. Found:",
          JSON.stringify(t.rule)
        );
        const o = !t.classes;
        o && console.warn('Property "classes" is missing', t);
        const g = t.type && typeof t.type != "string";
        return g && console.warn('Property "type" must be type of string. Found:', t), !r || s || o || g;
      });
    }
  },
  /**
   * @description Defines the characters which splits a text into different pieces,
     to generate tags out of this pieces.
   * @property {props}
   * @type {Array}
   * @default [';']
   * @example
     separators: [';', ',']
     input: some; user input, has random; commas, an,d semicolons
     will split into: some - user input - has random - commas - an - d semicolons
   */
  separators: {
    type: Array,
    default: () => [";"],
    validator(e) {
      return !e.some((t) => {
        const s = typeof t != "string";
        return s && console.warn("Separators must be type of string. Found:", t), s;
      });
    }
  },
  /**
   * @description If it's true, the user can't add or save a tag,
     if another exists, with the same text value.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  avoidAddingDuplicates: {
    type: Boolean,
    default: !0
  },
  /**
   * @description If the input holds a value and loses the focus,
     a tag will be generated out of this value, if possible.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  addOnBlur: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Custom function to detect duplicates. If the function returns 'true',
    the tag will be marked as duplicate.
   * @property {props}
   * @type {Function}
   * @param {Array} tagsarray The Array of tags minus the one which is edited/created.
   * @param {Object} tag The tag which is edited or should be added to the tags array.
   * @example
     // The duplicate function to recreate the default behaviour, would look like this:
     isDuplicate(tags, tag) {
     &ensp;return tags.map(t => t.text).indexOf(tag.text) !== -1;
    }
   */
  isDuplicate: {
    type: Function,
    default: null
  },
  /**
   * @description If it's true, the user can paste into the input element and
     vue-tags-input will create tags out of the incoming text.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  addFromPaste: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Defines if it's possible to delete tags by pressing backspace.
     If so and the user wants to delete a tag,
     the tag gets the css class 'deletion-mark' for 1 second.
     If the user presses backspace again in that time period,
     the tag is removed from the tags array and the view.
   * @property {props}
   * @type {Boolean}
   * @default true
   */
  deleteOnBackspace: {
    default: !0,
    type: Boolean
  },
  /**
   * @description Defines if it's possible to reorder items using drag and drop.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  isDraggable: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Defines if items use handle to be dragged.
   * @property {props}
   * @type {Boolean}
   * @default false
   */
  draggableHandle: {
    type: Boolean,
    default: !1
  },
  // event handlers
  onBeforeAddingTag: Function,
  onBeforeDeletingTag: Function,
  onBeforeEditingTag: Function,
  onBeforeSavingTag: Function
};
function L(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var U = function e(t, s) {
  if (t === s)
    return !0;
  if (t && s && typeof t == "object" && typeof s == "object") {
    if (t.constructor !== s.constructor)
      return !1;
    var r, o, g;
    if (Array.isArray(t)) {
      if (r = t.length, r != s.length)
        return !1;
      for (o = r; o-- !== 0; )
        if (!e(t[o], s[o]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === s.source && t.flags === s.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === s.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === s.toString();
    if (g = Object.keys(t), r = g.length, r !== Object.keys(s).length)
      return !1;
    for (o = r; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(s, g[o]))
        return !1;
    for (o = r; o-- !== 0; ) {
      var u = g[o];
      if (!e(t[u], s[u]))
        return !1;
    }
    return !0;
  }
  return t !== t && s !== s;
};
const H = /* @__PURE__ */ L(U), J = (e, t) => t.filter((s) => {
  const { text: r } = e;
  return typeof s.rule == "string" ? !new RegExp(s.rule).test(r) : s.rule instanceof RegExp ? !s.rule.test(r) : {}.toString.call(s.rule) === "[object Function]" ? s.rule(e) : !1;
}).map((s) => s.classes), y = (e) => JSON.parse(JSON.stringify(e)), W = (e, t) => {
  let s = 0;
  for (; s < e.length; ) {
    if (t(e[s], s, e))
      return s;
    s++;
  }
  return -1;
}, P = (e, t, s = [], r) => {
  e.text === void 0 && (e = { text: e });
  const o = J(e, s), g = W(t, (i) => i === e), u = y(t), k = g !== -1 ? u.splice(g, 1)[0] : y(e);
  return (r ? r(u, k) : u.map((i) => i.text).indexOf(k.text) !== -1) && o.push("ti-duplicate"), o.length === 0 ? o.push("ti-valid") : o.push("ti-invalid"), o;
}, v = (e, ...t) => {
  e.text === void 0 && (e = { text: e });
  const s = y(e);
  return s.tiClasses = P(e, ...t), s;
}, G = (e, ...t) => e.map((s) => v(s, e, ...t)), Q = {
  name: "VueTagsInput",
  components: { TagInput: q, draggable: j },
  props: z,
  emits: [
    "adding-duplicate",
    "before-adding-tag",
    "before-deleting-tag",
    "before-editing-tag",
    "before-saving-tag",
    "max-tags-reached",
    "saving-duplicate",
    "tags-changed",
    "tag-clicked",
    "update:modelValue",
    "update:tags",
    "tag-order-changed",
    "click"
  ],
  inheritAttrs: !1,
  data() {
    return {
      tagCenter: [],
      newTag: null,
      tagsCopy: [],
      tagsEditStatus: null,
      deletionMark: null,
      deletionMarkTime: null,
      selectedItem: null,
      focused: null
    };
  },
  computed: {
    // Property which calculates if the autocomplete should be opened or not
    autocompleteOpen() {
      return this.autocompleteAlwaysOpen ? !0 : this.newTag !== null && this.newTag.length >= this.autocompleteMinLength && this.filteredAutocompleteItems.length > 0 && this.focused;
    },
    // Returns validated autocomplete items. Maybe duplicates are filtered out
    filteredAutocompleteItems() {
      const e = this.autocompleteItems.map((t) => v(t, this.tags, this.validation, this.isDuplicate));
      return this.autocompleteFilterDuplicates ? e.filter(this.duplicateFilter) : e;
    }
  },
  methods: {
    createClasses: P,
    // Returns the index which item should be selected, based on the parameter 'method'
    getSelectedIndex(e) {
      const t = this.filteredAutocompleteItems, s = this.selectedItem, r = t.length - 1;
      if (t.length !== 0)
        return s === null ? 0 : e === "before" && s === 0 ? r : e === "after" && s === r ? 0 : e === "after" ? s + 1 : s - 1;
    },
    selectDefaultItem() {
      this.addOnlyFromAutocomplete && this.filteredAutocompleteItems.length > 0 ? this.selectedItem = 0 : this.selectedItem = null;
    },
    selectItem(e, t) {
      e.preventDefault(), this.selectedItem = this.getSelectedIndex(t);
    },
    isSelected(e) {
      return this.selectedItem === e;
    },
    isMarked(e) {
      return this.deletionMark === e;
    },
    // Save ref for tag
    setTagCenter(e) {
      e && this.tagCenter.push(e);
    },
    // Method which is called when the user presses backspace → remove the last tag
    invokeDelete() {
      if (!this.deleteOnBackspace || this.newTag.length > 0)
        return;
      const e = this.tagsCopy.length - 1;
      this.deletionMark === null ? (this.deletionMarkTime = setTimeout(() => {
        this.deletionMark = null;
      }, 1e3), this.deletionMark = e) : this.performDeleteTag(e);
    },
    addTagsFromPaste() {
      this.addFromPaste && setTimeout(() => this.performAddTags(this.newTag), 10);
    },
    // Method to call if a tag should switch to it's edit mode
    performEditTag(e) {
      this.allowEditTags && (this.onBeforeAddingTag || this.editTag(e), this.$emit("before-editing-tag", {
        index: e,
        tag: this.tagsCopy[e],
        editTag: () => this.editTag(e)
      }));
    },
    // Opens the edit mode for a tag and focuses it
    editTag(e) {
      this.allowEditTags && (this.toggleEditMode(e), this.focus(e));
    },
    // Toggles the edit mode for a tag
    toggleEditMode(e) {
      !this.allowEditTags || this.disabled || (this.tagsEditStatus[e] = !this.tagsEditStatus[e]);
    },
    // only called by the @input event from TagInput.
    // Creates a new tag model and applys it to this.tagsCopy[index]
    createChangedTag(e, t) {
      const s = this.tagsCopy[e];
      s.text = t ? t.target.value : this.tagsCopy[e].text, this.tagsCopy[e] = v(s, this.tagsCopy, this.validation, this.isDuplicate);
    },
    // Focuses the input of a tag
    focus(e) {
      this.$nextTick(() => {
        const t = this.tagCenter[e].querySelector("input.ti-tag-input");
        t && t.focus();
      });
    },
    quote(e) {
      return e.replace(/([()[{*+.$^\\|?])/g, "\\$1");
    },
    // Cancels the edit mode for a tag → resets the tag to it's original model!
    cancelEdit(e) {
      this.tags[e] && (this.tagsCopy[e] = y(
        v(this.tags[e], this.tags, this.validation, this.isDuplicate)
      ), this.tagsEditStatus[e] = !1);
    },
    hasForbiddingAddRule(e) {
      return e.some((t) => {
        const s = this.validation.find((r) => t === r.classes);
        return s ? s.disableAdd : !1;
      });
    },
    // Creates multiple tags out of a string, based on the prop separators
    createTagTexts(e) {
      const t = new RegExp(this.separators.map((s) => this.quote(s)).join("|"));
      return e.split(t).map((s) => ({ text: s }));
    },
    // Method to call to delete a tag
    performDeleteTag(e) {
      this.onBeforeDeletingTag || this.deleteTag(e), this.$emit("before-deleting-tag", {
        index: e,
        tag: this.tagsCopy[e],
        deleteTag: () => this.deleteTag(e)
      });
    },
    deleteTag(e) {
      this.disabled || (this.deletionMark = null, clearTimeout(this.deletionMarkTime), this.tagsCopy.splice(e, 1), this.$emit("update:tags", this.tagsCopy), this.$emit("tags-changed", this.tagsCopy));
    },
    // Decides wether the input keyCode is one, which is allowed to modify/add tags
    noTriggerKey(e, t) {
      const s = this[t].indexOf(e.keyCode) !== -1 || this[t].indexOf(e.key) !== -1;
      return s && e.preventDefault(), !s;
    },
    // Method to call to add a tag
    performAddTags(e, t, s) {
      if (this.disabled || t && this.noTriggerKey(t, "addOnKey"))
        return;
      let r = [];
      typeof e == "object" && (r = [e]), typeof e == "string" && (r = this.createTagTexts(e)), r = r.filter((o) => o.text.trim().length > 0), r.forEach((o) => {
        o = v(o, this.tags, this.validation, this.isDuplicate), this.onBeforeAddingTag || this.addTag(o, s), this.$emit("before-adding-tag", {
          tag: o,
          addTag: () => this.addTag(o, s)
        });
      });
    },
    duplicateFilter(e) {
      return this.isDuplicate ? !this.isDuplicate(this.tagsCopy, e) : !this.tagsCopy.find((t) => t.text === e.text);
    },
    addTag(e, t = "new-tag-input") {
      const s = this.filteredAutocompleteItems.map((r) => r.text);
      this.addOnlyFromAutocomplete && s.indexOf(e.text) === -1 || this.$nextTick(() => {
        if (this.maxTags && this.maxTags <= this.tagsCopy.length)
          return this.$emit("max-tags-reached", e);
        if (this.avoidAddingDuplicates && !this.duplicateFilter(e))
          return this.$emit("adding-duplicate", e);
        this.hasForbiddingAddRule(e.tiClasses) || (this.newTag = "", this.tagsCopy.push(e), this.$emit("update:tags", this.tagsCopy), t === "autocomplete" && this.$refs.newTagInput.focus(), this.$emit("tags-changed", this.tagsCopy));
      });
    },
    // Method to call to save a tag
    performSaveTag(e, t) {
      const s = this.tagsCopy[e];
      this.disabled || t && this.noTriggerKey(t, "addOnKey") || s.text.trim().length !== 0 && (this["on-before-saving-tag"] || this.saveTag(e, s), this.$emit("before-saving-tag", {
        index: e,
        tag: s,
        saveTag: () => this.saveTag(e, s)
      }));
    },
    saveTag(e, t) {
      if (this.avoidAddingDuplicates) {
        const s = y(this.tagsCopy), r = s.splice(e, 1)[0];
        if (this.isDuplicate ? this.isDuplicate(s, r) : s.map((g) => g.text).indexOf(r.text) !== -1)
          return this.$emit("saving-duplicate", t);
      }
      this.hasForbiddingAddRule(t.tiClasses) || (this.tagsCopy[e] = t, this.toggleEditMode(e), this.$emit("update:tags", this.tagsCopy), this.$emit("tags-changed", this.tagsCopy));
    },
    tagsEqual() {
      return !this.tagsCopy.some((e, t) => !H(e, this.tags[t]));
    },
    updateNewTag(e) {
      const t = e.target.value;
      this.newTag = t, this.$emit("update:modelValue", t);
    },
    initTags() {
      this.tagsCopy = G(this.tags, this.validation, this.isDuplicate), this.tagsEditStatus = y(this.tags).map(() => !1), this.tagsEqual() || this.$emit("update:tags", this.tagsCopy);
    },
    blurredOnClick(e) {
      this.$el.contains(e.target) || this.$el.contains(document.activeElement) || this.performBlur(e);
    },
    performBlur() {
      this.addOnBlur && this.focused && this.performAddTags(this.newTag), this.focused = !1;
    },
    tagOrderChanged() {
      this.$emit("tag-order-changed", this.tagsCopy);
    },
    performClick(e) {
      if (this.addOnlyFromAutocomplete)
        return this.$emit("click", e), !1;
      this.selectedItem = null, this.$emit("click", e);
    },
    getTagIndex(e) {
      return this.tagsCopy.findIndex((t) => t.text === e.text);
    }
  },
  watch: {
    modelValue(e) {
      this.addOnlyFromAutocomplete || (this.selectedItem = null), this.newTag = e;
    },
    tags: {
      handler() {
        this.initTags();
      },
      deep: !0
    },
    autocompleteOpen: "selectDefaultItem"
  },
  created() {
    this.newTag = this.modelValue, this.initTags();
  },
  mounted() {
    this.selectDefaultItem(), document.addEventListener("click", this.blurredOnClick);
  },
  beforeUpdate() {
    this.tagCenter = [];
  },
  unmounted() {
    document.removeEventListener("click", this.blurredOnClick);
  }
};
const X = { class: "ti-input" }, Y = ["onClick"], Z = { class: "ti-content" }, _ = {
  key: 0,
  class: "handle"
}, x = {
  key: 1,
  class: "ti-tag-left"
}, ee = ["onClick"], te = {
  key: 2,
  class: "ti-tag-right"
}, se = { class: "ti-actions" }, ae = ["onClick"], ie = ["onClick"], re = { class: "ti-new-tag-input-wrapper" }, oe = ["placeholder", "value", "maxlength", "disabled"], le = {
  key: 1,
  class: "ti-tags"
}, ne = ["onClick"], de = { class: "ti-content" }, ue = {
  key: 0,
  class: "ti-tag-left"
}, ge = ["onClick"], pe = {
  key: 1,
  class: "ti-tag-right"
}, fe = { class: "ti-actions" }, me = ["onClick"], he = ["onClick"], ce = { class: "ti-new-tag-input-wrapper" }, ye = ["placeholder", "value", "maxlength", "disabled"], Te = ["onMouseover"], ve = ["onClick"];
function ke(e, t, s, r, o, g) {
  const u = D("tag-input"), k = D("draggable");
  return l(), n("div", {
    class: c(["vue-tags-input", [{ "ti-disabled": e.disabled }, { "ti-focus": e.focused }, e.$attrs.class]]),
    style: E(e.$attrs.style)
  }, [
    p("div", X, [
      e.isDraggable ? (l(), $(k, {
        key: 0,
        modelValue: e.tagsCopy,
        "onUpdate:modelValue": t[9] || (t[9] = (a) => e.tagsCopy = a),
        group: "tags",
        class: "ti-tags",
        tag: "ul",
        draggable: ".item",
        handle: e.draggableHandle ? ".handle" : "",
        "ghost-class": "ghost-tag",
        "drag-class": "drag-tag",
        "item-key": e.getTagIndex,
        onStart: t[10] || (t[10] = (a) => e.drag = !0),
        onEnd: t[11] || (t[11] = (a) => {
          e.drag = !1, e.tagOrderChanged();
        })
      }, {
        item: O(({ element: a, index: i }) => [
          (l(), n("li", {
            key: i,
            style: E(a.style),
            class: c([[{ "ti-editing": e.tagsEditStatus[i] }, a.tiClasses, a.classes, { "ti-deletion-mark": e.isMarked(i) }], "ti-tag item"]),
            tabindex: "0",
            onClick: (m) => e.$emit("tag-clicked", { element: a, index: i })
          }, [
            p("div", Z, [
              e.draggableHandle ? (l(), n("span", _, "::")) : d("", !0),
              e.$slots["tag-left"] ? (l(), n("div", x, [
                f(e.$slots, "tag-left", {
                  tag: a,
                  index: i,
                  edit: e.tagsEditStatus[i],
                  performSaveEdit: e.performSaveTag,
                  performDelete: e.performDeleteTag,
                  performCancelEdit: e.cancelEdit,
                  performOpenEdit: e.performEditTag,
                  deletionMark: e.isMarked(i)
                }, void 0, !0)
              ])) : d("", !0),
              p("div", {
                ref: e.setTagCenter,
                class: "ti-tag-center"
              }, [
                e.$slots["tag-center"] ? d("", !0) : (l(), n("span", {
                  key: 0,
                  class: c({ "ti-hidden": e.tagsEditStatus[i] }),
                  onClick: (m) => e.performEditTag(i)
                }, S(a.text), 11, ee)),
                e.$slots["tag-center"] ? d("", !0) : (l(), $(u, {
                  key: 1,
                  scope: { edit: e.tagsEditStatus[i], maxlength: e.maxlength, element: a, index: i, validateTag: e.createChangedTag, performCancelEdit: e.cancelEdit, performSaveEdit: e.performSaveTag }
                }, null, 8, ["scope"])),
                f(e.$slots, "tag-center", {
                  tag: a,
                  index: i,
                  maxlength: e.maxlength,
                  edit: e.tagsEditStatus[i],
                  performSaveEdit: e.performSaveTag,
                  performDelete: e.performDeleteTag,
                  performCancelEdit: e.cancelEdit,
                  validateTag: e.createChangedTag,
                  performOpenEdit: e.performEditTag,
                  deletionMark: e.isMarked(i)
                }, void 0, !0)
              ], 512),
              e.$slots["tag-right"] ? (l(), n("div", te, [
                f(e.$slots, "tag-right", {
                  tag: a,
                  index: i,
                  edit: e.tagsEditStatus[i],
                  performSaveEdit: e.performSaveTag,
                  performDelete: e.performDeleteTag,
                  performCancelEdit: e.cancelEdit,
                  performOpenEdit: e.performEditTag,
                  deletionMark: e.isMarked(i)
                }, void 0, !0)
              ])) : d("", !0)
            ]),
            p("div", se, [
              e.$slots["tag-actions"] ? d("", !0) : T((l(), n("i", {
                key: 0,
                class: "ti-icon-undo",
                onClick: (m) => e.cancelEdit(i)
              }, null, 8, ae)), [
                [C, e.tagsEditStatus[i]]
              ]),
              e.$slots["tag-actions"] ? d("", !0) : T((l(), n("i", {
                key: 1,
                class: "ti-icon-close",
                onClick: (m) => e.performDeleteTag(i)
              }, null, 8, ie)), [
                [C, !e.tagsEditStatus[i]]
              ]),
              e.$slots["tag-actions"] ? f(e.$slots, "tag-actions", {
                key: 2,
                tag: a,
                index: i,
                edit: e.tagsEditStatus[i],
                performSaveEdit: e.performSaveTag,
                performDelete: e.performDeleteTag,
                performCancelEdit: e.cancelEdit,
                performOpenEdit: e.performEditTag,
                deletionMark: e.isMarked(i)
              }, void 0, !0) : d("", !0)
            ])
          ], 14, Y))
        ]),
        footer: O(() => [
          p("li", re, [
            p("input", b({ ref: "newTagInput" }, e.$attrs, {
              class: [[e.createClasses(e.newTag, e.tags, e.validation, e.isDuplicate)], "ti-new-tag-input"],
              placeholder: e.placeholder,
              value: e.newTag,
              maxlength: e.maxlength,
              disabled: e.disabled,
              type: "text",
              size: "1",
              onKeydown: [
                t[0] || (t[0] = (a) => e.performAddTags(e.filteredAutocompleteItems[e.selectedItem] || e.newTag, a)),
                t[2] || (t[2] = h((...a) => e.invokeDelete && e.invokeDelete(...a), ["delete"])),
                t[3] || (t[3] = h((...a) => e.performBlur && e.performBlur(...a), ["tab"])),
                t[4] || (t[4] = h((a) => e.selectItem(a, "before"), ["up"])),
                t[5] || (t[5] = h((a) => e.selectItem(a, "after"), ["down"]))
              ],
              onPaste: t[1] || (t[1] = (...a) => e.addTagsFromPaste && e.addTagsFromPaste(...a)),
              onInput: t[6] || (t[6] = (...a) => e.updateNewTag && e.updateNewTag(...a)),
              onFocus: t[7] || (t[7] = (a) => e.focused = !0),
              onClick: t[8] || (t[8] = (a) => e.performClick(a))
            }), null, 16, oe)
          ])
        ]),
        _: 3
      }, 8, ["modelValue", "handle", "item-key"])) : (l(), n("ul", le, [
        (l(!0), n(I, null, A(e.tagsCopy, (a, i) => (l(), n("li", {
          key: i,
          style: E(a.style),
          class: c([[{ "ti-editing": e.tagsEditStatus[i] }, a.tiClasses, a.classes, { "ti-deletion-mark": e.isMarked(i) }], "ti-tag item"]),
          tabindex: "0",
          onClick: (m) => e.$emit("tag-clicked", { element: a, index: i })
        }, [
          p("div", de, [
            e.$slots["tag-left"] ? (l(), n("div", ue, [
              f(e.$slots, "tag-left", {
                tag: a,
                index: i,
                edit: e.tagsEditStatus[i],
                performSaveEdit: e.performSaveTag,
                performDelete: e.performDeleteTag,
                performCancelEdit: e.cancelEdit,
                performOpenEdit: e.performEditTag,
                deletionMark: e.isMarked(i)
              }, void 0, !0)
            ])) : d("", !0),
            p("div", {
              ref_for: !0,
              ref: e.setTagCenter,
              class: "ti-tag-center"
            }, [
              e.$slots["tag-center"] ? d("", !0) : (l(), n("span", {
                key: 0,
                class: c({ "ti-hidden": e.tagsEditStatus[i] }),
                onClick: (m) => e.performEditTag(i)
              }, S(a.text), 11, ge)),
              e.$slots["tag-center"] ? d("", !0) : (l(), $(u, {
                key: 1,
                scope: { edit: e.tagsEditStatus[i], maxlength: e.maxlength, element: a, index: i, validateTag: e.createChangedTag, performCancelEdit: e.cancelEdit, performSaveEdit: e.performSaveTag }
              }, null, 8, ["scope"])),
              f(e.$slots, "tag-center", {
                tag: a,
                index: i,
                maxlength: e.maxlength,
                edit: e.tagsEditStatus[i],
                performSaveEdit: e.performSaveTag,
                performDelete: e.performDeleteTag,
                performCancelEdit: e.cancelEdit,
                validateTag: e.createChangedTag,
                performOpenEdit: e.performEditTag,
                deletionMark: e.isMarked(i)
              }, void 0, !0)
            ], 512),
            e.$slots["tag-right"] ? (l(), n("div", pe, [
              f(e.$slots, "tag-right", {
                tag: a,
                index: i,
                edit: e.tagsEditStatus[i],
                performSaveEdit: e.performSaveTag,
                performDelete: e.performDeleteTag,
                performCancelEdit: e.cancelEdit,
                performOpenEdit: e.performEditTag,
                deletionMark: e.isMarked(i)
              }, void 0, !0)
            ])) : d("", !0)
          ]),
          p("div", fe, [
            e.$slots["tag-actions"] ? d("", !0) : T((l(), n("i", {
              key: 0,
              class: "ti-icon-undo",
              onClick: (m) => e.cancelEdit(i)
            }, null, 8, me)), [
              [C, e.tagsEditStatus[i]]
            ]),
            e.$slots["tag-actions"] ? d("", !0) : T((l(), n("i", {
              key: 1,
              class: "ti-icon-close",
              onClick: (m) => e.performDeleteTag(i)
            }, null, 8, he)), [
              [C, !e.tagsEditStatus[i]]
            ]),
            e.$slots["tag-actions"] ? f(e.$slots, "tag-actions", {
              key: 2,
              tag: a,
              index: i,
              edit: e.tagsEditStatus[i],
              performSaveEdit: e.performSaveTag,
              performDelete: e.performDeleteTag,
              performCancelEdit: e.cancelEdit,
              performOpenEdit: e.performEditTag,
              deletionMark: e.isMarked(i)
            }, void 0, !0) : d("", !0)
          ])
        ], 14, ne))), 128)),
        p("li", ce, [
          p("input", b({ ref: "newTagInput" }, e.$attrs, {
            class: [[e.createClasses(e.newTag, e.tags, e.validation, e.isDuplicate)], "ti-new-tag-input"],
            placeholder: e.placeholder,
            value: e.newTag,
            maxlength: e.maxlength,
            disabled: e.disabled,
            type: "text",
            size: "1",
            onKeydown: [
              t[12] || (t[12] = (a) => e.performAddTags(e.filteredAutocompleteItems[e.selectedItem] || e.newTag, a)),
              t[14] || (t[14] = h((...a) => e.invokeDelete && e.invokeDelete(...a), ["delete"])),
              t[15] || (t[15] = h((...a) => e.performBlur && e.performBlur(...a), ["tab"])),
              t[16] || (t[16] = h((a) => e.selectItem(a, "before"), ["up"])),
              t[17] || (t[17] = h((a) => e.selectItem(a, "after"), ["down"]))
            ],
            onPaste: t[13] || (t[13] = (...a) => e.addTagsFromPaste && e.addTagsFromPaste(...a)),
            onInput: t[18] || (t[18] = (...a) => e.updateNewTag && e.updateNewTag(...a)),
            onFocus: t[19] || (t[19] = (a) => e.focused = !0),
            onClick: t[20] || (t[20] = (a) => e.performClick(a))
          }), null, 16, ye)
        ])
      ]))
    ]),
    f(e.$slots, "between-elements", {}, void 0, !0),
    e.autocompleteOpen ? (l(), n("div", {
      key: 0,
      class: "ti-autocomplete",
      onMouseout: t[21] || (t[21] = (a) => e.selectedItem = null)
    }, [
      f(e.$slots, "autocomplete-header", {}, void 0, !0),
      p("ul", null, [
        (l(!0), n(I, null, A(e.filteredAutocompleteItems, (a, i) => (l(), n("li", {
          key: i,
          style: E(a.style),
          class: c([[a.tiClasses, a.classes, { "ti-selected-item": e.isSelected(i) }], "ti-item"]),
          onMouseover: (m) => e.disabled ? !1 : e.selectedItem = i
        }, [
          e.$slots["autocomplete-item"] ? f(e.$slots, "autocomplete-item", {
            key: 1,
            item: a,
            index: i,
            performAdd: (m) => e.performAddTags(m, void 0, "autocomplete"),
            selected: e.isSelected(i)
          }, void 0, !0) : (l(), n("div", {
            key: 0,
            onClick: (m) => e.performAddTags(a, void 0, "autocomplete")
          }, S(a.text), 9, ve))
        ], 46, Te))), 128))
      ]),
      f(e.$slots, "autocomplete-footer", {}, void 0, !0)
    ], 32)) : d("", !0)
  ], 6);
}
const w = /* @__PURE__ */ B(Q, [["render", ke], ["__scopeId", "data-v-63864685"]]);
w.install = (e) => e.component(w.name, w);
export {
  q as TagInput,
  w as VueTagsInput,
  P as createClasses,
  v as createTag,
  G as createTags
};
