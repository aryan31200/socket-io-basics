import { Module } from '@nestjs/common';
import { SocketGateway } from './socket-gateway.gateway';

@Module({
  providers: [SocketGateway],
})
export class SocketGatewayModule {}
