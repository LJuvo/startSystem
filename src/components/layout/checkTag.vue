<template>
    <div>
        <template v-for="tag in tagList">
            <a-checkable-tag
              :key="tag.class"
              :checked="selectedTags.indexOf(tag.class) > -1"
              @change="(checked) => handleChange(tag.class, checked)"
            >
              {{ tag.class }}
            </a-checkable-tag>
          </template>
    </div>
</template>
<script>
export default {
    props:{
        tagList: {
            type: Array,
            default: ()=> {
                return []
            }
        },
        selected:{
            type: Array,
            default: ()=> {
                return []
            }
        }
    },
  data() {
    return {
      selectedTags: [],
    };
  },
  watch:{
      selected(val) {
          this.selectedTags = val;
      }
  },
  mounted(){
      if(this.selected.length> 0) {
          this.selectedTags = this.selected;
      }
  },
  methods: {
    handleChange(tag, checked) {
      const { selectedTags } = this;
      const lastTags = _.intersection(selectedTags, this.tagList);
      const nextSelectedTags = checked
        ? [tag]
        : selectedTags.filter((t) => t !== tag);
      this.selectedTags = nextSelectedTags;
      this.$emit("on-change", {
          lastTags,
          tag, checked
      })
    },
  },
};
</script>

