<template>
	<div>

		<grid>
			<grid-item v-for="(v,i) in selectTitle" :key='i' @click.native='change(i,$event)'>
				{{v}}
			</grid-item>
		</grid>

		<keep-alive>
			<component :is="currentView" class='ptop40' v-if='isSelect'></component>
		</keep-alive>
	</div>
</template>

<script>
	import { Grid, GridItem } from 'vux'
	import loanType from '@/components/recommendSelectLoanType'
	import loanDeadline from '@/components/recommendSelectLoanDeadline'
	import loanSort from '@/components/recommendSelectLoanSort'
	import loanQuota from '@/components/recommendSelectLoanQuota'

	export default {
		components: {
			Grid,
			GridItem
		},
		data() {
			return {
				//当前动态组件显示的内容
				currentView: loanType,
				selectTitle: ['贷款类型', '可贷额度', '借款期限', '排序'],
				//动态组件是否显示，初始化为不显示
				isSelect: false,
				//当前loantype组件状态 ，初始化为不显示
				isSelectType: false,
				isSelectQuota: false,
				isSelectDeadline: false,
				isSelectSort: false,
				//存上一次鼠标点击的标签
				clickTarget: {}
			}
		},
		methods: {
			//grid-item的点击事件，根据参数来决定显示动态组件中的内容，event是当前事件对象
			change(i, event) {
				//默认是不显示动态组件中的内容，现在打开。
				this.isSelect = true
				//根据参数来决定显示动态组件中的内容
				switch(i) {
					//当点击索引为0的grid-item时，要显示动态组件中的loanType组件
					case 0:
						this.isloanType(event)
						break;
					case 1:
						this.isloanQuota(event)
						break;
					case 2:
						this.isloanDeadline(event)
						break;
					case 3:
						this.isloanSort(event)
						break;
				}
			},
			//当点击索引为0的grid-item时，执行此方法。有两个功能，
			//1.首次点击时，将显示loanType组件
			//2.当loanType组件处于显示状态时，再次点击索引为0的grid-item时将loanType组件隐藏
			isloanType(event) {
				//将动态组件内容设置为loanType组件
				this.currentView = loanType
				//this.clickTarget == event.target 表示两次点击的是同一个标签
				//并且当前组件是显示状态，点击后，将动态组件的状态改为不显示
				if(this.clickTarget == event.target && this.isSelectType) {
					this.isSelect = false
				}
				//当两次点击的不是同一个标签时，当前组件状态应该设置为显示，
				//但是后面会对当前组件状态进行取反，所以这里设置为不显示
				if(!(this.clickTarget == event.target)) {
					this.isSelectType = false
				}
				//设置上一次点击标签为当前的点击标签
				this.clickTarget = event.target;
				//点击后显示，再次点击隐藏，所以取反
				this.isSelectType = !this.isSelectType
			},
			isloanQuota(event) {
				this.currentView = loanQuota
				if(this.clickTarget == event.target && this.isSelectQuota) {
					this.isSelect = false
				}
				if(!(this.clickTarget == event.target)) {
					this.isSelectQuota = false
				}
				this.clickTarget = event.target;
				this.isSelectQuota = !this.isSelectQuota

			},
			isloanDeadline(event) {
				this.currentView = loanDeadline
				if(this.clickTarget == event.target && this.isSelectDeadline) {
					this.isSelect = false
				}
				if(!(this.clickTarget == event.target)) {
					this.isSelectDeadline = false
				}
				this.clickTarget = event.target;
				this.isSelectDeadline = !this.isSelectDeadline

			},
			isloanSort(event) {
				this.currentView = loanSort
				if(this.clickTarget == event.target && this.isSelectSort) {
					this.isSelect = false
				}
				if(!(this.clickTarget == event.target)) {
					this.isSelectSort = false
				}
				this.clickTarget = event.target;
				this.isSelectSort = !this.isSelectSort

			},
		}
	}
</script>

<style scoped>
	.weui-grid {
		background: white;
		border: 1px solid black;
		text-align: center;
		padding: 0 !important;
		height: 40px;
		line-height: 40px;
	}
	
	.weui-grids {
		position: fixed;
		width: 100%;
	}
	
	.ptop40 {
		padding-top: 40px;
	}
</style>