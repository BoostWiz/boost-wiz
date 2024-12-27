// 자체 서버 열어서 테스트
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(
  req: Request,
  context: { params: { playerId: string } },
) {
  const { playerId } = await context.params;

  try {
    const filePath = path.join(
      process.cwd(),
      'src',
      'dummy',
      'player',
      `${playerId}.json`,
    );

    const fileData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileData);

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: 'File not found or unable to read' },
      { status: 404 },
    );
  }
}
