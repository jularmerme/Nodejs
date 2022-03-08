import { v4 as uuidv4 } from "uuid";
let users = [];

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User ${user.name} added to the database`);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`User with id ${id} was deleted from the array`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const userToBeUpdated = users.find((users) => user.id === id);
  const { name, lastName, age } = req.body;
  if (name) user.name = name;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;
  res.send("user was succesfully updated");
};
