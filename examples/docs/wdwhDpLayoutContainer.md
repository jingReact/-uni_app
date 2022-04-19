# 布局容器

---

<style>
 .wdwh-dp-footer-container, .wdwh-dp-header-container{
  background-color: #B3C0D1;
 }
 .wdwh-dp-main-container{
  background-color: #E9EEF3; 
 }
.bg-purple-grey {
  background: #fdcfca;
}
.bg-purple-blue {
  background: #057f8d;
}
.bg-purple-black {
  background: #999888;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple-green {
  background: #998758;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.col-bg {
  background-color: #f9fafc;
}
.wdwh-dp-header-container,.wdwh-dp-footer-container,.content-A,.content-B,.content-C,.content-D,.content-E,.content-F,.content-G,.content-H,.content-I{
  display:flex;
  justify-content: center;
  align-items: center;
  height:100%;
}
</style>
### 布局容器说明

用于布局的容器组件，方便快速搭建页面的基本结构：

`<wdwh-dp-container>`：外层容器。

`<wdwh-dp-header-container>`：顶栏容器。

`<wdwh-dp-main-container>`：主要区域容器。

`<wdwh-dp-footer-container>`：底栏容器。  

`wdwh-dp-row`标签上所绑定属性`gutter`是内部`wdwh-dp-col`标签的内边距距离

如不需要头部或底部，则不引用该组件即可。

---


- 布局一  

<wdwh-dp-container>
  <wdwh-dp-header-container height='50px'>
    <div class='wdwh-dp-header-container'>header</div>
  </wdwh-dp-header-container>
  <wdwh-dp-main-container height='200px'>
    <wdwh-dp-content cols='1'>
      <wdwh-dp-row span1='24' gutter='5'>
        <wdwh-dp-col span="6">
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-A bg-purple-dark'>A</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-B col-bg'>B</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-C bg-purple-grey'>C</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
        <wdwh-dp-col span="12">
           <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-D col-bg'>D</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="16">
             <wdwh-dp-col span="24">
              <div class='content-E bg-purple-grey'>E</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
        <wdwh-dp-col span="6">
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-F bg-purple-light'>F</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-G col-bg'>G</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-H bg-purple-grey'>H</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
      </wdwh-dp-row>
    </wdwh-dp-content>
  </wdwh-dp-main-container>
  <wdwh-dp-footer-container height='30px'>
    <div class='wdwh-dp-footer-container'>footer</div>
  </wdwh-dp-footer-container>
</wdwh-dp-container>

::: demo
```html
<wdwh-dp-container>
  <wdwh-dp-header-container height='50px'>
    <div class='wdwh-dp-header-container'>header</div>
  </wdwh-dp-header-container>
  <wdwh-dp-main-container height='200px'>
    <wdwh-dp-content cols='1'>
      <wdwh-dp-row span1='24' gutter='5'>
        <wdwh-dp-col span="6">
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-A bg-purple-dark'>A</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-B col-bg'>B</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-C bg-purple-grey'>C</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
        <wdwh-dp-col span="12">
           <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-D col-bg'>D</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="16">
             <wdwh-dp-col span="24">
              <div class='content-E bg-purple-grey'>E</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
        <wdwh-dp-col span="6">
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-F bg-purple-light'>F</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-G col-bg'>G</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-H bg-purple-grey'>H</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
      </wdwh-dp-row>
    </wdwh-dp-content>
  </wdwh-dp-main-container>
  <wdwh-dp-footer-container height='30px'>
    <div class='wdwh-dp-footer-container'>footer</div>
  </wdwh-dp-footer-container>
</wdwh-dp-container>

<style>
.wdwh-dp-footer-container, .wdwh-dp-header-container{
  background-color: #B3C0D1;
 }
.wdwh-dp-main-container{
  background-color: #E9EEF3; 
 }
.bg-purple-grey {
  background: #fdcfca;
}
.bg-purple-blue {
  background: #057f8d;
}
.bg-purple-black {
  background: #999888;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple-green {
  background: #998758;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.col-bg {
  background-color: #f9fafc;
}
.wdwh-dp-header-container,.wdwh-dp-footer-container,.content-A,.content-B,.content-C,.content-D,.content-E,.content-F,.content-G,.content-H,.content-I{
  display:flex;
  justify-content: center;
  align-items: center;
  height:100%;
}
</style>

```
:::




