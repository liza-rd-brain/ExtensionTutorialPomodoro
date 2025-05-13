
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';


export class SidebarProvider implements vscode.WebviewViewProvider {

    private _view?: vscode.WebviewView;

    constructor(private readonly _extensionUri: vscode.Uri) {
    }

    public resolveWebviewView(webviewView: vscode.WebviewView) {
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                this._extensionUri
            ],
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    }

    private _getHtmlForWebview(webview: vscode.Webview) {

        const htmlPath = path.join(
            this._extensionUri.fsPath,
            'webApp',
            'dist',
            'index.html'
        );

        if (!fs.existsSync(htmlPath)) {
            throw new Error(`HTML file not found at ${htmlPath}`);
        }

        let html = fs.readFileSync(htmlPath, 'utf8');
        html = html.replace(
            /<head>/,
            `<head>
                <base href="${webview.asWebviewUri(
                vscode.Uri.joinPath(this._extensionUri, 'webApp', 'dist')
            )}/">
            `
        );

        return html;
    }
}