<template>
	<div :class="['content', Cols]" > <slot /> </div>
</template>
<script>
	export default {
		name:'wdwh-dp-content',
		// #ifdef MP-WEIXIN
		// 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现，可使用flex布局
		options: {virtualHost:true},
		// #endif
		props:{
			gutter: {
				type:[String, Number],
				default:''
			},
			cols: {
				type:[Number, String],
				default:''
			},
          
		},
		provide(){
			return {
				row:this,
				// gutter:this.gutter,
				// radius:this.radius,
				// cols:this.cols,
				// bg:this.bg
			}
		},
		computed:{
			Cols(){
				if(this.cols>0 && this.cols<6) return 'cols-'+this.cols;
				else if(this.cols>5) return 'cols-5';
				else return ''
			},
            
		}
	}
</script>

<style lang="scss">
	.content{
        height: 100%;
		// display:flex;
		// flex-direction:row;
		// box-sizing:border-box;
		// flex-wrap:wrap;
		/* #ifdef MP */
		&::before,&::after{display:table;content:"";}
		&::after{clear:both;}
		/* #endif */
	}


</style>