---
- 布局二  

<wdwh-dp-container>
  <wdwh-dp-header-container height='50px'>
    <div class='wdwh-dp-header-container'>header</div>
  </wdwh-dp-header-container>
  <wdwh-dp-main-container height='200px'>
    <wdwh-dp-content cols='1'>
      <wdwh-dp-row span1='24' gutter='5'>
        <wdwh-dp-col span="6">
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-A bg-purple-light'>A</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-B col-bg'>B</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-C bg-purple-grey'>C</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
        <wdwh-dp-col span="12">
          <wdwh-dp-row span1="24">
             <wdwh-dp-col span="24">
              <div class='content-D bg-purple-grey'>D</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
        <wdwh-dp-col span="6">
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-E bg-purple-light'>E</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-F col-bg'>F</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-G bg-purple-grey'>G</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
      </wdwh-dp-row>
    </wdwh-dp-content>
  </wdwh-dp-main-container>
  <wdwh-dp-footer-container height='30px'>
    <div class='wdwh-dp-footer-container'>footer</div>
  </wdwh-dp-footer-container>
</wdwh-dp-container>


::: demo
```html
<wdwh-dp-container>
  <wdwh-dp-header-container height='50px'>
    <div class='wdwh-dp-header-container'>header</div>
  </wdwh-dp-header-container>
  <wdwh-dp-main-container height='200px'>
    <wdwh-dp-content cols='1'>
      <wdwh-dp-row span1='24' gutter='5'>
        <wdwh-dp-col span="6">
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-A bg-purple-light'>A</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-B col-bg'>B</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-C bg-purple-grey'>C</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
        <wdwh-dp-col span="12">
          <wdwh-dp-row span1="24">
             <wdwh-dp-col span="24">
              <div class='content-D bg-purple-grey'>D</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
        <wdwh-dp-col span="6">
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-E bg-purple-light'>E</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-F col-bg'>F</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-G bg-purple-grey'>G</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
      </wdwh-dp-row>
    </wdwh-dp-content>
  </wdwh-dp-main-container>
  <wdwh-dp-footer-container height='30px'>
    <div class='wdwh-dp-footer-container'>footer</div>
  </wdwh-dp-footer-container>
</wdwh-dp-container>

<style>
.wdwh-dp-footer-container, .wdwh-dp-header-container{
  background-color: #B3C0D1;
 }
.wdwh-dp-main-container{
  background-color: #E9EEF3; 
 }
.bg-purple-grey {
  background: #fdcfca;
}
.bg-purple-blue {
  background: #057f8d;
}
.bg-purple-black {
  background: #999888;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple-green {
  background: #998758;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.col-bg {
  background-color: #f9fafc;
}
.wdwh-dp-header-container,.wdwh-dp-footer-container,.content-A,.content-B,.content-C,.content-D,.content-E,.content-F,.content-G,.content-H,.content-I{
  display:flex;
  justify-content: center;
  align-items: center;
  height:100%;
}
</style>

```
:::

---
- 布局三  

