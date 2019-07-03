import faker from 'faker';
import Range from "../../../Helpers/Range";


export const CreateCityOptions = (count: number = 20) => Range(count).map((item) => {
	const city = faker.address.city();
	return {
		label: city,
		value: city,
	}
});

export const CreateProjectOptions = (count: number = 20) => Range(count).map((item) => {
	const project = faker.lorem.word();
	return {
		label: project,
		value: project
	}
});


const CreateProject = (projectName?: string) => ({
	name: projectName || faker.address.city(),
	count: faker.random.number({min: 0, max: 10}),
	status: faker.random.arrayElement(['green', 'orange', 'red', null])
});


const createDay = (index: any, projectName?: string) => ({
	day: `${index} Мая`,
	status: faker.random.arrayElement(['passed', 'current', null]),
	projects: Range(faker.random.number({min: 0, max: 20})).map((item) => CreateProject(projectName))
});

export const CreateListDay = (count: number = 35, projectName?: string) => Range(count).map((item) => createDay(item + 1, projectName));


export const CalendarMock = CreateListDay();
