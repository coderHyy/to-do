import Vue from "vue";
import VueRouter from "vue-router";
import Todolist from "../views/todolist/Todolist.vue";

Vue.use(VueRouter);

const routes = [{
		path: "/",
		name: "Todolist",
		component: Todolist
	}
];

const router = new VueRouter({
	routes
});

export default router;
