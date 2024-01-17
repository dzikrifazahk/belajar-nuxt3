<template>
  <div>
    <slot name="header">
      <div class="text-4xl font-bold">Ini Header</div>
    </slot>
    <div>Ini Custom Layout</div>
    <slot />
  </div>
</template>
