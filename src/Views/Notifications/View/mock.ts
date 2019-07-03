import faker from 'faker';
import Range from '../../../Helpers/Range';

import {INotification, IReport} from "../../../Types/Types";
import {CreateUser} from "../../Users/Views/Users/mock";

const CreateReport = ():IReport => ({
	id: faker.random.uuid(),
});



export const CreateNotification = (): INotification => ({
	id: faker.random.uuid(),
	createAt: '29 апреля 2019',
	updateAt: '29 апреля 2019',
	isRead: faker.random.boolean(),
	message: faker.random.words(),
	sender: CreateUser(),
	report: CreateReport()
});

export const CreateNotificationList = () => Range(5).map(()=>CreateNotification());

export const mock = CreateNotificationList();
