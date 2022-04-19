# 安装
<font color=#1F80E4>如现有框架已安装该依赖模块，可略过以下步骤</font> 
- 基本环境：node.js 
- 基本依赖：echarts、element-ui、datav
<!-- - <font color=#FF8C00>***模块依赖***：这里因为基础组件还引用到第三方插件库的原因，组件所需依赖将在组件用法模块单独说明  -->

----

## 使用 npm 安装
推荐使用 npm 的方式进行开发，享受 node 生态圈和 webpack 工具链带来的便利。通过 npm 安装的模块包，我们可以轻松的使用 import 或者 require 的方式引用

## Echarts安装
```bash
npm install echarts --save
```
### 使用echarts 
在vue项目 main.js 入口文件引入
```bash
import * as echarts from 'echarts' (5.x echarts 引入版本)
import echarts from "echarts" (5.x以下 echarts 引入版本)

Vue.prototype.$echarts = echarts
```
<font color=red>**注意**</font>  

&#8195;这里如果使用echarts水波图还需单独下载npm依赖及单独引入
```bash
npm install echarts-liquidfill --save

import 'echarts-liquidfill' （main.js引入使用，不同版本对应不同引入方式，可自行查阅资料）
```

## Element-ui安装
```bash
npm install element-ui -S
```
### 使用Element-ui
在vue项目 main.js 入口文件引入
```bash
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css' (根据版本路径不同会有差异，按照自己版本路径)

Vue.use(ElementUI)
```

## DataV安装
```bash
npm install @jiaminghi/data-view
```
### 使用DataV
在vue项目 main.js 入口文件引入
```bash
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
```

