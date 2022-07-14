import prismaClient from "../prisma";

class GetLast3MessagesService{
    async execute(){
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                create_at: "desc"
            },
            include: {
                user: true
            }
        }).catch(err => console.log(err))
        
        return messages;
    }
};

export { GetLast3MessagesService };