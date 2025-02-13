# vue-tags-input

A tags input component for Vue 2 and 3 with autocompletion, custom validation, templating and much more.

Forked from [@sipec/vue-tags-input](https://github.com/sipec/vue-tags-input) which was forked from [@johmun/vue-tags-input](https://www.npmjs.com/package/@johmun/vue-tags-input).

[Demo & Docs](http://www.vue-tags-input.com) (for the original version).


## Install

Vue 2
```
npm i @vojtechlanka/vue-tags-input@^2
```

Vue 3
```
npm i @vojtechlanka/vue-tags-input@^3
```

## Usage with draggable

Draggable is disabled by default. Set prop `:is-draggable` to true to enable it. You can also set `:draggable-handle` to true to enable handle which can be styled with css class `.handle`. Classes for ghost-class and drag-class are `.ghost-tag` and `.drag-tag`.

On drop `tag-order-changed` is emitted with array of tags in new order. Use this array to update your tags to save the new order.

```html
<template>
  <div>
    <vue-tags-input
      v-model="tag"
      :tags="tags"
      :is-draggable="true"
      @tags-changed="newTags => tags = newTags"
      @tag-order-changed="newTags => tags = newTags"
    />
  </div>
</template>
```

```javascript
<script>
// Vue 2
import VueTagsInput from '@vojtechlanka/vue-tags-input';

// Vue 3
import { VueTagsInput } from '@vojtechlanka/vue-tags-input';

export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {
      tag: '',
      tags: [],
    };
  },
};
</script>
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019 Johannes Munari