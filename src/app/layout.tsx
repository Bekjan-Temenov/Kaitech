import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Head from 'next/head'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'KaiTech | Разработка программного обеспечения с 2017 года',
	description:
		'KaiTech специализируется на разработке мобильных приложений, CRM-систем, веб-приложений и решений для бизнеса и госструктур с 2017 года.',
	icons: {
		icon: '/favicon.ico',
	},
	keywords:
		'разработка ПО, мобильные приложения, CRM, веб-приложения, автоматизация бизнеса, KaiTech',
	viewport: 'width=device-width, initial-scale=1.0',
	robots: 'index, follow',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='robots' content='index, follow' />
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
