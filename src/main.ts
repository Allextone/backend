import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Test app')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('Allex Vyslohuzov')
        .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs', app, document);

    await app.listen(PORT, () => { console.log(`Server is start on port: ${PORT}`)});
}

start();