import { z } from "zod";
import { t, publicProcedure } from "../trpc";
import * as BasicService from '../services/basicCRUD';
import { updateSchema } from "../schemas/zodSchema";

const appRouter = t.router({
    getAll: publicProcedure.query(BasicService.getAll),
    getByID: publicProcedure.input(z.string().uuid()).query(({ input }) => BasicService.getById(input)),

    createNewInstance: publicProcedure.input(z.string()).mutation(({ input }) => BasicService.createNewInstance(input)),

    updateById: publicProcedure.input(updateSchema).mutation(({ input }) => BasicService.updateById(input)),

    deleteByName: publicProcedure.input(z.string()).mutation(({ input }) => BasicService.deleteByName(input)),
    deleteByIdOrName : publicProcedure.input(z.string()).mutation(({ input }) => BasicService.deleteByIdOrName(input)),
    
    sayHi: publicProcedure.query(() => 'Hi!')
});

export default appRouter;
