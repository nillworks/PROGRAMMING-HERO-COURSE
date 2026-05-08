'use client';

import { AlertDialog, Button, Table } from '@heroui/react';
import Link from 'next/link';

const UsersList = ({ userData, deleteUserData }) => {
  const data = userData;

  const handleDelete = async userId => {
    console.log(userId);
    await deleteUserData(userId);
  };

  return (
    <Table
      variant="secondary"
      aria-label="Users data table with name, role, age and email"
      className="overflow-hidden mx-auto mt-10 border shadow max-w-6xl"
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

                  <Link href={`/user/${item._id}/edit`}>
                    <Button
                      variant="outline"
                      className={`py-1 px-3 bg-gray-400 text-white font-medium rounded-full`}
                      size="sm"
                    >
                      Edit
                    </Button>
                  </Link>

                  {/* Delete User */}
                  <AlertDialog>
                    <Button variant="danger">Delete</Button>
                    <AlertDialog.Backdrop>
                      <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                          <AlertDialog.CloseTrigger />
                          <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                              Delete project permanently?
                            </AlertDialog.Heading>
                          </AlertDialog.Header>
                          <AlertDialog.Body>
                            <p>
                              This will permanently delete{' '}
                              <strong>My Awesome Project</strong> and all of its
                              data. This action cannot be undone.
                            </p>
                          </AlertDialog.Body>
                          <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                              Cancel
                            </Button>
                            <Button
                              onClick={() => handleDelete(item?._id)}
                              slot="close"
                              variant="danger"
                            >
                              Delete Project
                            </Button>
                          </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                      </AlertDialog.Container>
                    </AlertDialog.Backdrop>
                  </AlertDialog>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default UsersList;
