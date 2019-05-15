import Model from './base';

class Conversation extends Model {
    constructor() {
        super('conversations');
    }
    static get instance(): Conversation {
        return new Conversation();
    }

    async getByUser(user_id: string): Promise<Conversation[]> {
        const result = [] as Conversation[];
        const record = await this.collection()
            .where("user_ids", "array-contains", user_id)
            .orderBy("updatedAt", "desc")
            .get();
        record.forEach((snapshot)=>{
            const conversation = Conversation.from(snapshot.data()) as Conversation;
            conversation.id = snapshot.id;
            result.push(conversation);
        });

        return result;
    }
}

export default Conversation;
