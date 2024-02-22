interface userInfo {
	name: string;
	lastName: string;
	position: string;
	age: number;
	about: string;
	email: string;
}
export interface StateType {
	user?: userInfo | null;
}