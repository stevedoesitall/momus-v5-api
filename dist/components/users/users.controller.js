"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_services_1 = __importDefault(require("./users.services"));
class UsersController {
    async createUser(req, res) {
        try {
            await users_services_1.default.createOne(req.body);
            return res.status(201).send({
                "ok": true
            });
        }
        catch (error) {
            return res.status(500).send({
                "error": "Bad request."
            });
        }
        finally {
            console.log("Finished.");
        }
    }
    async getUser(req, res) {
        try {
            const user = res.locals.user;
            return res.status(200).send(user);
        }
        catch (error) {
            return res.status(500).send({
                "error": "Bad request."
            });
        }
        finally {
            console.log("Finished.");
        }
    }
    async getAllUsers(req, res) {
        try {
            const allUsers = res.locals.users;
            return res.status(200).send(allUsers);
        }
        catch (error) {
            return res.status(500).send({
                "error": "Bad request."
            });
        }
        finally {
            console.log("Finished.");
        }
    }
    async patchUser(req, res) {
        try {
            await users_services_1.default.updateOne(req.body);
            return res.status(201).send({
                "ok": true
            });
        }
        catch (error) {
            return res.status(500).send({
                "error": "Bad request."
            });
        }
        finally {
            console.log("Finished.");
        }
    }
    async deleteUser(req, res) {
        try {
            await users_services_1.default.deleteOne(req.body.id);
            return res.status(201).send({
                "ok": true
            });
        }
        catch (error) {
            return res.status(500).send({
                "error": "Bad request."
            });
        }
        finally {
            console.log("Finished.");
        }
    }
}
exports.default = new UsersController();
