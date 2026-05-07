import getUsersData from '@/lib/getUsersData';
import { Button, Table } from '@heroui/react';
import Link from 'next/link';

export default async function Home() {
  const userData = await getUsersData();
  const data = userData?.allUsersData;

  return (
    <Table
      variant="secondary"
      aria-label="Users data table with name, role, age and email"
      className="overflow-hidden mx-auto mt-10 border shadow"
    >
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members">
          {/* Header */}
          <Table.Header className="bg-gray-900 text-white">
            <Table.Column isRowHeader className="py-3 px-4">
              Name
            </Table.Column>
            <Table.Column className="py-3 px-4">Role</Table.Column>
            <Table.Column className="py-3 px-4">Age</Table.Column>
            <Table.Column className="py-3 px-4">Email</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>

          {/* Body */}
          <Table.Body className={''}>
            {data.map((item, i) => (
              <Table.Row key={i}>
                <Table.Cell className="py-3 px-4 font-medium text-gray-700">
                  {item.name}
                </Table.Cell>
                <Table.Cell className="py-3 px-4 text-gray-600">
                  {item.role}
                </Table.Cell>
                <Table.Cell className="py-3 px-4 text-gray-600">
                  {item.age}
                </Table.Cell>
                <Table.Cell className="py-3 px-4 text-blue-600">
                  {item.email}
                </Table.Cell>
                <Table.Cell className="py-3 px-4 flex items-center gap-3">
                  <Button
                    variant="primary"
                    className={`py-1 px-3 bg-green-500 text-white font-medium rounded-full`}
                    size="sm"
                  >
                    <Link href={`/user/${item._id}`}>Details</Link>
                  </Button>

                  <Button
                    variant="outline"
                    className={`py-1 px-3 bg-gray-400 text-white font-medium rounded-full`}
                    size="sm"
                  >
                    <Link href={'/'}>Edit</Link>
                  </Button>

                  <Button
                    variant="danger"
                    className={`py-1 px-3 bg-red-500 cursor-pointer text-white font-medium rounded-full`}
                    size="sm"
                  >
                    <Link href={'/'}> Delete</Link>
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
