# 栅格布局

---
<style>
  .bg-purple-dark {

    background: #99a9bf;

  }
  .bg-purple {

    background: #d3dce6;

  }
  .bg-purple-light {

    background: #e5e9f2;

  }
  .grid-content {

    border-radius: 4px;
    /* min-height: 36px; */

  }
  .col-bg {
    background-color: #f9fafc;

  }
  .row-spacing{
    margin-top: 15px;
  }
</style>
- 基础布局  

wdwh-dp-content的`cols`的值为1~5，1为100%宽度, 2为50%宽度

wdwh-dp-row的`span1`为纵向等分，共为24等分, `gutter`为wdwh-dp-col间距

wdwh-dp-col的`sapn`为横向等分，24等分  
<wdwh-dp-content cols='1'>
  <wdwh-dp-row span1='24' class='row-spacing'>
    <wdwh-dp-col span="24">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>

  <wdwh-dp-row span1='24' class='row-spacing'>
    <wdwh-dp-col span="12">
      <div class="grid-content bg-purple"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="12">
      <div class="grid-content bg-purple-light"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>

  <wdwh-dp-row span1='24' gutter='10' class="row-spacing grid-content bg-purple">
    <wdwh-dp-col span="8">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="8">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="8">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>
</wdwh-dp-content>

::: demo
```html
<wdwh-dp-content cols='1'>
  <wdwh-dp-row span1='24' class='row-spacing'>
    <wdwh-dp-col span="24">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>

  <wdwh-dp-row span1='24' class='row-spacing'>
    <wdwh-dp-col span="12">
      <div class="grid-content bg-purple"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="12">
      <div class="grid-content bg-purple-light"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>

  <wdwh-dp-row span1='24' gutter='10' class="row-spacing grid-content bg-purple">
    <wdwh-dp-col span="8">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="8">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="8">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>
</wdwh-dp-content>
```
:::

- 对齐方式  `justify`绑定属性，属性值可选值为`start`、`end`、`center`、`around`、`between`  

<wdwh-dp-content cols='1'>
  <wdwh-dp-row span1='24' justify='center' class="row-spacing grid-content bg-purple">
    <wdwh-dp-col span="8">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>
  <wdwh-dp-row span1='24' justify='between' class="row-spacing grid-content bg-purple">
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>
  <wdwh-dp-row span1='24' justify='around' class="row-spacing grid-content bg-purple">
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>
</wdwh-dp-content>

::: demo
```html
<wdwh-dp-content cols='1'>
  <wdwh-dp-row span1='24' justify='center' class="row-spacing grid-content bg-purple">
    <wdwh-dp-col span="8">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>
  <wdwh-dp-row span1='24' justify='between' class="row-spacing grid-content bg-purple">
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>
  <wdwh-dp-row span1='24' justify='around' class="row-spacing grid-content bg-purple">
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>
</wdwh-dp-content>
```
:::

- 偏移量  `offset`属性  

<wdwh-dp-content cols='1'>
  <wdwh-dp-row span1='24' class="row-spacing grid-content bg-purple">
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="6" offset='3'>
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="6" offset='1'>
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>
</wdwh-dp-content>

::: demo
```html
<wdwh-dp-content cols='1'>
  <wdwh-dp-row span1='24' class="row-spacing grid-content bg-purple">
    <wdwh-dp-col span="6">
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="6" offset='3'>
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
    <wdwh-dp-col span="6" offset='1'>
      <div class="grid-content bg-purple-dark"></div>
    </wdwh-dp-col>
  </wdwh-dp-row>
</wdwh-dp-content>
```
:::