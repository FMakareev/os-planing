import faker from "faker";
import Range from '../../../../Helpers/Range';
import {IUser} from "../../../../Types/Types";

export const CreateUser = (): IUser => ({
	lobby: faker.address.city(),
	firstName: faker.name.firstName(1),
	lastName: faker.name.lastName(1),
	patronymic: faker.name.lastName(1),
	avatar: faker.image.avatar(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	id: faker.random.uuid(),
});

export const CreateUserList = () => Range(5).map(()=>CreateUser());


export const mock = CreateUserList();
