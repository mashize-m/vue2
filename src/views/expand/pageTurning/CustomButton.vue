<template>
  <button :class="btnClasses" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClasses () {
      return [
        'custom-button',
        `custom-button--${this.type}`,
        `custom-button--${this.size}`,
        {
          'custom-button--disabled': this.disabled
        }
      ]
    }
  },
  methods: {
    handleClick () {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style scoped>
.custom-button {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.custom-button--default {
  background-color: #fff;
  color: #333;
}

.custom-button--primary {
  background-color: #409eff;
  color: #fff;
}

.custom-button--success {
  background-color: #67c23a;
  color: #fff;
}

.custom-button--danger {
  background-color: #f56c6c;
  color: #fff;
}

.custom-button--medium {
  font-size: 14px;
}

.custom-button--small {
  font-size: 12px;
}

.custom-button--mini {
  font-size: 10px;
}

.custom-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
