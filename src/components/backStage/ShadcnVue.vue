<template>
  <div class="flex-1 bg-gray-800 p-5">
    <div class="w-[400px]">
      <p class="text-white">預設 Input</p>
      <Input />
    </div>
    <div class="w-[400px] mt-1">
      <p class="text-white">登入畫面 Input</p>
      <SvgInput :iconName="'phone'" :placeholder="'請輸入帳號'" />
    </div>
    <div class="w-[400px] mt-1">
      <p class="text-white">密碼 Input</p>
      <PwdInput :iconName="'phone'" :placeholder="'請輸入密碼'" />
    </div>
    <div class="w-[400px] mt-1">
      <p class="text-white">驗證 Input</p>
      <VerificationInput :iconName="'phone'" :placeholder="'請輸入驗證碼'" />
    </div>
    <div class="sliderInput mt-1">
      <p class="text-white">前台 number Input</p>
      <Input type="number" size="numberSm" />
    </div>
    <div class="backStageInput mt-1">
      <p class="text-white">後台 number Input</p>
      <Input type="number" />
    </div>
    <div class="mt-5">
      <p class="text-white">Label</p>
      <CheckLabel />
    </div>
    <div class="w-[400px] mt-5">
      <p class="text-white">進度條</p>
      <Progress :modelValue="100" />
    </div>
    <div class="w-[500px] mt-5 bg-white p-3">
      <p>分頁器</p>
      <Pagination />
    </div>
    <div class="w-[140px] mt-5 bg-black/30 p-5">
      <NumberField />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { Input } from "@/components/ui/input";
  import { Progress } from "@/components/ui/progress";
  import SvgInput from "./share/SvgInput.vue";
  import PwdInput from "./share/PwdInput.vue";
  import VerificationInput from "./share/VerificationInput.vue";
  import CheckLabel from "./share/CheckLabel.vue";
  import Pagination from "./share/Pagination.vue";
  import NumberField from "./share/NumberField.vue";
</script>
<style lang="scss" scoped>
  .sliderInput {
    width: 210px;
    display: grid;
    grid-template-columns: 9fr 2fr;
  }
  .backStageInput {
    width: 250px;
    display: grid;
    grid-template-columns: 5fr 2fr;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
