import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  // namespace: 'chats',
  transports: ['websocket', 'http'],
  // allowEIO3: true,
  cors: true,
  pingInterval: 2000,
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('chats')
  async handleMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ): Promise<WsResponse> {
    const token = client.handshake.headers.authorization;
    console.log(token);
    return { event: 'chats', data: 'test' };
  }

  async afterInit(server: Server) {
    server.on('chats', (...args) => {
      console.log(args);
    });
  }

  handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authorization;
    console.log(token);
    // client.emit('connection', `Connected with client ${client.id}`);
    this.server.emit('chats', `Connected with client ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`client disconnected ${client.id}`);
  }
}
