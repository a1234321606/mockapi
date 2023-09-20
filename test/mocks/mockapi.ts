import { DateTime } from 'luxon';

const users = [{
  id: '1',
  name: 'KH',
  jobType: 'Technical Assistant Manager',
}, {
  id: '2',
  name: 'KW',
  jobType: 'Analyst',
}, {
  id: '3',
  name: 'Vicky',
  jobType: 'Senior Manager',
}, {
  id: '4',
  name: 'Alice',
  jobType: 'Developer',
},
{
  id: '5',
  name: 'Bob',
  jobType: 'Designer',
},
{
  id: '6',
  name: 'Charlie',
  jobType: 'Manager',
},
{
  id: '7',
  name: 'David',
  jobType: 'Engineer',
},
{
  id: '8',
  name: 'Eva',
  jobType: 'Analyst',
},
{
  id: '9',
  name: 'Frank',
  jobType: 'Consultant',
}];

const details = [{
  id: '1',
  createdAt: DateTime.now().toISO(),
  city: 'Taipei',
  zipCode: '116',
  address: 'Roosevelt Rd.',
  gender: 'Male',
}, {
  id: '2',
  createdAt: DateTime.now().plus({ days: -1 }).toISO(),
  city: 'New Taipei',
  zipCode: '22181',
  address: 'Hsintai 5th Rd.',
  gender: 'Not revealed',
}, {
  id: '3',
  createdAt: DateTime.now().toISO(),
  city: 'Taipei',
  zipCode: '11469',
  address: 'Xingshan Rd.',
  gender: 'Female',
}, {
  id: '4',
  createdAt: DateTime.now().plus({ days: 1 }).toISO(),
  city: 'New York',
  zipCode: '10001',
  address: 'Broadway St.',
  gender: 'Female',
},
{
  id: '5',
  createdAt: DateTime.now().plus({ days: -1 }).toISO(),
  city: 'Los Angeles',
  zipCode: '90001',
  address: 'Hollywood Blvd.',
  gender: 'Male',
},
{
  id: '6',
  createdAt: DateTime.now().plus({ days: 1 }).toISO(),
  city: 'Chicago',
  zipCode: '60601',
  address: 'Michigan Ave.',
  gender: 'Male',
},
{
  id: '7',
  createdAt: DateTime.now().toISO(),
  city: 'San Francisco',
  zipCode: '94101',
  address: 'Market St.',
  gender: 'Male',
},
{
  id: '8',
  createdAt: DateTime.now().toISO(),
  city: 'Miami',
  zipCode: '33101',
  address: 'Ocean Dr.',
  gender: 'Female',
},
{
  id: '9',
  createdAt: DateTime.now().toISO(),
  city: 'Houston',
  zipCode: '77001',
  address: 'Main St.',
  gender: 'Male',
}];

export {
  users,
  details,
};