<wdwh-dp-container>
  <wdwh-dp-header-container height='50px'>
    <div class='wdwh-dp-header-container'>header</div>
  </wdwh-dp-header-container>
  <wdwh-dp-main-container height='200px'>
    <wdwh-dp-content cols='1'>
      <wdwh-dp-row span1='24'>
        <wdwh-dp-col span="24">
          <wdwh-dp-row span1='5'>
            <wdwh-dp-col span="24">
              <div class='content-A bg-purple-dark'>A</div>
            </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1='19' gutter='5'>
            <wdwh-dp-col span="6">
              <div class='content-B bg-purple-grey'>B</div>
            </wdwh-dp-col>
            <wdwh-dp-col span="18">
              <wdwh-dp-row span1="12">
                <wdwh-dp-col span="6">
                  <div class='content-C bg-purple-black'>C</div>
                </wdwh-dp-col>
                <wdwh-dp-col span="6">
                  <div class='content-D bg-purple-green'>D</div>
                </wdwh-dp-col>
                <wdwh-dp-col span="12">
                  <div class='content-E bg-purple-black'>E</div>
                </wdwh-dp-col>
              </wdwh-dp-row>
              <wdwh-dp-row span1="12">
                <wdwh-dp-col span="24">
                  <wdwh-dp-row span1="24">
                    <wdwh-dp-col span="8">
                      <div class='content-F bg-purple-dark'>F</div>
                    </wdwh-dp-col>
                    <wdwh-dp-col span="8">
                      <div class='content-G bg-purple-grey'>G</div>
                    </wdwh-dp-col>
                    <wdwh-dp-col span="8">
                      <div class='content-H bg-purple-green'>H</div>
                    </wdwh-dp-col>
                  </wdwh-dp-row>
                </wdwh-dp-col>
              </wdwh-dp-row>
            </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
      </wdwh-dp-row>
    </wdwh-dp-content>
  </wdwh-dp-main-container>
  <wdwh-dp-footer-container height='30px'>
    <div class='wdwh-dp-footer-container'>footer</div>
  </wdwh-dp-footer-container>
</wdwh-dp-container>


::: demo
```html
<wdwh-dp-container>
  <wdwh-dp-header-container height='50px'>
    <div class='wdwh-dp-header-container'>header</div>
  </wdwh-dp-header-container>
  <wdwh-dp-main-container height='200px'>
    <wdwh-dp-content cols='1'>
      <wdwh-dp-row span1='24'>
        <wdwh-dp-col span="24">
          <wdwh-dp-row span1='5'>
            <wdwh-dp-col span="24">
              <div class='content-A bg-purple-dark'>A</div>
            </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1='19' gutter='5'>
            <wdwh-dp-col span="6">
              <div class='content-B bg-purple-grey'>B</div>
            </wdwh-dp-col>
            <wdwh-dp-col span="18">
              <wdwh-dp-row span1="12">
                <wdwh-dp-col span="6">
                  <div class='content-C bg-purple-black'>C</div>
                </wdwh-dp-col>
                <wdwh-dp-col span="6">
                  <div class='content-D bg-purple-green'>D</div>
                </wdwh-dp-col>
                <wdwh-dp-col span="12">
                  <div class='content-E bg-purple-black'>E</div>
                </wdwh-dp-col>
              </wdwh-dp-row>
              <wdwh-dp-row span1="12">
                <wdwh-dp-col span="24">
                  <wdwh-dp-row span1="24">
                    <wdwh-dp-col span="8">
                      <div class='content-F bg-purple-dark'>F</div>
                    </wdwh-dp-col>
                    <wdwh-dp-col span="8">
                      <div class='content-G bg-purple-grey'>G</div>
                    </wdwh-dp-col>
                    <wdwh-dp-col span="8">
                      <div class='content-H bg-purple-green'>H</div>
                    </wdwh-dp-col>
                  </wdwh-dp-row>
                </wdwh-dp-col>
              </wdwh-dp-row>
            </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
      </wdwh-dp-row>
    </wdwh-dp-content>
  </wdwh-dp-main-container>
  <wdwh-dp-footer-container height='30px'>
    <div class='wdwh-dp-footer-container'>footer</div>
  </wdwh-dp-footer-container>
</wdwh-dp-container>

<style>
.wdwh-dp-footer-container, .wdwh-dp-header-container{
  background-color: #B3C0D1;
 }
.wdwh-dp-main-container{
  background-color: #E9EEF3; 
 }
.bg-purple-grey {
  background: #fdcfca;
}
.bg-purple-blue {
  background: #057f8d;
}
.bg-purple-black {
  background: #999888;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple-green {
  background: #998758;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.col-bg {
  background-color: #f9fafc;
}
.wdwh-dp-header-container,.wdwh-dp-footer-container,.content-A,.content-B,.content-C,.content-D,.content-E,.content-F,.content-G,.content-H,.content-I{
  display:flex;
  justify-content: center;
  align-items: center;
  height:100%;
}
</style>

```
:::

