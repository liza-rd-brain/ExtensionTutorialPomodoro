
import * as vscode from 'vscode';// Импортируем API VS Code
const { SidebarProvider } = require('./SidebarProvider');// Подключаем класс SidebarProvider


export function activate(context: vscode.ExtensionContext) {
	// Создаём экземпляр SidebarProvider 
	const sidebarProvider = new SidebarProvider();

	// Регистрируем вебвью в сайдбаре:
	// 'myExtension-sidebar' — это ID, который должен совпадать с package.json
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider('myExtension-sidebar', sidebarProvider)
	);
}








