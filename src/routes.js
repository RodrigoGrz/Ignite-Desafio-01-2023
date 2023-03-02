import { randomUUID } from "node:crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { search } = req.query;

            const users = database.select('tasks', search ? {
                title: search,
                description: search,
            } : null);

            return res.end(JSON.stringify(users));
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { title, description } = req.body;

            if(!title) {
                return res.writeHead(400).end(JSON.stringify("The title can't empty!"));
            }

            if(!description) {
                return res.writeHead(400).end(JSON.stringify("The description can't empty!"));
            }
        
            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at: null,
                created_at: new Date(),
                updated_at: new Date(),
            };

            database.insert('tasks', task);

            return res.writeHead(201).end();
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params;

            const taskExists = database.selectById('tasks', id);

            if(!taskExists) {
                return res.writeHead(400).end(JSON.stringify('User does not exists!'));
            }

            database.delete('tasks', id);

            return res.writeHead(204).end();
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params;
            const { title, description } = req.body;

            if(!title) {
                return res.writeHead(400).end(JSON.stringify("The title can't empty!"));
            }

            if(!description) {
                return res.writeHead(400).end(JSON.stringify("The description can't empty!"));
            }

            const taskExists = database.selectById('tasks', id);

            if(!taskExists) {
                return res.writeHead(400).end(JSON.stringify('User does not exists!'));
            }

            database.update('tasks', id, {
                ...taskExists,
                title: title ? title : taskExists.title,
                description: description ? description : taskExists.description,
            });

            return res.writeHead(204).end();
        }
    },
    {
        method: 'PATCH',
        path: buildRoutePath('/tasks/:id/complete'),
        handler: (req, res) => {
            const { id } = req.params;

            const taskExists = database.selectById('tasks', id);

            if(!taskExists) {
                return res.writeHead(400).end(JSON.stringify('User does not exists!'));
            }

            database.complete('tasks', id);

            return res.writeHead(204).end();
        }
    }
];