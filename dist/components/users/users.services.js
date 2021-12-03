"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_crypto_1 = __importDefault(require("node:crypto"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UsersServices {
    async createOne(data) {
        data.id = "MID-" + node_crypto_1.default.randomUUID();
        const user = await prisma.users.create({ data });
        return user;
    }
    async findOne(value, parameter = "id") {
        const user = await prisma.users.findFirst({
            where: {
                [parameter]: value
            }
        });
        return user;
    }
    async findAll() {
        const allUsers = await prisma.users.findMany();
        return allUsers;
    }
    async updateOne(data) {
        const user = await prisma.users.update({
            data,
            where: {
                id: data.id
            }
        });
        return user;
    }
    async deleteOne(userId) {
        const user = await prisma.users.delete({
            where: {
                id: userId
            }
        });
        return user;
    }
}
exports.default = new UsersServices();