---
- 布局四  

<wdwh-dp-container>
  <wdwh-dp-header-container height='50px'>
    <div class='wdwh-dp-header-container'>header</div>
  </wdwh-dp-header-container>
  <wdwh-dp-main-container height='200px'>
    <wdwh-dp-content cols='1'>
      <wdwh-dp-row span1='24' gutter='5'>
        <wdwh-dp-col span="6">
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-A bg-purple-light'>A</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-B col-bg'>B</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-C bg-purple-grey'>C</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
        <wdwh-dp-col span="18">
          <wdwh-dp-row span1="16">
             <wdwh-dp-col span="16">
              <div class='content-D bg-purple-green'>D</div>
             </wdwh-dp-col>
             <wdwh-dp-col span="8">
              <div class='content-E bg-purple-grey'>E</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="6">
              <div class='content-F bg-purple-dark'>F</div>
             </wdwh-dp-col>
             <wdwh-dp-col span="6">
              <div class='content-G bg-purple'>G</div>
             </wdwh-dp-col>
             <wdwh-dp-col span="6">
              <div class='content-H bg-purple-black'>H</div>
             </wdwh-dp-col>
             <wdwh-dp-col span="6">
              <div class='content-I bg-purple-green'>I</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
      </wdwh-dp-row>
    </wdwh-dp-content>
  </wdwh-dp-main-container>
  <wdwh-dp-footer-container height='30px'>
    <div class='wdwh-dp-footer-container'>header</div>
  </wdwh-dp-footer-container>
</wdwh-dp-container>


::: demo
```html
<wdwh-dp-container>
  <wdwh-dp-header-container height='50px'>
    <div class='wdwh-dp-header-container'>header</div>
  </wdwh-dp-header-container>
  <wdwh-dp-main-container height='200px'>
    <wdwh-dp-content cols='1'>
      <wdwh-dp-row span1='24' gutter='5'>
        <wdwh-dp-col span="6">
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-A bg-purple-light'>A</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-B col-bg'>B</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="24">
              <div class='content-C bg-purple-grey'>C</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
        <wdwh-dp-col span="18">
          <wdwh-dp-row span1="16">
             <wdwh-dp-col span="16">
              <div class='content-D bg-purple-green'>D</div>
             </wdwh-dp-col>
             <wdwh-dp-col span="8">
              <div class='content-E bg-purple-grey'>E</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
          <wdwh-dp-row span1="8">
             <wdwh-dp-col span="6">
              <div class='content-F bg-purple-dark'>F</div>
             </wdwh-dp-col>
             <wdwh-dp-col span="6">
              <div class='content-G bg-purple'>G</div>
             </wdwh-dp-col>
             <wdwh-dp-col span="6">
              <div class='content-H bg-purple-black'>H</div>
             </wdwh-dp-col>
             <wdwh-dp-col span="6">
              <div class='content-I bg-purple-green'>I</div>
             </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-col>
      </wdwh-dp-row>
    </wdwh-dp-content>
  </wdwh-dp-main-container>
  <wdwh-dp-footer-container height='30px'>
    <div class='wdwh-dp-footer-container'>header</div>
  </wdwh-dp-footer-container>
</wdwh-dp-container>

<style>
.wdwh-dp-footer-container, .wdwh-dp-header-container{
  background-color: #B3C0D1;
 }
.wdwh-dp-main-container{
  background-color: #E9EEF3; 
 }
.bg-purple-grey {
  background: #fdcfca;
}
.bg-purple-blue {
  background: #057f8d;
}
.bg-purple-black {
  background: #999888;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple-green {
  background: #998758;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.col-bg {
  background-color: #f9fafc;
}
.wdwh-dp-header-container,.wdwh-dp-footer-container,.content-A,.content-B,.content-C,.content-D,.content-E,.content-F,.content-G,.content-H,.content-I{
  display:flex;
  justify-content: center;
  align-items: center;
  height:100%;
}
</style>

```
:::