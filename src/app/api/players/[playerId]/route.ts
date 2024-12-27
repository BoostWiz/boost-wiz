import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // URL에서 playerId를 추출
  const url = new URL(req.url);
  const playerId = url.pathname.split('/').pop();

  if (!playerId) {
    return NextResponse.json(
      { error: 'Player ID is required' },
      { status: 400 },
    );
  }

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
