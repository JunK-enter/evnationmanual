import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const manuals = [
  {
    id: '1',
    filename: 'company-overview.pdf',
    title: 'Company Overview & Organization Chart'
  },
  {
    id: '2',
    filename: 'RCmanual.pdf',
    title: 'RingCentral Communication System Manual'
  },
  {
    id: '3',
    filename: 'projectpricingsum.pdf',
    title: 'Project Pricing Summary & Master Page Tool'
  }
];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const manualId = id;
    const manual = manuals.find(m => m.id === manualId);
    
    if (!manual) {
      return NextResponse.json(
        { error: 'Manual not found' },
        { status: 404 }
      );
    }

    const filePath = path.join(process.cwd(), 'public', 'manuals', manual.filename);
    
    // Check if file exists
    try {
      await fs.access(filePath);
    } catch {
      return NextResponse.json(
        { error: 'PDF file not found' },
        { status: 404 }
      );
    }

    // Read the file
    const fileBuffer = await fs.readFile(filePath);
    
    // Return the file with proper headers
    return new NextResponse(fileBuffer as Buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${manual.title}.pdf"`,
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
