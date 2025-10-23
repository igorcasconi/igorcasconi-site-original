import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "LTYV3G7GT7.br.com.scaffoldeducation.learning",
          paths: ["*"],
        },
      ],
    },
  });
}
