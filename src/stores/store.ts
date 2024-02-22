import { defineStore } from "pinia";
import instance from "@/server/axios";
import type {StateType}  from "@/models/app.models";


export const useStore = defineStore("userId", {
	state: (): StateType => {
		return {
			user: null,
		};
	},

	actions: {
		async getUserData() {
			await instance
				.get("/user")
				.then((res) => {
					console.log("OK");
					
					this.user = res.data;
				})
				.catch((rej) => {
					console.log(rej);
				});
		},
	},
});
