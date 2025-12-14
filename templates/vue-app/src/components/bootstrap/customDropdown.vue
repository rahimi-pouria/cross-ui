<template>
  <BDropdown :text="selectedLabel" :variant="variant" :aria-label="ariaLabel" :boundary="boundary" :boundary-padding="boundaryPadding" :disabled="disabled"
      :floating-middleware="floatingMiddleware" :icon="icon" :id="id" :initial-animation="initialAnimation" :is-nav="isNav" :lazy="lazy" :menu-class="menuClass" :model-value="modelValue" :no-animation="noAnimation" :no-caret="noCaret" :no-fade="noFade" :no-flip="noFlip" :no-shift="noShift"
      :no-size="noSize" :no-wrapper="noWrapper" :offset="offset" :placement="placement" :role="role" :show="show" :size="size" :split="split" :split-class="splitClass"
      :split-disabled="splitDisabled" :split-href="splitHref" :split-to="splitTo" :strategy="strategy" :teleport-disabled="teleportDisabled" :teleport-to="teleportTo"
      :toggle-class="toggleClass" :toggle-text="toggleText" :trans-props="transProps" :unmount-lazy="unmountLazy" :visible="visible" :wrapper-class="wrapperClass"
  >
    <BDropdownItem v-for="item in dropdownItem" :key="item.value" :value="item.name" @click="selectItem(item)">
      <template v-if="item.link">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </template>
      <template v-else>
        {{ item.name }}
      </template>
    </BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
import {CustomDropdownProps} from '@/props/bootstrap/customDropdown';
import { ref } from 'vue'
import { BDropdown, BDropdownItem } from 'bootstrap-vue-next'


const props = defineProps(CustomDropdownProps)

const selectedLabel = ref(props.text)

function selectItem(item: { name: string; value: string }) {
  selectedLabel.value = item.name
}
</script>
