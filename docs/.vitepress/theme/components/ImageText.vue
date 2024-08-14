<template>
    <div :style="{ display: 'flex' }">
      <img
        :src="imageLink"
        :style="{
          width: imageSize + 'px',
          cursor: zoomable ? 'zoom-in' : 'initial'
        }"
        :data-zoomable="zoomable"
      />
      <p :style="{ marginLeft: placement === 'left' ? margin + 'px' : 0, marginRight: placement === 'right' ? margin + 'px' : 0 }">
        <div v-html="input"></div>
      </p>
    </div>
</template>
  
<script>
export default {
props: {
    imageLink: {
        type: String,
        required: true
    },
    zoomable: {
        type: Boolean,
        default: false
    },
    imageSize: {
        type: Number,
        default: 200
    },
    placement: {
        type: String,
        default: 'left',
        validator: (value) => ['left', 'right'].includes(value)
    },
    input: {
        type: String,
        required: true
    },
    margin: {
        type: Number,
        default: 20
    }
}
}
</script>
  