<script setup lang="ts">
import generatedRoutes from 'virtual:generated-pages'
const routes = generatedRoutes
const router = useRouter()
const activeIndex = computed(() => {
  return `${routes.findIndex(v => router.currentRoute.value.name === v.name)}`
})
const handleSelect = (index: string) => {
  router.push(routes[+index].path)
}

const showDrawer = ref(false)
const toggleDrawer = () => {
  showDrawer.value = !showDrawer.value
}
</script>

<template>
  <!-- pc -->
  <el-menu
    :default-active="activeIndex"
    class="hidden md:block el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item v-for="(value,index) in routes" :key="index+'route'" :index="index+''">
      {{ value.name }}
    </el-menu-item>
  </el-menu>
  <!-- mobile -->
  <div class="py-4 px-5 flex justify-end md:hidden ">
    <icon-mdi-menu class="text-lg dark:text-white" @click="toggleDrawer" />
  </div>
  <el-drawer v-model="showDrawer" size="50%" title="I am the title" :with-header="false">
    <ul>
      <li class="mb-4">
        Guide
      </li>
      <li
        v-for="(value,index) in routes"
        :key="index+'route1'"
        class="mb-3 underline pl-6"
        :class="[+activeIndex === index?'text-blue-500':'']"
        :index="index+''"
        @click="handleSelect(index+'')"
      >
        {{ value.name }}
      </li>
    </ul>
  </el-drawer>
</template>

<style scoped lang="scss">
  .activeLink{
    color:blue;
  }
  .el-menu-item{
    @apply capitalize;
  }
</style>
