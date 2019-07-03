
export interface IReport {
	id?: string;
}

export interface IUser {
	lobby?: string;
	firstName?: string;
	lastName?: string;
	patronymic?: string;
	avatar?: string;
	email?: string;
	password?: string;
	id?: string;
}

export interface INotification {
	id: string;
	createAt: string;
	updateAt: string;
	isRead: boolean;
	message: string;
	sender: IUser;
	report: IReport;
}
