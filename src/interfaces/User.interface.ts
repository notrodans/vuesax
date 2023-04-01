export interface IUser {
	id: number;
	email: string;
	login: string;
	firstName: string;
	lastName: string;
	password: string;
	role: string;
	refreshToken: string;
	image?: string;
	createdAt: Date;
	updatedAt: Date;
}
