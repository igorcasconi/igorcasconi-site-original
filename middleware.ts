import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function middleware(req: NextRequest) {
  // Verifica se a rota é o apple-app-site-association
  if (req.nextUrl.pathname === "/.well-known/apple-app-site-association") {
    try {
      // Caminho do arquivo dentro da pasta public
      const filePath = path.join(
        process.cwd(),
        "public",
        ".well-known",
        "apple-app-site-association"
      );
      const fileContents = await fs.readFile(filePath, "utf-8");

      // Retorna o arquivo com Content-Type application/json
      return new NextResponse(fileContents, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error("Erro ao ler apple-app-site-association:", err);
      return NextResponse.next();
    }
  }

  // Para todas as outras rotas
  return NextResponse.next();
}
