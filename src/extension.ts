
import * as vscode from 'vscode';
const { SidebarProvider } = require('./SidebarProvider');


export function activate(context: vscode.ExtensionContext) {

	const sidebarProvider = new SidebarProvider();

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider('myExtension-sidebar', sidebarProvider)
	);
}








