<template>
	<div class="list">
		<div v-for="(item,i) in model" :key="i">
			<h3>{{item.title | showTitle}}</h3>
			<ul>
				<li v-for="(list,index) in item.list" :key="index">
					<div class="item">
						<div style="flex: 1;">{{list}}</div>
						<div style="padding-right: 1rem;">完成</div>
						<div @click="del(item.list,index)">删除</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			model: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {
			del(list, index) {
				console.log(list, index)
				list.splice(index, 1)
			}
		},
		filters: {
			showTitle(value) {
				if (value == 1) {
					return '待办'
				} else {
					return '已完成'
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.list {
		ul {
			padding: 0;

			li {
				list-style: none;
			}
		}

		.item {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
	}
</style>
