<template>
	<div class="list">
		<input v-model="content" />
		<button @click="save">提交</button>
		<list :model="model"></list>
	</div>
</template>

<script>
	import list from './list.vue'
	export default {
		name: "Todolist",
		components: {
			list
		},
		data() {
			return {
				content: '',
				model: [{
						title: '1',
						list: ['今日工作', 'gogogo']
					},
					{
						title: '2',
						list: ['123', '456']
					}
				]
			}
		},
		methods: {
			save() {
				this.model[0].list.unshift(this.content)
				// console.log(this.model)
			}
		}
	};
</script>
