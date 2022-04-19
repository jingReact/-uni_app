# 边框
<!-- #### <font color=#32CD32>这里注意需要单独下载DataV第三方库依赖，及引入使用方式 [基础组件(头部)datav用法有说明] 如已下载，则跳过</font>
- 如果你足够细心，你会发现标签以`<dv></dv>`出现，则证明是依赖DataV -->

- 基于 DataV 的边框效果，在边框内布局。边框组件默认宽高均为 100%，边框内部的节点将被 slot 插槽分发至边框组件下 class 为 的<font color="red">`border-box-content`</font>容器内，如有布局需要，请针对该容器布局，以免产生样式冲突，导致边框显示异常。如下：

```html
<dv-border-box-1>dv-border-box-1</dv-border-box-1>

<style>
  .border-box-content {
    height: 250px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #46bd87;
    font-weight: 700;
  }
</style>
```

## 自定义颜色

---

所有边框均支持自定义颜色及背景色，配置项及示例如下。

### 颜色配置

| 参数            | 说明       | 类型   | 默认值 |
| --------------- | ---------- | ------ | ------ |
| color           | 自定义颜色 | string | -      |
| backgroundColor | 背景色     | string | -      |

### dv-border-box-1

<div class="demo-block-dark">
   <dv-border-box-1 :color="['red', 'green']" background-color="blue" >dv-border-box-1</dv-border-box-1>
</div>

<style>
  .border-box-content{
    height:250px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #46bd87;
    font-weight: 700;
  }
</style>

:::demo

```html
<div class="demo-block-dark">
  <dv-border-box-1 :color="['red', 'green']" backgroundColor="blue"
    >dv-border-box-1</dv-border-box-1
  >
</div>

<style>
  .border-box-content {
    height: 250px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #46bd87;
    font-weight: 700;
  }
</style>
```

:::

### dv-border-box-2

<div class="demo-block-dark">
   <dv-border-box-2>dv-border-box-2</dv-border-box-2>
</div>

```html
<dv-border-box-2>dv-border-box-2</dv-border-box-2>
```

### dv-border-box-3

<div class="demo-block-dark">
   <dv-border-box-3>dv-border-box-3</dv-border-box-3>
</div>

```html
<dv-border-box-3>dv-border-box-3</dv-border-box-3>
```

### dv-border-box-4

<div class="demo-block-dark">
   <dv-border-box-4>dv-border-box-4</dv-border-box-4>
</div>

```html
<dv-border-box-4>dv-border-box-4</dv-border-box-4>
```

### dv-border-box-4 (reverse)

<div class="demo-block-dark">
   <dv-border-box-4 :reverse="true">dv-border-box-4</dv-border-box-4>
</div>

```html
<dv-border-box-4 :reverse="true">dv-border-box-4</dv-border-box-4>
```

与上边的边框组件略有不同的是，该组件具有翻转形态，你只需要设置 reverse 属性为 true 即可

### dv-border-box-5

<div class="demo-block-dark">
   <dv-border-box-5>dv-border-box-5</dv-border-box-5>
</div>

```html
<dv-border-box-5>dv-border-box-5</dv-border-box-5>
```

### dv-border-box-5 (reverse)

<div class="demo-block-dark">
   <dv-border-box-5 :reverse="true">dv-border-box-5</dv-border-box-5>
</div>

```html
<dv-border-box-5 :reverse="true">dv-border-box-5</dv-border-box-5>
```

### dv-border-box-6

<div class="demo-block-dark">
   <dv-border-box-6>dv-border-box-6</dv-border-box-6>
</div>

```html
<dv-border-box-6>dv-border-box-6</dv-border-box-6>
```

### dv-border-box-7

<div class="demo-block-dark">
   <dv-border-box-7>dv-border-box-7</dv-border-box-7>
</div>

```html
<dv-border-box-7>dv-border-box-7</dv-border-box-7>
```

### dv-border-box-8

<div class="demo-block-dark">
   <dv-border-box-8>dv-border-box-8</dv-border-box-8>
</div>

```html
<dv-border-box-8>dv-border-box-8</dv-border-box-8>
```

### dv-border-box-8 (reverse)

<div class="demo-block-dark">
   <dv-border-box-8 :reverse="true" :dur="2">dv-border-box-8</dv-border-box-8>
</div>

`dur` 属性控制单次动画时长（秒），默认为 3 秒

```html
<dv-border-box-8 :reverse="true" :dur="2">dv-border-box-8</dv-border-box-8>
```

### dv-border-box-9

<div class="demo-block-dark">
   <dv-border-box-9>dv-border-box-9</dv-border-box-9>
</div>

```html
<dv-border-box-9>dv-border-box-9</dv-border-box-9>
```

### dv-border-box-10

<div class="demo-block-dark">
   <dv-border-box-10>dv-border-box-10</dv-border-box-10>
</div>

```html
<dv-border-box-10>dv-border-box-10</dv-border-box-10>
```

### dv-border-box-12

<div class="demo-block-dark">
   <dv-border-box-12>dv-border-box-12</dv-border-box-12>
</div>

```html
<dv-border-box-12>dv-border-box-12</dv-border-box-12>
```

### dv-border-box-13

<div class="demo-block-dark">
   <dv-border-box-13>dv-border-box-13</dv-border-box-13>
</div>

```html
<dv-border-box-13>dv-border-box-13</dv-border-box-13>
```
