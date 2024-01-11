import VueTagsInput from './vue-tags-input.vue'
import TagInput from './components/tag-input.vue'
import { createClasses, createTag, createTags } from './create-tags.js'

// add auto-install support if the component is attached to the windows object e.g. if added by CDN
VueTagsInput.install = Vue => Vue.component(VueTagsInput.name, VueTagsInput)

export {
  VueTagsInput,
  TagInput,
  createClasses,
  createTag,
  createTags
}
