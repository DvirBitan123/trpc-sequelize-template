import t from "../trpc"

const appRouter = t.router({
    sayHi: t.procedure.query(() => {
        return 'Hi!'
    })
});

export default appRouter;
