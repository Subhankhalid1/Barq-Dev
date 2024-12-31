import { NextResponse } from 'next/server';

export function middleware(req:any) {
  const hostname = req.headers.get('host'); 

  if (hostname.includes('daraz.local')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}
