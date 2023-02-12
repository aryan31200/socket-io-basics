import { OnGatewayConnection, OnGatewayDisconnect, WsResponse } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleMessage(data: string, client: Socket): Promise<WsResponse>;
    afterInit(server: Server): Promise<void>;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
}
