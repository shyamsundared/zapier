import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
import { Kafka } from 'kafkajs';
const kafka = new Kafka({
    clientId: 'outbox-processor',
    brokers: ['localhost:9092'],
});
const TOPIC_NAME = "zap-events";
async function main() {
    const producer = kafka.producer();
    await producer.connect();
    while (1) {
        const pendingrows = await client.zapRunOutbox.findMany({
            where: {},
            take: 10
        });
        producer.send({
            topic: TOPIC_NAME,
            messages: pendingrows.map(r => ({
                value: r.zapRunid
            }))
        });
        await client.zapRunOutbox.deleteMany({
            where: {
                id: {
                    in: pendingrows.map(x => x.id)
                }
            }
        });
    }
}
main();
//# sourceMappingURL=index.js.map