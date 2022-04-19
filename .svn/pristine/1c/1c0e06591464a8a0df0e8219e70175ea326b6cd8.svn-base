<template>
	<div :class="['row', Cols, Justify, Align,Span1]" > <slot /> </div>
</template>

<script>
	export default {
		name:'wdwh-dp-row',
		// #ifdef MP-WEIXIN
		options: {virtualHost:true},
		// #endif
		props:{
			gutter: {
				type:[String, Number],
				default:''
			},
		//水平排列方式，可选值为`start`、`end`、`center`、`around`、`between`
			justify: {
				type:String,
				default:'start'
			},
		//垂直对齐方式，可选值为top、center、bottom，
			align: {
				type:String,
				default:'top'
			},
			bg:{
				type:String,
				default:''
			},
			radius: {
				type:[Number, String],
				default:''
			},
			cols: {
				type:[Number, String],
				default:''
			},
			span1:{
				type:[Number, String],
				default:''
			}
          
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
			Justify() {
				let justify;
				switch (this.justify) {
					case 'center':
						justify = 'justify-center'
						break;
					case 'end':
						justify = 'justify-end'
						break;
					case 'between':
						justify = 'justify-between'
						break;
					case 'around':
						justify = 'justify-around'
						break;
					default:
						justify = 'justify-start'
						break;
				}
				return justify
			},
			Align() {
				let align;
				switch (this.align) {
					case 'center':
						align = 'align-center'
						break;
					case 'bottom':
						align = 'align-end'
						break;
					case 'end':
						align = 'align-end'
						break;
					case 'top':
						align = 'align-start'
						break;
					case 'start':
						align = 'align-start'
						break;
					default:
						align = ''
						break;
				}
				return align
			},
			Cols(){
				if(this.cols>0 && this.cols<6) return 'cols-'+this.cols;
				else if(this.cols>5) return 'cols-5';
				else return ''
			},
			 Span1(){
				if(this.cols > 0 || !this.span1 || this.span1 < 1) return '';
				else if(this.span1 > 24) return 'wdwh_dp_row-24';
				else return 'wdwh_dp_row-' + this.span1;
			},
		}
	}
</script>

<style lang="scss">
	.row{
        // height: 100%;
		display:flex;
		flex-direction:row;
		box-sizing:border-box;
		flex-wrap:wrap;
		/* #ifdef MP */
		&::before,&::after{display:table;content:"";}
		&::after{clear:both;}
		/* #endif */
	}
	@for $i from 1 through 24 {
    .wdwh_dp_row-#{$i}{
			/* #ifdef APP-PLUS || H5 */
			flex: 0 0 calc(100%/24*#{$i});
			max-height:calc(100%/24*#{$i});
			/* #endif */
			/* #ifdef MP */
			height: calc(100%/24 * #{$i});
			/* #endif */
		}
}
    
	.justify-start{justify-content:flex-start;}
	.justify-center{justify-content:center;}
	.justify-end{justify-content:flex-end;}
	.justify-between{justify-content:space-between;}
	.justify-around{justify-content:space-around;}
	.align-start{align-items:flex-start}
	.align-center{align-items:center}
	.align-end{align-items:flex-end}

</style>
