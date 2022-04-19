
# 快速上手

----

## 使用前准备

> 在使用之前，推荐学习 `Vue` 和 `ES2015` ，并正确配置 `Node.js` v6.x 或以上版本

`WD-WH-DP` 基于 `Vue.js` 2.x+ 版本开发，所以有必要了解以下基础知识：
- [Vue 组件](https://cn.vuejs.org/v2/guide/components.html)
- [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

<!-- ## 基于模板工程开发

> `Vue.js` 提供一个官方命令行工具 `vue-cli`，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。

```bash
> npm i -g vue-cli
> mkdir my-project && cd my-project
> vue init webpack
``` -->

### 全局组件使用

- 复制文件夹`package`到大屏框架目录，与src目录同级
- 在大屏框架main.js引入使用
```bash
import WDWHDPUI from '../packages/index'

Vue.use(WDWHDPUI)
``` 
- 组件内部使用该组件
```html
<template>
  <div>
    <wdwh-dp-line-1 :line-data="lineData" line-id="lineId"></wdwh-dp-line-1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lineData: {
          xData: ['0201', '0202', '0203', '0204', '0205', '0206', '0207'],
          unit: '单位',
          legend1: '数据折线一',
          opinionData1: [90, 78, 75, 72, 50, 70, 74, 80]
        }
      }
    }
  }
</script>
``` 

### 单个组件按需使用
#### 组件内部

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
<script>

import wdwhDpLine1 from '../../../packages/wdwh-dp-line1/src/main' //引用路径根据自己文件相对位置引入

export default {
  components: {
    wdwhDpLine1
  }
  data() {
      return {
        lineData: {
          xData: ['0201', '0202', '0203', '0204', '0205', '0206', '0207'],
          unit: '单位',
          legend1: '数据折线一',
          opinionData1: [90, 78, 75, 72, 50, 70, 74, 80]
        }
      }
    }
}

</script>
```

在模板中，用 `<wdwh-dp-line-1></wdwh-dp-line-1>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <wdwh-dp-line-1 :line-data="lineData" line-id="lineId"></wdwh-dp-line-1>
  </div>
</template>
```
