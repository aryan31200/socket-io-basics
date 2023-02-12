import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketGateway } from './socket-gateway/socket-gateway.gateway';
import { SocketGatewayModule } from './socket-gateway/socket-gateway.module';

@Module({
  imports: [SocketGatewayModule],
  controllers: [AppController],
  providers: [AppService, SocketGateway],
})
export class AppModule {}
