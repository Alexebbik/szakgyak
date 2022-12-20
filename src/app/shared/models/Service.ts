export interface Service {
	id: number;
	userid: number;
	name: string;
	email: string;
	telephone: string;
	type: number;
	status: number;
	price: number;
	time: string;
	reserveduserid: number | null;
}